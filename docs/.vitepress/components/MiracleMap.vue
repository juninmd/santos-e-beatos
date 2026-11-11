<template>
  <div v-if="isClient && markers.length" class="miracle-map-wrapper">
    <h3>{{ title }}</h3>
    <div ref="container" class="miracle-map-container"></div>
    <ul class="miracle-map-legend">
      <li v-for="type in usedTypes" :key="type">
        <span class="dot" :style="{ backgroundColor: MARKER_TYPES[type].color }"></span>
        {{ MARKER_TYPES[type].label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, computed, ref, nextTick, watch } from 'vue'
import { inBrowser, useData } from 'vitepress'
import { MARKER_TYPES, DEFAULT_TYPE, criarMapa, escapeHtml } from '../utils/mapa.js'

const props = defineProps({
  items: { type: Array, default: () => [] },
  title: { type: String, default: 'Mapa: nascimento, morte e milagres' }
})

const { isDark } = useData()
const isClient = ref(false)
const container = ref(null)
let mapa = null

// Descarta entradas sem coordenadas válidas para um erro de digitação não quebrar a página.
const markers = computed(() =>
  props.items
    .filter((i) => Number.isFinite(Number(i?.lat)) && Number.isFinite(Number(i?.lng)))
    .map((i) => ({
      ...i,
      lat: Number(i.lat),
      lng: Number(i.lng),
      type: MARKER_TYPES[i.type] ? i.type : DEFAULT_TYPE
    }))
)

// Nascimento e morte na mesma cidade geram dois marcadores no mesmo ponto.
// Um leve deslocamento em círculo mantém os dois clicáveis sem falsear o dado.
const spread = (list) => {
  const groups = new Map()
  for (const m of list) {
    const key = `${m.lat.toFixed(3)},${m.lng.toFixed(3)}`
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(m)
  }
  const out = []
  for (const group of groups.values()) {
    if (group.length === 1) { out.push(group[0]); continue }
    group.forEach((m, i) => {
      const angle = (2 * Math.PI * i) / group.length
      out.push({ ...m, lat: m.lat + 0.006 * Math.sin(angle), lng: m.lng + 0.006 * Math.cos(angle) })
    })
  }
  return out
}

const usedTypes = computed(() =>
  Object.keys(MARKER_TYPES).filter((t) => markers.value.some((m) => m.type === t))
)

onMounted(async () => {
  isClient.value = inBrowser
  if (!isClient.value || !markers.value.length) return
  await nextTick()
  if (!container.value) return

  mapa = await criarMapa(container.value, isDark.value)
  const { L, map } = mapa
  const pontos = spread(markers.value)

  // Rota na ordem em que os lugares aparecem na página: a vida "caminhando" pelo mapa.
  if (pontos.length > 1) {
    L.polyline(pontos.map((m) => [m.lat, m.lng]), {
      color: '#e9c46a', weight: 2.5, opacity: 0.85, className: 'sb-route'
    }).addTo(map)
  }

  pontos.forEach((item) => {
    const { color, label } = MARKER_TYPES[item.type]
    const icon = L.divIcon({
      className: 'miracle-map-pin',
      html: `<span style="background-color:${color};color:${color}"></span>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
      popupAnchor: [0, -10]
    })
    L.marker([item.lat, item.lng], { icon, title: item.title })
      .addTo(map)
      .bindPopup(
        `<b>${escapeHtml(item.title)}</b><br><em>${escapeHtml(label)}</em>` +
          (item.description ? `<br>${escapeHtml(item.description)}` : '')
      )
  })

  map.fitBounds(L.latLngBounds(pontos.map((m) => [m.lat, m.lng])), { padding: [40, 40], maxZoom: 8 })
})

watch(isDark, (v) => mapa?.tema(v))

// O SPA do VitePress reaproveita a página; sem isto o Leaflet acusa
// "Map container is already initialized" no próximo mapa.
onBeforeUnmount(() => {
  mapa?.map.remove()
  mapa = null
})
</script>
