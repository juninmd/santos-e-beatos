<template>
  <section class="hero sb-wrap">
    <div class="ambiente" aria-hidden="true"></div>
    <div class="txt">
      <p class="sb-eyebrow sb-rise">{{ total }} vidas · 2.000 anos de santidade</p>
      <h1 class="sb-rise">Vidas que<br /><em class="sb-gold-text">viraram luz.</em></h1>
      <p class="lead sb-rise">
        Biografias, milagres, mapas e conexões de {{ santos }} santos e {{ beatos }} beatos —
        para ler, ouvir e explorar.
      </p>
      <form class="busca sb-rise" role="search" @submit.prevent="ir">
        <label for="busca-hero" class="sb-sr">Buscar santo, cidade ou festa</label>
        <div class="campo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input id="busca-hero" v-model="q" autocomplete="off" placeholder="Martinho, Lima, Assis, outubro…"
            role="combobox" aria-controls="busca-sugestoes" :aria-expanded="!!q" @keydown.down.prevent="mover(1)" @keydown.up.prevent="mover(-1)" />
          <button class="sb-btn" type="submit">Explorar</button>
        </div>
        <ul v-if="q" id="busca-sugestoes" class="sugestoes" role="listbox">
          <li v-for="(r, i) in resultados" :key="r.url" role="option" :aria-selected="i === ativo">
            <a :href="link(r.url)" :class="{ ativo: i === ativo }">
              <span class="mono" :style="{ background: vitral(r.title) }" aria-hidden="true">{{ inicial(r.title) }}</span>
              <span class="nome">{{ r.title }}<small>{{ r.feastDay ? `Festa · ${r.feastDay}` : r.birth }}</small></span>
              <span class="tipo">{{ rotuloTipo(r) }}</span>
            </a>
          </li>
          <li v-if="!resultados.length" class="vazio">Nada encontrado. Tente uma cidade ou um mês.</li>
        </ul>
      </form>
      <div class="chips sb-rise">
        <a v-for="(rot, chave) in TAGS" :key="chave" class="sb-chip" :href="link(`/explorar?tag=${chave}`)">{{ rot }}</a>
      </div>
    </div>
    <div class="art"><RoseWindow /></div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vitepress'
import { data } from '../../../saints.data.js'
import { link, inicial, vitral, rotuloTipo, normalizar, TAGS } from '../../utils/saints.js'
import RoseWindow from './RoseWindow.vue'

const router = useRouter()
const q = ref('')
const ativo = ref(0)
const santos = data.filter((s) => s.type === 'santo').length
const beatos = data.length - santos
const total = data.length

const resultados = computed(() => {
  const termo = normalizar(q.value.trim())
  if (!termo) return []
  return data
    .filter((s) => normalizar(`${s.title} ${s.birth} ${s.death} ${s.feastDay}`).includes(termo))
    .slice(0, 6)
})
watch(q, () => (ativo.value = 0))

const mover = (d) => {
  const n = resultados.value.length
  if (n) ativo.value = (ativo.value + d + n) % n
}

function ir() {
  const alvo = resultados.value[ativo.value]
  if (alvo) router.go(link(alvo.url))
  else router.go(link(`/explorar?q=${encodeURIComponent(q.value)}`))
}
</script>

<style scoped>
.hero { position: relative; display: flex; flex-wrap: wrap; align-items: center; gap: 48px; padding-top: 72px; padding-bottom: 40px; }
.ambiente {
  position: absolute; inset: -160px -20vw auto; height: 1000px; pointer-events: none; z-index: -1;
  background: radial-gradient(600px 420px at 72% 30%, var(--sb-glow), transparent 70%),
    radial-gradient(520px 380px at 15% 10%, rgba(58, 91, 199, 0.25), transparent 70%),
    radial-gradient(500px 360px at 50% 80%, rgba(155, 44, 78, 0.18), transparent 70%);
}
.txt { flex: 1 1 520px; min-width: 0; position: relative; z-index: 2; }
h1 { margin: 20px 0 0; font: 600 clamp(52px, 7vw, 104px) / 0.95 var(--sb-display); color: var(--sb-text); animation-delay: 0.1s; }
.lead { margin: 28px 0 0; max-width: 520px; font: 400 19px / 1.6 var(--sb-ui); color: var(--sb-muted); animation-delay: 0.2s; }
.busca { position: relative; max-width: 580px; margin-top: 36px; animation-delay: 0.3s; z-index: 5; }
.campo {
  display: flex; align-items: center; gap: 12px; padding: 8px 8px 8px 20px; border-radius: 20px;
  background: var(--sb-surface); border: 1px solid var(--sb-gold); color: var(--sb-gold);
  box-shadow: 0 0 0 6px var(--vp-c-brand-soft), 0 30px 80px -30px var(--sb-glow);
}
input { flex: 1; min-width: 0; height: 48px; border: 0; outline: 0; background: transparent; color: var(--sb-text); font: 400 17px var(--sb-ui); }
input::placeholder { color: var(--sb-muted); }
.sugestoes {
  position: absolute; left: 0; right: 0; top: calc(100% + 10px); margin: 0; padding: 8px; list-style: none;
  border-radius: 18px; background: var(--sb-surface-2); border: 1px solid var(--sb-line);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
}
.sugestoes a { display: flex; align-items: center; gap: 14px; padding: 10px 12px; border-radius: 12px; color: var(--sb-text); text-decoration: none; }
.sugestoes a:hover, .sugestoes a.ativo { background: var(--vp-c-brand-soft); }
.mono { width: 36px; height: 36px; flex: none; border-radius: 999px; display: grid; place-items: center; font: 600 14px var(--sb-caps); color: #f6dfa0; }
.nome { flex: 1; min-width: 0; font: 500 15px var(--sb-ui); }
.nome small { display: block; font-size: 13px; color: var(--sb-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tipo { font: 500 11px var(--sb-caps); letter-spacing: 0.14em; color: var(--sb-gold); text-transform: uppercase; }
.vazio { padding: 14px; color: var(--sb-muted); font: 400 14px var(--sb-ui); }
.chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; animation-delay: 0.4s; }
.art { flex: 1 1 380px; min-width: 0; }
</style>
