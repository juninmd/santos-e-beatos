<template>
  <section class="sb-wrap bento-sec">
    <p class="sb-eyebrow">Quatro jeitos de caminhar</p>
    <h2 class="sb-title">Explore a santidade por <em>tempo, lugar e laços.</em></h2>
    <div class="bento">
      <a :href="link('/mapa')" class="sb-card tile largo mapa">
        <svg aria-hidden="true" viewBox="0 0 600 260" class="linhas" fill="none" stroke="#6f9cff" stroke-width="1">
          <path d="M40 160Q120 80 220 120T400 100T580 140" /><path d="M20 200Q160 150 300 190T580 180" /><path d="M60 90Q200 40 320 70T560 60" />
        </svg>
        <span class="pino" style="left: 22%; top: 34%; color: #e9c46a"><span class="sb-ping"></span></span>
        <span class="pino" style="left: 48%; top: 22%; color: #e05a82"><span class="sb-ping"></span></span>
        <span class="pino" style="left: 70%; top: 46%; color: #6fd3c0"><span class="sb-ping"></span></span>
        <div class="rodape"><h3>Mapa dos milagres</h3><p>Nascimentos, mortes e santuários de {{ total }} vidas num só mapa-múndi.</p></div>
      </a>
      <a :href="link('/grafo')" class="sb-card tile grafo">
        <svg aria-hidden="true" class="estrelas" viewBox="0 0 200 200" stroke="#e9c46a" fill="#e9c46a">
          <path d="M100 100 40 50M100 100l70-40M100 100l50 60M100 100l-50 50M40 50l130 10" stroke-width="1" />
          <circle cx="100" cy="100" r="8" /><circle cx="40" cy="50" r="5" /><circle cx="170" cy="60" r="4" /><circle cx="150" cy="160" r="5" /><circle cx="50" cy="150" r="3" />
        </svg>
        <div class="rodape"><h3>Constelação</h3><p>Quem inspirou quem: mestres, discípulos e amigos.</p></div>
      </a>
      <a :href="link('/calendario')" class="sb-card tile cal">
        <div class="grade" aria-hidden="true"><span v-for="i in 21" :key="i" :style="{ opacity: 0.15 + ((i * 37) % 85) / 100 }"></span></div>
        <div class="rodape"><h3>Calendário litúrgico</h3><p>Cada dia, sua festa. Leve para a sua agenda.</p></div>
      </a>
      <a :href="link('/explorar#seculos')" class="sb-card tile largo tempo">
        <div class="barras" aria-hidden="true"><span v-for="(h, i) in barras" :key="i" :style="{ height: `${h}%` }"></span></div>
        <div class="rodape"><h3>Linha do tempo</h3><p>Dos apóstolos ao século XXI — veja quem viveu quando.</p></div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { data } from '../../../saints.data.js'
import { link } from '../../utils/saints.js'

const total = data.length
// Altura de cada barra = quantas vidas o acervo tem em cada século.
const porSeculo = Array.from({ length: 21 }, (_, i) => data.filter((s) => s.century === i + 1).length)
const max = Math.max(1, ...porSeculo)
const barras = porSeculo.map((n) => Math.max(6, (n / max) * 100))
</script>

<style scoped>
.bento-sec { padding-top: 56px; padding-bottom: 56px; }
.sb-title { margin: 10px 0 32px; }
.bento { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
@media (max-width: 900px) { .bento { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.tile { position: relative; min-height: 280px; padding: 28px; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; color: var(--sb-text); text-decoration: none; }
.largo { grid-column: span 2; }
@media (max-width: 640px) { .bento { grid-template-columns: 1fr; } .largo { grid-column: auto; } }
.mapa { background: radial-gradient(circle at 30% 40%, rgba(58, 91, 199, 0.3), transparent 55%), var(--sb-surface); }
.linhas { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.5; }
.pino { position: absolute; }
.grafo { background: radial-gradient(circle at 80% 10%, rgba(233, 196, 106, 0.18), transparent 50%), var(--sb-surface); }
.estrelas { position: absolute; right: -30px; top: -30px; width: 240px; opacity: 0.7; animation: sb-spin 80s linear infinite reverse; }
.grade { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 5px; margin-bottom: auto; }
.grade span { aspect-ratio: 1; border-radius: 5px; background: var(--sb-gold); }
.barras { display: flex; align-items: flex-end; gap: 5px; height: 120px; margin-bottom: auto; }
.barras span { flex: 1; border-radius: 6px 6px 0 0; background: linear-gradient(var(--sb-gold), transparent); transform-origin: bottom; animation: sb-rise 1s var(--sb-ease) both; }
.rodape { position: relative; }
h3 { margin: 0; font: 600 32px var(--sb-display); }
p { margin: 6px 0 0; font: 400 15px / 1.5 var(--sb-ui); color: var(--sb-muted); }
</style>
