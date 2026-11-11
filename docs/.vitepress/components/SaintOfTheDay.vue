<template>
  <section id="hoje" class="sb-wrap dia">
    <article class="sb-card destaque" :class="{ carregando: !saint }">
      <template v-if="saint">
        <div class="foto">
          <div class="aro" aria-hidden="true"></div>
          <div class="moldura"><SaintPortrait :saint="saint" shape="round" alt /></div>
        </div>
        <div class="corpo">
          <p class="rotulo"><span class="sb-ping" aria-hidden="true"></span>{{ rotulo }}</p>
          <h2>{{ saint.title }}</h2>
          <p v-if="saint.quote" class="quote">“{{ saint.quote }}”</p>
          <div class="pills">
            <span v-if="saint.feastDay">Festa · {{ saint.feastDay }}</span>
            <span v-if="saint.birth">{{ saint.birth }}</span>
          </div>
          <div class="acoes">
            <a class="sb-btn" :href="link(saint.url)">Ler a história completa</a>
            <a class="sb-btn ghost" :href="link('/calendario')">Calendário</a>
          </div>
        </div>
      </template>
    </article>
    <WeekFeasts />
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { inBrowser } from 'vitepress'
import { data } from '../../saints.data.js'
import { link, festaEm, MESES } from '../utils/saints.js'
import SaintPortrait from './SaintPortrait.vue'
import WeekFeasts from './home/WeekFeasts.vue'

const saint = ref(null)
const exato = ref(false)
const hoje = ref(null)

const rotulo = computed(() =>
  exato.value ? `Santo do dia · ${hoje.value.getDate()} de ${MESES[hoje.value.getMonth()]}` : 'Santo em destaque'
)

// A data depende do visitante: calcula só no navegador.
onMounted(() => {
  if (!inBrowser) return
  const d = new Date()
  hoje.value = d
  const doDia = festaEm(data, d.getDate(), d.getMonth())
  if (doDia.length) {
    exato.value = true
    saint.value = doDia[0]
  } else {
    // Sem festa no dia, gira pelo acervo conforme o dia do ano.
    const diaDoAno = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000)
    saint.value = data[diaDoAno % data.length]
  }
})
</script>

<style scoped>
.dia { display: flex; flex-wrap: wrap; gap: 24px; padding-top: 40px; padding-bottom: 40px; }
.destaque {
  flex: 999 1 620px; min-width: 0; min-height: 380px; display: flex; flex-wrap: wrap; overflow: hidden;
  background: linear-gradient(135deg, var(--sb-surface), var(--sb-surface-2));
}
.carregando { animation: sb-glow 1.6s ease-in-out infinite; opacity: 0.6; }
.foto { position: relative; flex: 1 1 260px; min-height: 320px; display: grid; place-items: center;
  background: radial-gradient(circle at 50% 45%, var(--sb-glow), transparent 60%); }
.aro { position: absolute; width: 230px; height: 230px; border-radius: 999px; border: 2px dashed var(--sb-gold); opacity: 0.6; animation: sb-spin 60s linear infinite; }
.moldura { width: 190px; height: 190px; border-radius: 999px; overflow: hidden; box-shadow: 0 0 60px var(--sb-glow); }
.corpo { flex: 2 1 320px; padding: 40px; display: flex; flex-direction: column; gap: 14px; }
.rotulo { display: flex; align-items: center; gap: 12px; margin: 0; color: var(--sb-gold); font: 500 13px var(--sb-caps); letter-spacing: 0.22em; text-transform: uppercase; }
h2 { margin: 0; font: 600 clamp(36px, 4vw, 52px) / 1 var(--sb-display); color: var(--sb-text); }
.quote { margin: 0; font: italic 500 24px / 1.3 var(--sb-display); color: var(--sb-gold); }
.pills { display: flex; flex-wrap: wrap; gap: 8px; }
.pills span { padding: 6px 12px; border-radius: 999px; background: var(--vp-c-brand-soft); font: 500 13px var(--sb-ui); color: var(--sb-text); }
.acoes { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px; }
</style>
