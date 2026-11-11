<template>
  <div class="rose-wrap">
    <div class="halo" aria-hidden="true"></div>
    <svg class="rose-svg" viewBox="0 0 400 400" role="img" aria-label="Rosácea de vitral girando lentamente">
      <defs>
        <radialGradient id="sb-core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#f6dfa0" /><stop offset="1" stop-color="#b8862b" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="#15132b" stroke="#e9c46a" stroke-width="2" />
      <g class="spin" stroke="#e9c46a" stroke-width="1.5">
        <path v-for="(c, i) in petalas" :key="i" d="M200 200 L188 40 Q200 20 212 40 Z"
          :fill="c" fill-opacity=".85" :transform="`rotate(${i * 30} 200 200)`" />
      </g>
      <g class="spin-r" fill="none" stroke="#e9c46a" stroke-width="1.5">
        <circle cx="200" cy="200" r="120" stroke-dasharray="4 8" />
        <circle v-for="(p, i) in orbitas" :key="i" :cx="p[0]" :cy="p[1]" r="22" />
      </g>
      <circle cx="200" cy="200" r="64" fill="#0b0a1a" stroke="#e9c46a" stroke-width="2" />
      <circle cx="200" cy="200" r="46" fill="url(#sb-core)" />
      <path d="M200 172v56M180 192h40" stroke="#0b0a1a" stroke-width="6" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script setup>
const cores = ['#3a5bc7', '#9b2c4e', '#2e8a7a']
const petalas = Array.from({ length: 12 }, (_, i) => cores[i % 3])
const orbitas = [[200, 80], [200, 320], [80, 200], [320, 200], [115, 115], [285, 285], [285, 115], [115, 285]]
</script>

<style scoped>
.rose-wrap { position: relative; display: grid; place-items: center; width: 100%; }
.halo {
  position: absolute; width: 120%; max-width: 560px; aspect-ratio: 1; border-radius: 999px;
  background: radial-gradient(circle, var(--sb-glow), transparent 65%); opacity: 0.6;
  animation: sb-glow 4s ease-in-out infinite;
}
.rose-svg { position: relative; width: 100%; max-width: 480px; animation: sb-float 6s ease-in-out infinite; }
.spin { transform-origin: 200px 200px; animation: sb-spin 120s linear infinite; }
.spin-r { transform-origin: 200px 200px; animation: sb-spin 80s linear infinite reverse; }
</style>
