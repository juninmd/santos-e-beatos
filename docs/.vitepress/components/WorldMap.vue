<template>
  <section class="mundo">
    <div class="filtros" role="group" aria-label="Tipos de marcador">
      <button v-for="(t, k) in MARKER_TYPES" :key="k" type="button" class="sb-chip" :aria-pressed="ativos.includes(k)" @click="alternar(k)">
        <span class="dot" :style="{ background: t.color }" aria-hidden="true"></span>{{ t.label }}
        <span class="n">{{ contagem[k] || 0 }}</span>
      </button>
    </div>
    <div ref="el" class="sb-world-map" aria-label="Mapa-múndi com os lugares de todas as vidas do acervo"></div>
    <p class="nota">{{ data.pinos.length }} lugares de {{ data.paginas.length }} vidas. Toque num ponto para abrir a história.</p>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useData } from 'vitepress'
import { data } from '../../mapa.data.js'
import { MARKER_TYPES, criarMapa, escapeHtml } from '../utils/mapa.js'
import { link } from '../utils/saints.js'

const { isDark } = useData()
const el = ref(null)
const ativos = ref(Object.keys(MARKER_TYPES))
const contagem = {}
for (const p of data.pinos) contagem[p[2]] = (contagem[p[2]] || 0) + 1

let mapa = null
let camadas = {}

const alternar = (k) => {
  ativos.value = ativos.value.includes(k) ? ativos.value.filter((x) => x !== k) : [...ativos.value, k]
}

function desenhar() {
  const { L, map } = mapa
  Object.values(camadas).forEach((c) => map.removeLayer(c))
  camadas = {}
  for (const k of ativos.value) {
    const cor = MARKER_TYPES[k]?.color || '#6f9cff'
    const grupo = L.layerGroup()
    for (const [lat, lng, tipo, local, idx] of data.pinos) {
      if (tipo !== k) continue
      const pg = data.paginas[idx]
      L.circleMarker([lat, lng], { radius: 5, color: '#fff', weight: 1, fillColor: cor, fillOpacity: 0.9 })
        .bindPopup(`<b>${escapeHtml(pg.title)}</b><br>${escapeHtml(local)}<br><em>${escapeHtml(MARKER_TYPES[k].label)}</em><br><a href="${link(pg.url)}">Ler a história →</a>`)
        .addTo(grupo)
    }
    camadas[k] = grupo.addTo(map)
  }
}

onMounted(async () => {
  mapa = await criarMapa(el.value, isDark.value, { scrollWheelZoom: true, minZoom: 2 })
  mapa.map.setView([30, 10], 2)
  desenhar()
})
watch(ativos, () => mapa && desenhar())
watch(isDark, (v) => mapa?.tema(v))
onBeforeUnmount(() => { mapa?.map.remove(); mapa = null })
</script>

<style scoped>
.mundo { padding-bottom: 64px; }
.filtros { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.dot { width: 10px; height: 10px; border-radius: 99px; }
.n { font-size: 12px; color: var(--sb-muted); }
.nota { margin: 12px 0 0; font: 400 14px var(--sb-ui); color: var(--sb-muted); }
</style>
