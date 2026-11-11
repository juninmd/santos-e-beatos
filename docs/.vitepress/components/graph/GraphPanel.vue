<template>
  <aside class="painel" aria-live="polite">
    <template v-if="no">
      <p class="sb-eyebrow">{{ no.type === 'santo' ? 'Santo' : 'Beato' }} · {{ lista.length }} laços</p>
      <h2>{{ no.title }}</h2>
      <p class="sub">Conectado a</p>
      <ul>
        <li v-for="v in lista" :key="v.id">
          <button type="button" @click="emit('selecionar', v.id)">
            <span class="ponto" :class="v.no?.type" aria-hidden="true"></span>
            <span class="nome">{{ v.no?.title }}</span>
            <span class="rel">{{ v.rel }}</span>
          </button>
        </li>
        <li v-if="!lista.length" class="vazio">Ainda sem laços no acervo.</li>
      </ul>
      <a class="sb-btn" :href="link(no.id)">Abrir biografia</a>
    </template>
    <template v-else>
      <p class="sb-eyebrow">Constelação</p>
      <h2>Toque numa estrela</h2>
      <p class="desc">Cada estrela é uma vida; cada linha, uma menção de uma biografia na outra.</p>
    </template>
    <p class="dica">Arraste para mover · role para zoom · clique para focar</p>
  </aside>
</template>

<script setup>
import { link } from '../../utils/saints.js'

defineProps({ no: Object, lista: { type: Array, default: () => [] } })
const emit = defineEmits(['selecionar'])
</script>

<style scoped>
.painel {
  display: flex; flex-direction: column; gap: 12px; padding: 28px; border-radius: 28px;
  background: var(--sb-glass); backdrop-filter: blur(20px); border: 1px solid var(--sb-line);
  animation: sb-rise 0.5s var(--sb-ease) both; max-height: 100%; overflow: auto;
}
h2 { margin: 0; font: 600 34px / 1.05 var(--sb-display); color: var(--sb-text); }
.sub { margin: 6px 0 0; font: 500 11px var(--sb-caps); letter-spacing: 0.2em; text-transform: uppercase; color: var(--sb-gold); }
.desc { margin: 0; font: 400 15px / 1.5 var(--sb-ui); color: var(--sb-muted); }
ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 6px; }
li button {
  width: 100%; min-height: 46px; display: flex; align-items: center; gap: 10px; padding: 0 12px;
  border-radius: 14px; border: 1px solid var(--sb-line); background: transparent; color: var(--sb-text);
  cursor: pointer; text-align: left; font: 500 14px var(--sb-ui); transition: border-color 0.2s, transform 0.2s;
}
li button:hover { border-color: var(--sb-gold); transform: translateX(3px); }
.ponto { width: 9px; height: 9px; border-radius: 9px; background: #e9c46a; flex: none; }
.ponto.beato { background: #f08aa8; }
.nome { flex: 1; }
.rel { font-size: 12px; color: var(--sb-muted); }
.vazio { color: var(--sb-muted); font: 400 14px var(--sb-ui); }
.dica { margin: auto 0 0; padding-top: 8px; text-align: center; font: 400 12px var(--sb-ui); color: var(--sb-muted); }
</style>
