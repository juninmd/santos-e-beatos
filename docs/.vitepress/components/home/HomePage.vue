<template>
  <div class="sb-full sb-home">
    <HomeHero />
    <SaintOfTheDay />
    <ExploreBento />
    <BrazilMarquee />
  </div>
</template>

<script setup>
import HomeHero from './HomeHero.vue'
import SaintOfTheDay from '../SaintOfTheDay.vue'
import ExploreBento from './ExploreBento.vue'
import BrazilMarquee from './BrazilMarquee.vue'
</script>

<style scoped>
.sb-home { overflow-x: clip; }
</style>
