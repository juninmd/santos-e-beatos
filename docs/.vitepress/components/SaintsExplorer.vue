<template>
  <section class="explorer vp-raw" :class="{ 'sb-wrap': !embutido }">
    <ExplorerFilters v-model:tipo="f.tipo" v-model:q="f.q" v-model:tag="f.tag" v-model:ordem="f.ordem"
      :contagem="contagem" :fixo="tipo !== 'todos'" :salvos="favoritos.length" />
    <CenturyBars id="seculos" v-model="f.sec" :base="baseSemSeculo" />
    <p class="resumo" aria-live="polite">
      {{ filtrados.length }} {{ filtrados.length === 1 ? 'resultado' : 'resultados' }}
      <template v-if="f.sec"> · século {{ romano(f.sec) }}</template>
      <button v-if="ativo" type="button" class="limpar" @click="limpar">Limpar filtros</button>
    </p>
    <TransitionGroup tag="div" name="grade" class="grade">
      <SaintCard v-for="(s, i) in visiveis" :key="s.url" :saint="s" :style="{ '--d': `${(i % 12) * 0.03}s` }" />
    </TransitionGroup>
    <p v-if="!filtrados.length" class="vazio">Nenhuma vida com esses filtros — tente outro século ou tema.</p>
    <div v-if="filtrados.length > limite" class="mais">
      <button type="button" class="sb-btn ghost" @click="limite += 36">Mostrar mais ({{ filtrados.length - limite }})</button>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed, watch, onMounted } from 'vue'
import { inBrowser } from 'vitepress'
import { data } from '../../saints.data.js'
import { romano, normalizar, semTitulo, parseFesta } from '../utils/saints.js'
import { useFavoritos } from '../utils/favoritos.js'
import ExplorerFilters from './explorer/ExplorerFilters.vue'
import CenturyBars from './explorer/CenturyBars.vue'
import SaintCard from './explorer/SaintCard.vue'

const props = defineProps({
  tipo: { type: String, default: 'todos' },
  embutido: { type: Boolean, default: false }
})

const { favoritos } = useFavoritos()
const f = reactive({ tipo: props.tipo, q: '', tag: '', sec: null, ordem: 'az' })
const limite = ref(36)

// Lê e grava os filtros na URL: dá para compartilhar uma busca pronta.
onMounted(() => {
  const p = new URLSearchParams(location.search)
  if (!props.embutido && p.get('tipo')) f.tipo = p.get('tipo')
  f.q = p.get('q') || ''
  f.tag = p.get('tag') || ''
  f.sec = Number(p.get('sec')) || null
  f.ordem = p.get('ordem') || 'az'
})
watch(f, () => {
  limite.value = 36
  if (!inBrowser) return
  const p = new URLSearchParams()
  for (const [k, v] of Object.entries(f)) if (v && !(k === 'ordem' && v === 'az') && !(k === 'tipo' && v === props.tipo)) p.set(k, v)
  history.replaceState(history.state, '', `${location.pathname}${p.size ? `?${p}` : ''}${location.hash}`)
})

const porTipo = computed(() => data.filter((s) => f.tipo === 'todos' || s.type === f.tipo))
const contagem = computed(() => ({
  todos: data.length,
  santo: data.filter((s) => s.type === 'santo').length,
  beato: data.filter((s) => s.type === 'beato').length
}))

const baseSemSeculo = computed(() => {
  const termo = normalizar(f.q.trim())
  return porTipo.value.filter((s) =>
    (!termo || normalizar(`${s.title} ${s.birth} ${s.death} ${s.feastDay}`).includes(termo)) &&
    (!f.tag || (f.tag === 'salvos' ? favoritos.value.includes(s.url) : s.tags.includes(f.tag)))
  )
})

// Dias até a próxima festa, para ordenar por "festa mais próxima".
const distanciaFesta = (s) => {
  const fe = parseFesta(s.feastDay)
  if (!fe) return 999
  const hoje = new Date()
  const alvo = new Date(hoje.getFullYear(), fe.month, fe.day)
  if (alvo < new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())) alvo.setFullYear(alvo.getFullYear() + 1)
  return Math.round((alvo - hoje) / 86400000)
}

const ORDENS = {
  az: (a, b) => semTitulo(a.title).localeCompare(semTitulo(b.title), 'pt'),
  festa: (a, b) => distanciaFesta(a) - distanciaFesta(b),
  antigos: (a, b) => (a.century || 99) - (b.century || 99),
  recentes: (a, b) => (b.century || 0) - (a.century || 0)
}

const filtrados = computed(() =>
  baseSemSeculo.value.filter((s) => !f.sec || s.century === f.sec).sort(ORDENS[f.ordem] || ORDENS.az)
)
const visiveis = computed(() => filtrados.value.slice(0, limite.value))
const ativo = computed(() => !!(f.q || f.tag || f.sec))
const limpar = () => Object.assign(f, { q: '', tag: '', sec: null })
</script>

<style scoped>
.explorer { padding-top: 8px; padding-bottom: 64px; }
.resumo { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin: 24px 0 16px; font: 500 14px var(--sb-ui); color: var(--sb-muted); }
.limpar { border: 0; background: none; color: var(--sb-gold); font: 600 14px var(--sb-ui); cursor: pointer; text-decoration: underline; min-height: 44px; }
.grade { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 18px; }
.grade-enter-active { transition: opacity 0.4s var(--sb-ease), transform 0.4s var(--sb-ease); transition-delay: var(--d); }
.grade-enter-from { opacity: 0; transform: translateY(16px) scale(0.97); }
.grade-move { transition: transform 0.4s var(--sb-ease); }
.vazio { padding: 48px 0; text-align: center; color: var(--sb-muted); font: 400 16px var(--sb-ui); }
.mais { display: flex; justify-content: center; margin-top: 32px; }
</style>
