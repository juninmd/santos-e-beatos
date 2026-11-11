<template>
  <header class="cab sb-wrap">
    <div class="luz" aria-hidden="true"></div>
    <p class="sb-eyebrow sb-rise">{{ eyebrow }}</p>
    <h1 class="sb-rise"><slot name="titulo">{{ titulo }}</slot></h1>
    <p v-if="$slots.default" class="sub sb-rise"><slot /></p>
  </header>
</template>

<script setup>
defineProps({ eyebrow: String, titulo: String })
</script>

<style scoped>
.cab { position: relative; padding-top: 56px; padding-bottom: 28px; overflow-x: clip; }
.luz {
  position: absolute; inset: -80px -10vw auto; height: 420px; z-index: -1; pointer-events: none;
  background: radial-gradient(520px 300px at 80% 20%, var(--sb-glow), transparent 70%),
    radial-gradient(420px 300px at 10% 0%, rgba(58, 91, 199, 0.2), transparent 70%);
}
h1 { margin: 12px 0 0; font: 600 clamp(44px, 6vw, 84px) / 1 var(--sb-display); color: var(--sb-text); animation-delay: 0.1s; }
h1 :deep(em) { color: var(--sb-gold); }
.sub { max-width: 640px; margin: 14px 0 0; font: 400 17px / 1.6 var(--sb-ui); color: var(--sb-muted); animation-delay: 0.2s; }
</style>
