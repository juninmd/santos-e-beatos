<template>
  <nav class="tabbar" aria-label="Navegação principal">
    <a v-for="t in TABS" :key="t.url" :href="link(t.url)" :aria-current="ativa(t) ? 'page' : undefined">
      <span class="pill"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path :d="t.d" /></svg></span>
      <span>{{ t.rot }}</span>
    </a>
  </nav>
</template>

<script setup>
import { useRoute, withBase } from 'vitepress'
import { link } from '../utils/saints.js'

const route = useRoute()
const TABS = [
  { rot: 'Início', url: '/', d: 'M3 11 12 4l9 7v9h-6v-6H9v6H3z' },
  { rot: 'Explorar', url: '/explorar', d: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm3.5 5.5-2 5-5 2 2-5z', tambem: ['/santos/', '/beatos/'] },
  { rot: 'Agenda', url: '/calendario', d: 'M4 6h16v14H4zM4 10h16M9 3v4M15 3v4' },
  { rot: 'Mapa', url: '/mapa', d: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14' },
  { rot: 'Laços', url: '/grafo', d: 'M6 6m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 8m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 18m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M8 7l8 1M7 8l4 8M17 10l-4 7' }
]

const ativa = (t) => {
  const p = route.path.replace(/\.html$/, '')
  if (t.url === '/') return p === withBase('/')
  return p.startsWith(withBase(t.url)) || (t.tambem || []).some((u) => p.startsWith(withBase(u)))
}
</script>

<style scoped>
.tabbar {
  position: fixed; left: 12px; right: 12px; bottom: max(12px, env(safe-area-inset-bottom)); z-index: 40;
  display: none; grid-template-columns: repeat(5, minmax(0, 1fr)); height: 68px;
  border-radius: 24px; border: 1px solid var(--sb-line); background: var(--sb-glass);
  backdrop-filter: blur(18px); box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.6);
}
@media (max-width: 767px) { .tabbar { display: grid; } }
a {
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
  color: var(--sb-muted); text-decoration: none; font: 500 11px var(--sb-ui);
}
a[aria-current='page'] { color: var(--sb-gold); }
.pill { width: 44px; height: 28px; border-radius: 999px; display: grid; place-items: center; transition: background 0.3s; }
a[aria-current='page'] .pill { background: var(--vp-c-brand-soft); }
</style>
