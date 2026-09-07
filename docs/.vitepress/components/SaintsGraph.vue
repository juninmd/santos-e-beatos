<template>
  <div class="graph-wrap">
    <div class="graph-toolbar">
      <input v-model="filtro" type="search" placeholder="Buscar santo ou beato..." />
      <span class="graph-legend">
        <span class="dot santo"></span> Santos
        <span class="dot beato"></span> Beatos
      </span>
      <span class="graph-count">{{ nos.length }} nós · {{ arestas.length }} ligações</span>
    </div>
    <svg
      ref="svgEl"
      class="graph-svg"
      :viewBox="viewBox"
      @wheel.prevent="onWheel"
      @pointerdown="onPanStart"
      @pointermove="onPanMove"
      @pointerup="onPanEnd"
      @pointerleave="onPanEnd"
    >
      <g>
        <line
          v-for="(e, i) in arestasVisiveis"
          :key="i"
          :x1="pos[e.source]?.x" :y1="pos[e.source]?.y"
          :x2="pos[e.target]?.x" :y2="pos[e.target]?.y"
          class="edge"
        />
        <g
          v-for="n in nosVisiveis"
          :key="n.id"
          :transform="`translate(${pos[n.id]?.x || 0}, ${pos[n.id]?.y || 0})`"
          class="node"
          :class="[n.type, { dim: filtro && !match(n) }]"
          @pointerdown.stop="onNodeDragStart(n, $event)"
          @click="irPara(n)"
        >
          <circle :r="raio(n)" />
          <text :y="raio(n) + 12">{{ n.nome }}</text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vitepress'
import { data } from '../../relations.data.js'

const router = useRouter()
const nos = data.nos
const arestas = data.arestas

const filtro = ref('')
const pos = reactive({})
const svgEl = ref(null)

const grau = computed(() => {
  const g = {}
  for (const n of nos) g[n.id] = 0
  for (const e of arestas) {
    g[e.source] = (g[e.source] || 0) + 1
    g[e.target] = (g[e.target] || 0) + 1
  }
  return g
})

function raio(n) {
  return 5 + Math.min(10, (grau.value[n.id] || 0))
}

function match(n) {
  const q = filtro.value.trim().toLowerCase()
  if (!q) return true
  return n.title.toLowerCase().includes(q)
}

const nosVisiveis = computed(() => nos)
const arestasVisiveis = computed(() => arestas)

// Layout: força simples (repulsão entre nós + atração pelas arestas), calculado
// no cliente uma vez ao montar, sem dependências externas.
function layout() {
  const W = 1600, H = 1200
  for (const n of nos) {
    pos[n.id] = {
      x: W / 2 + (Math.random() - 0.5) * W,
      y: H / 2 + (Math.random() - 0.5) * H
    }
  }
  const vizinhos = {}
  for (const n of nos) vizinhos[n.id] = []
  for (const e of arestas) {
    vizinhos[e.source]?.push(e.target)
    vizinhos[e.target]?.push(e.source)
  }

  const ITER = 150
  for (let it = 0; it < ITER; it++) {
    const disp = {}
    for (const n of nos) disp[n.id] = { x: 0, y: 0 }

    // Repulsão (todos contra todos, amostrado por bucket simples para custo aceitável).
    for (let i = 0; i < nos.length; i++) {
      for (let j = i + 1; j < nos.length; j++) {
        const a = nos[i], b = nos[j]
        let dx = pos[a.id].x - pos[b.id].x
        let dy = pos[a.id].y - pos[b.id].y
        let d2 = dx * dx + dy * dy || 0.01
        if (d2 > 90000) continue // ignora pares distantes: acelera sem mudar o resultado visível
        const d = Math.sqrt(d2)
        const force = 1800 / d2
        dx = (dx / d) * force
        dy = (dy / d) * force
        disp[a.id].x += dx; disp[a.id].y += dy
        disp[b.id].x -= dx; disp[b.id].y -= dy
      }
    }
    // Atração pelas arestas.
    for (const e of arestas) {
      const a = pos[e.source], b = pos[e.target]
      if (!a || !b) continue
      const dx = a.x - b.x, dy = a.y - b.y
      const d = Math.sqrt(dx * dx + dy * dy) || 0.01
      const force = d * 0.01
      const fx = (dx / d) * force, fy = (dy / d) * force
      disp[e.source].x -= fx; disp[e.source].y -= fy
      disp[e.target].x += fx; disp[e.target].y += fy
    }
    // Atração leve para o centro (evita nós isolados fugirem do quadro).
    for (const n of nos) {
      disp[n.id].x += (W / 2 - pos[n.id].x) * 0.002
      disp[n.id].y += (H / 2 - pos[n.id].y) * 0.002
    }

    for (const n of nos) {
      pos[n.id].x += Math.max(-30, Math.min(30, disp[n.id].x))
      pos[n.id].y += Math.max(-30, Math.min(30, disp[n.id].y))
    }
  }
}

function irPara(n) {
  if (dragged) { dragged = false; return }
  router.go(n.id)
}

// Arrastar nó individual.
let draggingNode = null
function onNodeDragStart(n, ev) {
  draggingNode = n
  dragged = false
  ev.target.setPointerCapture?.(ev.pointerId)
}
let dragged = false

// Pan/zoom do canvas.
const view = reactive({ x: 0, y: 0, w: 1600, h: 1200 })
const viewBox = computed(() => `${view.x} ${view.y} ${view.w} ${view.h}`)
let panning = false
let last = { x: 0, y: 0 }

function screenToWorld(ev) {
  const rect = svgEl.value.getBoundingClientRect()
  const sx = (ev.clientX - rect.left) / rect.width
  const sy = (ev.clientY - rect.top) / rect.height
  return { x: view.x + sx * view.w, y: view.y + sy * view.h }
}

function onPanStart(ev) {
  if (draggingNode) return
  panning = true
  last = { x: ev.clientX, y: ev.clientY }
}
function onPanMove(ev) {
  if (draggingNode) {
    const p = screenToWorld(ev)
    pos[draggingNode.id] = p
    dragged = true
    return
  }
  if (!panning) return
  const rect = svgEl.value.getBoundingClientRect()
  const dx = (ev.clientX - last.x) / rect.width * view.w
  const dy = (ev.clientY - last.y) / rect.height * view.h
  view.x -= dx; view.y -= dy
  last = { x: ev.clientX, y: ev.clientY }
}
function onPanEnd() {
  panning = false
  draggingNode = null
}
function onWheel(ev) {
  const factor = ev.deltaY > 0 ? 1.1 : 0.9
  const p = screenToWorld(ev)
  view.x = p.x - (p.x - view.x) * factor
  view.y = p.y - (p.y - view.y) * factor
  view.w *= factor
  view.h *= factor
}

onMounted(() => {
  layout()
})
</script>

<style scoped>
.graph-wrap { display: flex; flex-direction: column; gap: 8px; }
.graph-toolbar { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.graph-toolbar input {
  padding: 4px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
.graph-legend { font-size: 12px; color: var(--vp-c-text-2); display: inline-flex; align-items: center; gap: 4px; }
.graph-count { font-size: 12px; color: var(--vp-c-text-2); }
.dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-left: 8px; }
.dot.santo { background: #d4a017; }
.dot.beato { background: #4a7fbf; }
.graph-svg {
  width: 100%;
  height: 78vh;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  touch-action: none;
  cursor: grab;
}
.edge { stroke: var(--vp-c-divider); stroke-width: 1; opacity: 0.5; }
.node circle { stroke: var(--vp-c-bg); stroke-width: 1; cursor: pointer; }
.node.santo circle { fill: #d4a017; }
.node.beato circle { fill: #4a7fbf; }
.node text {
  font-size: 10px;
  text-anchor: middle;
  fill: var(--vp-c-text-1);
  pointer-events: none;
  user-select: none;
}
.node.dim { opacity: 0.15; }
</style>
