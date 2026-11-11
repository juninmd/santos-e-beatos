<template>
  <div class="ceu">
    <div class="barra">
      <label class="busca"><span class="sb-sr">Buscar santo ou beato</span>
        <input v-model="filtro" type="search" placeholder="Buscar na constelação…" @keydown.enter="focarBusca" />
      </label>
      <span class="legenda"><span class="dot santo"></span> Santos <span class="dot beato"></span> Beatos</span>
      <span class="legenda">{{ nos.length }} estrelas · {{ arestas.length }} laços</span>
    </div>
    <div class="palco">
      <svg ref="svgEl" class="grafo" :viewBox="viewBox" role="img" aria-label="Grafo de relações entre santos e beatos"
        @wheel.prevent="onWheel" @pointerdown="onPanStart" @pointermove="onPanMove" @pointerup="onPanEnd" @pointerleave="onPanEnd">
        <line v-for="(e, i) in arestas" :key="i" :x1="pos[e.source]?.x" :y1="pos[e.source]?.y" :x2="pos[e.target]?.x" :y2="pos[e.target]?.y"
          class="aresta" :class="{ quente: sel && (e.source === sel || e.target === sel) }" />
        <g v-for="n in nos" :key="n.id" :transform="`translate(${pos[n.id]?.x || 0}, ${pos[n.id]?.y || 0})`"
          class="no" :class="[n.type, { apagado: apagado(n), sel: n.id === sel }]"
          @pointerdown.stop="onNodeDragStart(n, $event)" @click="clicar(n)" @dblclick="router.go(link(n.id))">
          <circle class="brilho" :r="raio(n) * 2.4" />
          <circle :r="n.id === sel ? raio(n) * 1.6 : raio(n)" />
          <text :y="raio(n) + 14">{{ n.nome }}</text>
        </g>
      </svg>
      <GraphPanel class="lado" :no="noSel" :lista="listaVizinhos" @selecionar="(id) => (sel = id)" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vitepress'
import { data } from '../../relations.data.js'
import { link, normalizar } from '../utils/saints.js'
import { calcularLayout, vizinhos, W, H } from './graph/forceLayout.js'
import GraphPanel from './graph/GraphPanel.vue'

const router = useRouter()
const { nos, arestas } = data
const porId = Object.fromEntries(nos.map((n) => [n.id, n]))
const filtro = ref('')
const sel = ref(null)
const pos = reactive({})
const svgEl = ref(null)

const grau = {}
for (const e of arestas) { grau[e.source] = (grau[e.source] || 0) + 1; grau[e.target] = (grau[e.target] || 0) + 1 }
const raio = (n) => 5 + Math.min(10, grau[n.id] || 0)

const listaVizinhos = computed(() => (sel.value ? vizinhos(arestas, sel.value).map((v) => ({ ...v, no: porId[v.id] })) : []))
const proximos = computed(() => new Set([sel.value, ...listaVizinhos.value.map((v) => v.id)]))
const noSel = computed(() => porId[sel.value] || null)

const casa = (n) => !filtro.value.trim() || normalizar(n.title).includes(normalizar(filtro.value.trim()))
const apagado = (n) => (sel.value ? !proximos.value.has(n.id) : !casa(n))

function focarBusca() {
  const alvo = nos.find(casa)
  if (alvo) { sel.value = alvo.id; centrar(alvo.id) }
}

// Pan/zoom por viewBox.
const view = reactive({ x: 0, y: 0, w: W, h: H })
const viewBox = computed(() => `${view.x} ${view.y} ${view.w} ${view.h}`)
function centrar(id) { const p = pos[id]; if (p) { view.x = p.x - view.w / 2; view.y = p.y - view.h / 2 } }

let arrastando = null
let arrastou = false
let panning = false
let ultimo = { x: 0, y: 0 }

function paraMundo(ev) {
  const r = svgEl.value.getBoundingClientRect()
  return { x: view.x + ((ev.clientX - r.left) / r.width) * view.w, y: view.y + ((ev.clientY - r.top) / r.height) * view.h }
}
function onNodeDragStart(n, ev) { arrastando = n; arrastou = false; ev.target.setPointerCapture?.(ev.pointerId) }
function onPanStart(ev) { if (!arrastando) { panning = true; ultimo = { x: ev.clientX, y: ev.clientY } } }
function onPanMove(ev) {
  if (arrastando) { pos[arrastando.id] = paraMundo(ev); arrastou = true; return }
  if (!panning) return
  const r = svgEl.value.getBoundingClientRect()
  view.x -= ((ev.clientX - ultimo.x) / r.width) * view.w
  view.y -= ((ev.clientY - ultimo.y) / r.height) * view.h
  ultimo = { x: ev.clientX, y: ev.clientY }
}
function onPanEnd() { panning = false; arrastando = null }
function onWheel(ev) {
  const k = ev.deltaY > 0 ? 1.1 : 0.9
  const p = paraMundo(ev)
  view.x = p.x - (p.x - view.x) * k
  view.y = p.y - (p.y - view.y) * k
  view.w *= k
  view.h *= k
}
function clicar(n) {
  if (arrastou) { arrastou = false; return }
  sel.value = sel.value === n.id ? null : n.id
}

onMounted(() => Object.assign(pos, calcularLayout(nos, arestas)))
</script>

<style scoped>
.ceu { display: flex; flex-direction: column; gap: 12px; }
.barra { display: flex; flex-wrap: wrap; align-items: center; gap: 14px; }
.busca input { min-height: 44px; width: 280px; max-width: 100%; padding: 0 16px; border-radius: 999px; border: 1px solid var(--sb-line); background: var(--sb-surface); color: var(--sb-text); font: 400 14px var(--sb-ui); }
.legenda { display: inline-flex; align-items: center; gap: 6px; font: 400 13px var(--sb-ui); color: var(--sb-muted); }
.dot { width: 9px; height: 9px; border-radius: 50%; margin-left: 6px; }
.dot.santo { background: #e9c46a; }
.dot.beato { background: #f08aa8; }
.palco { position: relative; display: flex; flex-wrap: wrap; gap: 16px; }
.grafo {
  flex: 999 1 560px; min-width: 0; height: 76vh; border-radius: 28px; border: 1px solid var(--sb-line);
  background: radial-gradient(900px 600px at 40% 50%, #1b1a3f, #07061a 70%); touch-action: none; cursor: grab;
}
.lado { flex: 1 1 300px; max-height: 76vh; }
.aresta { stroke: rgba(180, 170, 230, 0.22); stroke-width: 1; transition: stroke 0.3s; }
.aresta.quente { stroke: #e9c46a; stroke-width: 2; stroke-dasharray: 6 10; animation: fluxo 1.4s linear infinite; }
@keyframes fluxo { to { stroke-dashoffset: -32; } }
.no { cursor: pointer; transition: opacity 0.4s; }
.no circle { transition: r 0.3s var(--sb-ease); }
.no.santo circle:not(.brilho) { fill: #e9c46a; }
.no.beato circle:not(.brilho) { fill: #f08aa8; }
.brilho { fill: rgba(233, 196, 106, 0.18); opacity: 0; transition: opacity 0.3s; }
.no:hover .brilho, .no.sel .brilho { opacity: 1; }
.no.sel .brilho { animation: sb-glow 2.4s ease-in-out infinite; }
.no text { font: 500 11px var(--sb-ui); text-anchor: middle; fill: #f4eedc; pointer-events: none; user-select: none; paint-order: stroke; stroke: #07061a; stroke-width: 3px; }
.no.apagado { opacity: 0.14; }
</style>
