<template>
  <div class="tools" role="group" aria-label="Ajustes de leitura">
    <button type="button" class="sb-icon-btn" aria-label="Diminuir texto" @click="mudar(-1)">A−</button>
    <button type="button" class="sb-icon-btn big" aria-label="Aumentar texto" @click="mudar(1)">A+</button>
    <button type="button" class="sb-icon-btn" :aria-pressed="prefs.pergaminho" aria-label="Modo pergaminho" @click="pergaminho">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z" /><path d="M8 9h8M8 13h6" /></svg>
    </button>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { aplicarLeitura, lerLeitura } from '../../utils/favoritos.js'

const prefs = reactive({ tamanho: 19, pergaminho: false })

onMounted(() => {
  Object.assign(prefs, lerLeitura())
  aplicarLeitura(prefs)
})

const mudar = (passo) => {
  prefs.tamanho = Math.min(28, Math.max(15, prefs.tamanho + passo * 2))
  aplicarLeitura(prefs)
}
const pergaminho = () => {
  prefs.pergaminho = !prefs.pergaminho
  aplicarLeitura(prefs)
}
</script>

<style scoped>
.tools { display: inline-flex; gap: 6px; padding-left: 6px; border-left: 1px solid var(--sb-line); }
.sb-icon-btn { width: 44px; height: 44px; font: 600 14px var(--sb-ui); }
.big { font-size: 17px; }
</style>
