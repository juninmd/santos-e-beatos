<template>
  <div class="seculos sb-card">
    <div class="cab">
      <span class="sb-eyebrow">Linha do tempo</span>
      <span class="dica">Toque num século para filtrar</span>
    </div>
    <div class="barras">
      <button v-for="b in barras" :key="b.n" type="button" class="barra" :class="{ on: modelValue === b.n, off: modelValue && modelValue !== b.n }"
        :aria-pressed="modelValue === b.n" :aria-label="`Século ${b.rot}: ${b.total}`" :disabled="!b.total"
        @click="emit('update:modelValue', modelValue === b.n ? null : b.n)">
        <span class="col" :style="{ height: `${b.altura}%` }"><span class="n">{{ b.total || '' }}</span></span>
        <span class="rot">{{ b.rot }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { romano } from '../../utils/saints.js'

const props = defineProps({ modelValue: Number, base: { type: Array, default: () => [] } })
const emit = defineEmits(['update:modelValue'])

// Uma barra por século; a altura acompanha os outros filtros já aplicados.
const barras = computed(() => {
  const cont = Array(21).fill(0)
  for (const s of props.base) if (s.century) cont[s.century - 1]++
  const max = Math.max(1, ...cont)
  return cont.map((total, i) => ({ n: i + 1, rot: romano(i + 1), total, altura: total ? 8 + (total / max) * 92 : 3 }))
})
</script>

<style scoped>
.seculos { margin-top: 20px; padding: 20px 20px 12px; scroll-margin-top: 90px; }
.cab { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; margin-bottom: 12px; }
.sb-eyebrow { font-size: 11px; }
.dica { font: 400 13px var(--sb-ui); color: var(--sb-muted); }
.barras { display: grid; grid-template-columns: repeat(21, minmax(0, 1fr)); gap: 4px; overflow-x: auto; }
.barra { display: flex; flex-direction: column; align-items: stretch; gap: 6px; min-width: 22px; padding: 0; border: 0; background: none; cursor: pointer; }
.barra:disabled { cursor: default; }
.col {
  position: relative; display: block; margin-top: auto; border-radius: 6px 6px 2px 2px;
  background: linear-gradient(var(--sb-gold), color-mix(in srgb, var(--sb-gold) 30%, transparent));
  transition: height 0.5s var(--sb-ease), opacity 0.3s;
}
.barras .barra { height: 120px; }
.barra:hover:not(:disabled) .col { filter: brightness(1.15); }
.barra.off .col { opacity: 0.3; }
.barra.on .col { background: var(--sb-gold-bright); box-shadow: 0 0 20px var(--sb-glow); }
.n { position: absolute; top: -18px; left: 0; right: 0; text-align: center; font: 500 10px var(--sb-ui); color: var(--sb-muted); opacity: 0; transition: opacity 0.2s; }
.barra:hover .n, .barra.on .n { opacity: 1; }
.rot { text-align: center; font: 500 10px var(--sb-ui); color: var(--sb-muted); }
</style>
