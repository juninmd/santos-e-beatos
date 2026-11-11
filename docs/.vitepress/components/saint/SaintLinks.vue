<template>
  <section v-if="lacos.length" class="lacos" aria-labelledby="lacos-titulo">
    <p class="sb-eyebrow">Constelação</p>
    <h2 id="lacos-titulo">Laços</h2>
    <p class="intro">Santos e beatos citados nesta história — ou que citam esta vida.</p>
    <div class="lista">
      <a v-for="l in lacos" :key="l.id" :href="link(l.id)" class="sb-chip">
        <span class="mono" :style="{ background: vitral(l.title) }" aria-hidden="true">{{ inicial(l.title) }}</span>
        {{ l.title }}
      </a>
    </div>
    <a class="sb-btn ghost" :href="link('/grafo')">Ver na constelação →</a>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data } from '../../../relations.data.js'
import { link, inicial, vitral } from '../../utils/saints.js'

const { page } = useData()
const url = computed(() => '/' + page.value.relativePath.replace(/index\.md$/, ''))

const lacos = computed(() => {
  const ids = new Set()
  for (const e of data.arestas) {
    if (e.source === url.value) ids.add(e.target)
    if (e.target === url.value) ids.add(e.source)
  }
  return data.nos.filter((n) => ids.has(n.id)).slice(0, 16)
})
</script>

<style scoped>
.lacos { margin-top: 64px; }
h2 { margin: 8px 0 0; font: 600 clamp(32px, 4vw, 44px) var(--sb-display); color: var(--sb-text); }
.intro { margin: 8px 0 20px; color: var(--sb-muted); font: 400 15px var(--sb-ui); }
.lista { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px; }
.sb-chip { padding-left: 6px; }
.mono {
  width: 30px; height: 30px; border-radius: 999px; display: grid; place-items: center;
  font: 600 14px var(--sb-caps); color: #f6dfa0;
}
</style>
