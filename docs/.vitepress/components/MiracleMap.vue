<template>
  <div v-if="isClient" class="miracle-map-wrapper">
    <h3>Localização dos Milagres / Vida</h3>
    <div id="map" class="miracle-map-container"></div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { inBrowser } from 'vitepress'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const isClient = ref(false)

onMounted(async () => {
  isClient.value = inBrowser
  if (isClient.value) {
    // Dynamically import Leaflet only on client side
    const L = (await import('leaflet')).default

    // Wait for DOM update
    await nextTick()

    // Default center (Rome) if no items, otherwise first item
    const center = props.items.length > 0
      ? [props.items[0].lat, props.items[0].lng]
      : [41.9028, 12.4964]

    const map = L.map('map').setView(center, 5)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    props.items.forEach(item => {
      L.marker([item.lat, item.lng])
        .addTo(map)
        .bindPopup(`<b>${item.title}</b><br>${item.description || ''}`)
    })

    // Fix marker icon issue in Leaflet + Webpack/Vite
    // See https://github.com/Leaflet/Leaflet/issues/4968
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }
})
</script>

<style scoped>
.miracle-map-wrapper {
  margin: 20px 0;
}
.miracle-map-container {
  height: 400px;
  width: 100%;
  border-radius: 8px;
  z-index: 0;
}
</style>
