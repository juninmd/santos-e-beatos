<template>
  <header v-if="saint" class="sb-hero">
    <nav class="crumbs" aria-label="Você está em">
      <a :href="link('/')">Início</a><span aria-hidden="true">/</span>
      <a :href="link(saint.type === 'santo' ? '/santos/' : '/beatos/')">{{ saint.type === 'santo' ? 'Santos' : 'Beatos' }}</a>
      <span aria-hidden="true">/</span><span>{{ saint.title }}</span>
    </nav>
    <div class="top">
      <div class="txt">
        <p class="sb-eyebrow sb-rise">{{ rotulo }}<template v-if="saint.century"> · Séc. {{ romano(saint.century) }}</template></p>
        <h1 class="sb-rise">{{ saint.title }}</h1>
        <p v-if="saint.quote" class="quote sb-rise">“{{ saint.quote }}”</p>
        <div class="actions sb-rise">
          <button type="button" class="sb-btn" @click="alternarNarracao">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path v-if="tocando" d="M6 4h4v16H6zM14 4h4v16h-4z" /><path v-else d="M7 4v16l13-8z" />
            </svg>
            {{ tocando ? 'Pausar narração' : 'Ouvir a história' }}
          </button>
          <button type="button" class="sb-icon-btn" :aria-pressed="eFavorito(saint.url)" aria-label="Salvar nos favoritos" @click="alternar(saint.url)">
            <svg width="20" height="20" viewBox="0 0 24 24" :fill="eFavorito(saint.url) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" /></svg>
          </button>
          <button type="button" class="sb-icon-btn" aria-label="Compartilhar" @click="compartilhar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
          </button>
          <ReadingTools />
          <span v-if="copiado" class="toast" role="status">Link copiado</span>
        </div>
      </div>
      <div class="art">
        <div class="ring" aria-hidden="true"></div>
        <div class="frame"><SaintPortrait :saint="saint" shape="arch" alt /></div>
      </div>
    </div>
    <dl class="ficha">
      <div v-for="f in ficha" :key="f.rotulo" :class="{ hoje: f.hoje }">
        <dt>{{ f.rotulo }}</dt><dd>{{ f.valor }}</dd>
        <dd v-if="f.hoje" class="nota">É hoje</dd>
      </div>
    </dl>
  </header>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { data } from '../../../saints.data.js'
import { link, romano, rotuloTipo, parseFesta } from '../../utils/saints.js'
import { narracao, alternarNarracao } from '../../utils/narracao.js'
import { useFavoritos } from '../../utils/favoritos.js'
import SaintPortrait from '../SaintPortrait.vue'
import ReadingTools from './ReadingTools.vue'

const { page } = useData()
const { eFavorito, alternar } = useFavoritos()
const copiado = ref(false)
const hoje = ref(null)

const url = computed(() => '/' + page.value.relativePath.replace(/index\.md$/, ''))
const saint = computed(() => data.find((s) => s.url === url.value))
const rotulo = computed(() => rotuloTipo(saint.value))
const tocando = computed(() => narracao.falando && !narracao.pausado)

onMounted(() => { const d = new Date(); hoje.value = { day: d.getDate(), month: d.getMonth() } })

const ficha = computed(() => {
  const s = saint.value
  const f = parseFesta(s.feastDay)
  const eHoje = !!(f && hoje.value && f.day === hoje.value.day && f.month === hoje.value.month)
  return [
    { rotulo: 'Nascimento', valor: s.birth },
    { rotulo: 'Morte', valor: s.death },
    { rotulo: s.honor, valor: s.honorDate },
    { rotulo: 'Festa litúrgica', valor: s.feastDay, hoje: eHoje }
  ].filter((x) => x.valor)
})

async function compartilhar() {
  const dados = { title: saint.value.title, url: location.href }
  try {
    if (navigator.share) return await navigator.share(dados)
    await navigator.clipboard.writeText(location.href)
    copiado.value = true
    setTimeout(() => (copiado.value = false), 2200)
  } catch { /* usuário cancelou */ }
}
</script>

<style scoped>
.sb-hero { position: relative; margin: 0 0 32px; padding: 24px 28px 32px; overflow: hidden; border-radius: 32px; border: 1px solid var(--sb-line);
  background: radial-gradient(700px 420px at 75% 30%, var(--sb-glow), transparent 65%),
    radial-gradient(500px 360px at 0% 100%, rgba(155, 44, 78, 0.22), transparent 70%); }
.crumbs { display: flex; flex-wrap: wrap; gap: 8px; font: 500 13px var(--sb-ui); color: var(--sb-muted); }
.crumbs a { color: var(--sb-gold); text-decoration: none; }
.top { display: flex; flex-wrap: wrap-reverse; align-items: center; gap: 32px; margin-top: 28px; }
.txt { flex: 1 1 340px; min-width: 0; }
h1 { margin: 14px 0 0; font: 600 clamp(44px, 5.5vw, 76px) / 0.95 var(--sb-display); color: var(--sb-text); animation-delay: 0.1s; }
.quote { margin: 20px 0 0; font: italic 500 clamp(22px, 2.4vw, 28px) / 1.3 var(--sb-display); color: var(--sb-gold); animation-delay: 0.2s; }
.actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 28px; animation-delay: 0.3s; }
.toast { font: 500 13px var(--sb-ui); color: var(--sb-gold); }
.art { position: relative; flex: 0 1 260px; margin: 0 auto; display: grid; place-items: center; }
.ring { position: absolute; width: 118%; aspect-ratio: 1; border-radius: 999px; border: 1px dashed var(--sb-gold); opacity: 0.55; animation: sb-spin 90s linear infinite; }
.frame { width: min(240px, 60vw); aspect-ratio: 3 / 4; box-shadow: 0 0 80px var(--sb-glow); border-radius: 999px 999px 24px 24px; }
.ficha { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 32px 0 0; }
.ficha div { padding: 18px 20px; border-radius: 20px; background: var(--sb-surface); border: 1px solid var(--sb-line); }
.ficha .hoje { background: linear-gradient(135deg, var(--vp-c-brand-soft), transparent); border-color: var(--sb-gold); }
dt { font: 500 11px var(--sb-caps); letter-spacing: 0.18em; text-transform: uppercase; color: var(--sb-gold); }
dd { margin: 8px 0 0; font: 500 16px / 1.4 var(--sb-ui); color: var(--sb-text); }
dd.nota { margin-top: 4px; font-size: 13px; color: var(--sb-gold); }
@media (max-width: 640px) { .frame { width: 170px; } .sb-hero { padding: 20px 18px 24px; } }
</style>
