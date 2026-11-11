<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <div v-if="biografia" class="progresso" aria-hidden="true"><span :style="{ transform: `scaleX(${progresso})` }"></span></div>
    </template>
    <template #doc-before>
      <SaintHero v-if="biografia" />
    </template>
    <template #doc-after>
      <SaintLinks v-if="biografia" />
    </template>
    <template #layout-bottom>
      <MobileTabBar />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import SaintHero from '../components/saint/SaintHero.vue'
import MobileTabBar from '../components/MobileTabBar.vue'

// Os laços dependem do grafo inteiro: carregam à parte, só nas biografias.
const SaintLinks = defineAsyncComponent(() => import('../components/saint/SaintLinks.vue'))

const { page } = useData()
// Biografia = qualquer página dentro de santos/ ou beatos/, menos os índices.
const biografia = computed(() => /^(santos|beatos)\/[^/]+\/index\.md$/.test(page.value.relativePath))

const progresso = ref(0)
const medir = () => {
  const max = document.documentElement.scrollHeight - innerHeight
  progresso.value = max > 0 ? Math.min(1, scrollY / max) : 0
}
onMounted(() => addEventListener('scroll', medir, { passive: true }))
onBeforeUnmount(() => removeEventListener('scroll', medir))
</script>

<style scoped>
.progresso { position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 3px; pointer-events: none; }
.progresso span {
  display: block; height: 100%; transform-origin: 0 50%;
  background: linear-gradient(90deg, #b8862b, #f6dfa0);
}
</style>
