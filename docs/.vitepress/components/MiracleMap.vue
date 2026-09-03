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
import { onMounted, onBeforeUnmount, computed, ref, nextTick } from 'vue'
import { inBrowser } from 'vitepress'

// Marker taxonomy shared by every page: birth, death, miracles, relics and
// the places the saint lived through. Colors double as the legend swatches.
const MARKER_TYPES = {
  nascimento: { label: 'Nascimento', color: '#2e7d32' },
  morte: { label: 'Morte / Martírio', color: '#c62828' },
  milagre: { label: 'Milagre', color: '#f9a825' },
  tumulo: { label: 'Túmulo / Relíquias', color: '#6a1b9a' },
  vida: { label: 'Vida e missão', color: '#1565c0' }
}
const DEFAULT_TYPE = 'vida'

const props = defineProps({
  items: { type: Array, default: () => [] },
  title: { type: String, default: 'Mapa: nascimento, morte e milagres' }
})

const isClient = ref(false)
const container = ref(null)
let map = null

// Discard entries without usable coordinates so a typo never breaks the page.
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
// Um leve deslocamento em círculo mantém os dois clicáveis sem falsear o dado:
// o popup continua descrevendo o local real.
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
    const radius = 0.006
    group.forEach((m, i) => {
      const angle = (2 * Math.PI * i) / group.length
      out.push({
        ...m,
        lat: m.lat + radius * Math.sin(angle),
        lng: m.lng + radius * Math.cos(angle)
      })
    })
  }
  return out
}

const placed = computed(() => spread(markers.value))

const usedTypes = computed(() =>
  Object.keys(MARKER_TYPES).filter((t) => markers.value.some((m) => m.type === t))
)

const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  )

onMounted(async () => {
  isClient.value = inBrowser
  if (!isClient.value || !markers.value.length) return

  const L = (await import('leaflet')).default
  await nextTick()
  if (!container.value) return

  map = L.map(container.value, { scrollWheelZoom: false })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  placed.value.forEach((item) => {
    const { color, label } = MARKER_TYPES[item.type]
    const icon = L.divIcon({
      className: 'miracle-map-pin',
      html: `<span style="background-color:${color}"></span>`,
      iconSize: [22, 22],
      iconAnchor: [11, 22],
      popupAnchor: [0, -20]
    })

    L.marker([item.lat, item.lng], { icon, title: item.title })
      .addTo(map)
      .bindPopup(
        `<b>${escapeHtml(item.title)}</b><br><em>${escapeHtml(label)}</em>` +
          (item.description ? `<br>${escapeHtml(item.description)}` : '')
      )
  })

  const bounds = L.latLngBounds(placed.value.map((m) => [m.lat, m.lng]))
  map.fitBounds(bounds, { padding: [40, 40], maxZoom: 8 })
})

// VitePress keeps the SPA alive between routes; without this Leaflet throws
// "Map container is already initialized" on the next page that has a map.
onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})
</script>

<style scoped>
.miracle-map-wrapper {
  margin: 24px 0;
}
.miracle-map-container {
  height: 420px;
  width: 100%;
  border-radius: 8px;
  z-index: 0;
}
.miracle-map-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.miracle-map-legend li {
  display: flex;
  align-items: center;
  gap: 6px;
}
.miracle-map-legend .dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
}
</style>

<style>
/* Not scoped: Leaflet renders divIcon markup outside the component tree. */
.miracle-map-pin span {
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  border: 2px solid #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);
}
</style>
