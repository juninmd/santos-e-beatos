<script setup>
import { data } from '../../saints.data.js'
import { onMounted, ref } from 'vue'
import { inBrowser } from 'vitepress'

// O build renomeia as imagens para /assets com hash; este mapa liga o caminho
// de origem à URL final. Sem ele, a foto do santo do dia quebra em produção.
const imagens = import.meta.glob('../../{santos,beatos}/*/imagens/*.{jpg,jpeg,png,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default'
})

const resolverImagem = (caminho) => {
  if (!caminho) return ''
  if (/^https?:/.test(caminho)) return caminho
  return imagens[`../../${caminho}`] || ''
}

const featuredSaint = ref(null)
const imageSrc = ref('')

const months = {
  'janeiro': 0,
  'fevereiro': 1,
  'março': 2,
  'abril': 3,
  'maio': 4,
  'junho': 5,
  'julho': 6,
  'agosto': 7,
  'setembro': 8,
  'outubro': 9,
  'novembro': 10,
  'dezembro': 11
}

const parseDate = (dateStr) => {
  if (!dateStr) return null
  // "12 de outubro"
  const parts = dateStr.toLowerCase().split(' de ')
  if (parts.length < 2) return null

  const day = parseInt(parts[0], 10)
  const monthName = parts[1].split(',')[0].trim() // Handle "outubro, (notes)" if any
  const month = months[monthName]

  return { day, month }
}

onMounted(() => {
  if (!inBrowser) return

  const today = new Date()
  const currentDay = today.getDate()
  const currentMonth = today.getMonth() // 0-indexed

  // 1. Try to find exact match
  const matches = data.filter(saint => {
    const d = parseDate(saint.feastDay)
    return d && d.day === currentDay && d.month === currentMonth
  })

  let saint = null
  if (matches.length > 0) {
    saint = { ...matches[0], label: 'Santo do Dia' }
  } else {
    // 2. If no match, pick a "Featured" one based on day of year to rotate
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
    const index = dayOfYear % data.length
    saint = { ...data[index], label: 'Santo em Destaque' }
  }

  featuredSaint.value = saint
  imageSrc.value = resolverImagem(saint?.image)
})

</script>

<template>
  <div v-if="featuredSaint" class="saint-of-day">
    <h3>{{ featuredSaint.label }}</h3>
    <div class="content">
      <div v-if="imageSrc" class="image-container">
        <img :src="imageSrc" :alt="featuredSaint.title" />
      </div>
      <div class="info">
        <h4>{{ featuredSaint.title }}</h4>
        <p v-if="featuredSaint.feastDay"><strong>Festa Litúrgica:</strong> {{ featuredSaint.feastDay }}</p>
        <p v-if="featuredSaint.birth"><strong>Nascimento:</strong> {{ featuredSaint.birth }}</p>
        <p v-if="featuredSaint.death"><strong>Morte:</strong> {{ featuredSaint.death }}</p>
        <a :href="featuredSaint.url" class="read-more">Ler História Completa</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.saint-of-day {
  max-width: 800px;
  margin: 2rem auto;
  padding: 3rem 1.75rem 1.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 200px 200px 16px 16px / 60px 60px 16px 16px;
  border-top: 4px solid var(--sb-gold);
  background: linear-gradient(180deg, var(--vp-c-brand-soft), var(--vp-c-bg-soft));
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
}

.saint-of-day h3 {
  margin-top: 0;
  color: var(--vp-c-brand-1);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.95rem;
  font-family: var(--sb-display);
  margin-bottom: 1.5rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

@media (min-width: 640px) {
  .content {
    flex-direction: row;
    align-items: flex-start;
  }
}

.image-container {
  flex-shrink: 0;
  width: 100%;
  max-width: 200px;
}

.image-container img {
  border: 4px solid var(--sb-parchment);
  outline: 2px solid var(--sb-gold);
  margin: 0;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}

.info {
  flex-grow: 1;
}

.info h4 {
  margin-top: 0;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.read-more {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.55rem 1.2rem;
  background-color: var(--vp-c-brand-1);
  color: white !important; /* Force white text */
  text-decoration: none;
  border-radius: 999px;
  transition: background-color 0.2s;
  font-weight: 500;
}

.read-more:hover {
  background-color: var(--vp-c-brand-2);
  text-decoration: none;
}
</style>
