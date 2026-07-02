<script setup>
import { data } from '../../saints.data.js'
import { onMounted, ref } from 'vue'
import { inBrowser } from 'vitepress'

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
  if (saint && saint.image) {
    imageSrc.value = saint.url + saint.image
  }
})

</script>

<template>
  <div v-if="featuredSaint" class="saint-of-day">
    <h3>{{ featuredSaint.label }}</h3>
    <div class="content">
      <div class="image-container">
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
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.saint-of-day h3 {
  margin-top: 0;
  color: var(--vp-c-brand);
  text-align: center;
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
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-brand);
  color: white !important; /* Force white text */
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
  font-weight: 500;
}

.read-more:hover {
  background-color: var(--vp-c-brand-dark);
  text-decoration: none;
}
</style>
