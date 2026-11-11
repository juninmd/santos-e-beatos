<template>
  <div class="portrait" :class="shape" :style="{ background: fundo }">
    <img v-if="src" :src="src" :alt="alt ? saint.title : ''" loading="lazy" />
    <span v-else class="mono" aria-hidden="true">{{ letra }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { resolverImagem, inicial, vitral } from '../utils/saints.js'

// Retrato do acervo; sem imagem, mostra a inicial sobre um vitral de cores fixas.
const props = defineProps({
  saint: { type: Object, required: true },
  shape: { type: String, default: 'card' },
  alt: { type: Boolean, default: false }
})

const src = computed(() => resolverImagem(props.saint.image))
const letra = computed(() => inicial(props.saint.title))
const fundo = computed(() => vitral(props.saint.title))
</script>

<style scoped>
.portrait { position: relative; display: grid; place-items: center; overflow: hidden; }
.portrait img { width: 100%; height: 100%; object-fit: cover; margin: 0; border: 0; border-radius: 0; box-shadow: none; max-height: none; }
.mono { font: 600 clamp(40px, 9cqi, 120px) var(--sb-display); color: #f6dfa0; }
.card { width: 100%; height: 100%; container-type: inline-size; }
.arch { width: 100%; height: 100%; border-radius: 999px 999px 24px 24px; border: 2px solid #e9c46a; container-type: inline-size; }
.round { width: 100%; height: 100%; border-radius: 999px; container-type: inline-size; }
</style>
