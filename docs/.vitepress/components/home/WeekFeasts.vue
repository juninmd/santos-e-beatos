<template>
  <aside class="semana sb-card" aria-labelledby="semana-titulo">
    <h3 id="semana-titulo">Esta semana</h3>
    <p class="dica">Toque num dia para ver quem a Igreja celebra.</p>
    <div class="dias">
      <button v-for="(d, i) in dias" :key="i" type="button" class="dia" :aria-pressed="i === sel"
        :class="{ tem: d.lista.length }" @click="sel = i">
        <span class="sem">{{ d.sem }}</span><span class="num">{{ d.num }}</span>
      </button>
    </div>
    <ul class="festas">
      <li v-for="s in dias[sel]?.lista || []" :key="s.url">
        <a :href="link(s.url)">
          <span class="ponto" :class="s.type" aria-hidden="true"></span>
          <span class="nome">{{ s.title }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg>
        </a>
      </li>
      <li v-if="dias.length && !dias[sel].lista.length" class="vazio">Nenhuma festa no acervo neste dia.</li>
    </ul>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { data } from '../../../saints.data.js'
import { link, festaEm } from '../../utils/saints.js'

const SEMANA = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB']
const dias = ref([])
const sel = ref(0)

onMounted(() => {
  const base = new Date()
  dias.value = Array.from({ length: 8 }, (_, i) => {
    const d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i)
    return { sem: i === 0 ? 'HOJE' : SEMANA[d.getDay()], num: d.getDate(), lista: festaEm(data, d.getDate(), d.getMonth()) }
  })
})
</script>

<style scoped>
.semana { flex: 1 1 320px; min-width: 0; padding: 28px; background: var(--sb-surface); }
h3 { margin: 0; font: 600 28px var(--sb-display); color: var(--sb-text); }
.dica { margin: 4px 0 18px; font: 400 14px var(--sb-ui); color: var(--sb-muted); }
.dias { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
.dia {
  min-height: 64px; border-radius: 16px; border: 1px solid var(--sb-line); background: transparent;
  color: var(--sb-text); cursor: pointer; display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 2px; position: relative; transition: background 0.25s, transform 0.25s;
}
.dia:hover { transform: translateY(-2px); border-color: var(--sb-gold); }
.dia.tem::after { content: ''; position: absolute; bottom: 7px; width: 5px; height: 5px; border-radius: 9px; background: var(--sb-gold); }
.dia[aria-pressed='true'] { background: var(--sb-cta); color: var(--sb-cta-text); border-color: transparent; }
.dia[aria-pressed='true']::after { background: var(--sb-cta-text); }
.sem { font: 500 11px var(--sb-caps); letter-spacing: 0.1em; }
.num { font: 600 22px var(--sb-display); }
.festas { margin: 20px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; }
.festas a {
  display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 14px;
  background: var(--vp-c-brand-soft); color: var(--sb-text); text-decoration: none; font: 500 15px var(--sb-ui);
  transition: transform 0.2s;
}
.festas a:hover { transform: translateX(4px); color: var(--sb-gold); }
.ponto { width: 8px; height: 8px; border-radius: 999px; background: var(--sb-gold); }
.ponto.beato { background: var(--sb-accent); }
.nome { flex: 1; }
.vazio { color: var(--sb-muted); font: 400 14px var(--sb-ui); padding: 8px 2px; }
</style>
