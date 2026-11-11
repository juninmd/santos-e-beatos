<template>
  <section class="faixa" aria-labelledby="brasil-titulo">
    <div class="sb-wrap topo">
      <h2 id="brasil-titulo" class="sb-title">Do Brasil <em>para o céu</em></h2>
      <a class="sb-chip" :href="link('/explorar?tag=brasil')">Ver todos →</a>
    </div>
    <div class="trilho">
      <div class="fila">
        <a v-for="(s, i) in fila" :key="i" :href="link(s.url)" class="sb-card cartao" :aria-hidden="i >= lista.length" :tabindex="i >= lista.length ? -1 : 0">
          <div class="img"><SaintPortrait :saint="s" /></div>
          <div class="txt"><p class="nome">{{ s.title }}</p><p class="meta">{{ s.feastDay ? `Festa · ${s.feastDay}` : rotuloTipo(s) }}</p></div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { data } from '../../../saints.data.js'
import { link, rotuloTipo } from '../../utils/saints.js'
import SaintPortrait from '../SaintPortrait.vue'

const lista = data.filter((s) => s.tags.includes('brasil')).slice(0, 18)
// Duplicada para o letreiro dar a volta sem emenda visível.
const fila = [...lista, ...lista]
</script>

<style scoped>
.faixa { padding: 32px 0 80px; }
.topo { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: end; gap: 12px; margin-bottom: 24px; }
.trilho { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
.fila { display: flex; gap: 20px; width: max-content; padding: 12px 0 24px; animation: rolar 70s linear infinite; }
.trilho:hover .fila, .trilho:focus-within .fila { animation-play-state: paused; }
@keyframes rolar { to { transform: translateX(-50%); } }
.cartao { width: 220px; overflow: hidden; color: var(--sb-text); text-decoration: none; }
.img { height: 220px; }
.txt { padding: 16px; }
.nome { margin: 0; font: 600 20px / 1.15 var(--sb-display); }
.meta { margin: 6px 0 0; font: 400 13px var(--sb-ui); color: var(--sb-muted); }
</style>
