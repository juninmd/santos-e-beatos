<template>
  <section class="cal">
    <div class="topo">
      <div class="meses" role="tablist" aria-label="Mês">
        <button v-for="(m, i) in MESES" :key="m" type="button" role="tab" :aria-selected="mes === i" @click="mes = i">{{ m.slice(0, 3) }}</button>
      </div>
      <button type="button" class="sb-btn ghost" @click="baixarIcs">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" /></svg>
        Adicionar à minha agenda (.ics)
      </button>
    </div>
    <h2 class="sb-title">{{ MESES[mes] }}</h2>
    <ol class="grade">
      <li v-for="d in dias" :key="d.n" :class="{ hoje: d.hoje, vazio: !d.lista.length }">
        <span class="num">{{ d.n }}</span>
        <a v-for="s in d.lista" :key="s.url" :href="link(s.url)" :class="s.type">{{ s.title }}</a>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { data } from '../../saints.data.js'
import { link, MESES, parseFesta } from '../utils/saints.js'

const mes = ref(0)
const hoje = ref(null)
onMounted(() => {
  const d = new Date()
  hoje.value = { day: d.getDate(), month: d.getMonth() }
  mes.value = d.getMonth()
})

const comFesta = data.map((s) => ({ ...s, festa: parseFesta(s.feastDay) })).filter((s) => s.festa)

const dias = computed(() => {
  const total = new Date(2024, mes.value + 1, 0).getDate() // 2024 é bissexto: fevereiro com 29
  return Array.from({ length: total }, (_, i) => ({
    n: i + 1,
    hoje: hoje.value && hoje.value.month === mes.value && hoje.value.day === i + 1,
    lista: comFesta.filter((s) => s.festa.month === mes.value && s.festa.day === i + 1)
  }))
})

// Gera um .ics com todas as festas, repetindo todo ano, para importar em qualquer agenda.
function baixarIcs() {
  const pad = (n) => String(n).padStart(2, '0')
  const eventos = comFesta.map((s, i) => {
    const data = `2025${pad(s.festa.month + 1)}${pad(s.festa.day)}`
    return ['BEGIN:VEVENT', `UID:sb-${i}@santos-e-beatos`, 'DTSTAMP:20250101T000000Z',
      `DTSTART;VALUE=DATE:${data}`, 'RRULE:FREQ=YEARLY', `SUMMARY:${s.title}`,
      `URL:${location.origin}${link(s.url)}`, 'END:VEVENT'].join('\r\n')
  })
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Santos e Beatos//PT', 'X-WR-CALNAME:Santos e Beatos', ...eventos, 'END:VCALENDAR'].join('\r\n')
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  a.download = 'santos-e-beatos.ics'
  a.click()
  URL.revokeObjectURL(a.href)
}
</script>

<style scoped>
.cal { padding-bottom: 64px; }
.topo { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; }
.meses { display: flex; flex-wrap: wrap; gap: 6px; }
.meses button {
  min-height: 44px; min-width: 52px; padding: 0 12px; border-radius: 999px; cursor: pointer;
  border: 1px solid var(--sb-line); background: transparent; color: var(--sb-text);
  font: 600 13px var(--sb-caps); letter-spacing: 0.08em; text-transform: uppercase; transition: background 0.25s;
}
.meses button[aria-selected='true'] { background: var(--sb-cta); color: var(--sb-cta-text); border-color: transparent; }
.sb-title { margin: 32px 0 20px; text-transform: capitalize; }
.grade { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 10px; margin: 0; padding: 0; list-style: none; }
.grade li {
  min-height: 120px; padding: 14px; border-radius: 18px; border: 1px solid var(--sb-line); background: var(--sb-surface);
  display: flex; flex-direction: column; gap: 6px; animation: sb-rise 0.5s var(--sb-ease) both;
}
.grade li.vazio { opacity: 0.55; }
.grade li.hoje { border-color: var(--sb-gold); box-shadow: 0 0 0 4px var(--vp-c-brand-soft), 0 20px 50px -24px var(--sb-glow); }
.num { font: 600 28px var(--sb-display); color: var(--sb-gold); }
.grade a { font: 500 14px / 1.35 var(--sb-ui); color: var(--sb-text); text-decoration: none; }
.grade a::before { content: '●'; margin-right: 6px; font-size: 9px; vertical-align: 2px; color: var(--sb-gold); }
.grade a.beato::before { color: var(--sb-accent); }
.grade a:hover { color: var(--sb-gold); }
</style>
