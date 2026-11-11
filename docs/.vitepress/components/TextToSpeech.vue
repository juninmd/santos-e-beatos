<template>
  <!-- Mantém a tag <TextToSpeech /> das páginas; agora é um player flutuante. -->
  <div class="sb-player vp-raw" :class="{ ativo: narracao.falando }">
    <button type="button" class="play" :aria-label="tocando ? 'Pausar narração' : 'Ouvir narração'" @click="alternarNarracao">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path v-if="tocando" d="M6 4h4v16H6zM14 4h4v16h-4z" /><path v-else d="M7 4v16l13-8z" />
      </svg>
    </button>
    <div class="info">
      <p class="titulo">{{ narracao.falando ? `Ouvindo · ${narracao.secao}` : 'Ouvir a narração' }}</p>
      <div class="onda" aria-hidden="true">
        <span v-for="i in 32" :key="i" :class="{ lida: i / 32 <= narracao.progresso }"
          :style="{ height: `${6 + ((i * 7) % 12)}px`, animationDelay: `${(i % 7) * 0.12}s`, animationPlayState: tocando ? 'running' : 'paused' }"></span>
      </div>
    </div>
    <button type="button" class="vel" aria-label="Velocidade da narração" @click="trocarVelocidade">{{ narracao.velocidade }}×</button>
    <button v-if="narracao.falando" type="button" class="parar" aria-label="Parar narração" @click="pararNarracao">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="2" /></svg>
    </button>
  </div>
</template>

<script setup>
import { computed, onUnmounted } from 'vue'
import { narracao, alternarNarracao, trocarVelocidade, pararNarracao } from '../utils/narracao.js'

const tocando = computed(() => narracao.falando && !narracao.pausado)
onUnmounted(pararNarracao)
</script>

<style scoped>
/* Parado, fica no texto; tocando, flutua no rodapé para acompanhar a leitura. */
.sb-player {
  position: relative; z-index: 20;
  display: flex; align-items: center; gap: 14px; max-width: 560px; margin: 24px 0;
  padding: 8px 12px 8px 8px; border-radius: 999px; border: 1px solid var(--sb-line);
  background: var(--sb-glass); backdrop-filter: blur(18px);
  box-shadow: 0 16px 40px -20px rgba(0, 0, 0, 0.5); transition: border-color 0.3s;
}
.sb-player.ativo {
  position: fixed; left: 50%; bottom: 20px; width: min(560px, calc(100vw - 32px)); margin: 0;
  transform: translateX(-50%); border-color: var(--sb-gold);
}
@media (max-width: 767px) { .sb-player.ativo { bottom: 96px; } }
.play {
  width: 48px; height: 48px; flex: none; display: grid; place-items: center; border: 0;
  border-radius: 999px; background: var(--sb-cta); color: var(--sb-cta-text); cursor: pointer;
}
.info { flex: 1; min-width: 0; }
.titulo { margin: 0 !important; font: 600 14px var(--sb-ui) !important; color: var(--sb-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.onda { display: flex; align-items: flex-end; gap: 3px; height: 18px; margin-top: 4px; }
.onda span {
  width: 3px; border-radius: 2px; background: var(--sb-line); transform-origin: 50% 100%;
  animation: sb-wave 1s ease-in-out infinite;
}
.onda span.lida { background: var(--sb-gold); }
.vel, .parar {
  min-height: 40px; min-width: 44px; padding: 0 12px; border-radius: 999px; cursor: pointer;
  border: 1px solid var(--sb-line); background: transparent; color: var(--sb-gold); font: 600 13px var(--sb-ui);
  display: grid; place-items: center;
}
</style>
