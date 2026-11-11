<template>
  <article class="sb-card cartao">
    <div class="img">
      <SaintPortrait :saint="saint" />
      <div class="halo" aria-hidden="true"></div>
      <span class="tipo" :class="saint.type">{{ rotuloTipo(saint) }}</span>
      <button type="button" class="fav" :aria-pressed="eFavorito(saint.url)" :aria-label="`Salvar ${saint.title}`" @click="alternar(saint.url)">
        <svg width="18" height="18" viewBox="0 0 24 24" :fill="eFavorito(saint.url) ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" /></svg>
      </button>
    </div>
    <div class="txt">
      <h3><a :href="link(saint.url)">{{ saint.title }}</a></h3>
      <p v-if="saint.quote" class="quote">“{{ saint.quote }}”</p>
      <p v-if="saint.feastDay" class="festa">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
        {{ saint.feastDay }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { link, rotuloTipo } from '../../utils/saints.js'
import { useFavoritos } from '../../utils/favoritos.js'
import SaintPortrait from '../SaintPortrait.vue'

defineProps({ saint: { type: Object, required: true } })
const { eFavorito, alternar } = useFavoritos()
</script>

<style scoped>
.cartao { position: relative; display: flex; flex-direction: column; overflow: hidden; }
.cartao:hover { transform: translateY(-6px) rotate(-0.4deg); border-color: var(--sb-gold); box-shadow: 0 26px 60px -24px var(--sb-glow); }
.img { position: relative; height: 220px; }
.halo {
  position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity 0.4s;
  background: radial-gradient(circle at 50% 40%, rgba(246, 223, 160, 0.45), transparent 60%);
}
.cartao:hover .halo { opacity: 1; }
.tipo {
  position: absolute; top: 12px; left: 12px; padding: 4px 10px; border-radius: 999px;
  background: rgba(11, 10, 26, 0.75); font: 600 10px var(--sb-caps); letter-spacing: 0.14em;
  text-transform: uppercase; color: #e9c46a;
}
.tipo.beato { color: #f08aa8; }
.fav {
  position: absolute; top: 4px; right: 4px; z-index: 2; width: 44px; height: 44px; border: 0;
  border-radius: 999px; background: transparent; color: #f6dfa0; cursor: pointer; display: grid; place-items: center;
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.6)); transition: transform 0.2s;
}
.fav:hover { transform: scale(1.15); }
.fav[aria-pressed='true'] { color: #f08aa8; }
.txt { display: flex; flex-direction: column; gap: 6px; padding: 16px 18px 18px; }
h3 { margin: 0; font: 600 22px / 1.1 var(--sb-display); }
/* O link cobre o cartão inteiro, mas o botão de favoritar fica por cima. */
h3 a { color: var(--sb-text); text-decoration: none; }
h3 a::after { content: ''; position: absolute; inset: 0; }
.quote { margin: 0; font: italic 500 15px / 1.35 var(--sb-display); color: var(--sb-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.festa { display: flex; align-items: center; gap: 6px; margin: 2px 0 0; font: 500 12px var(--sb-ui); color: var(--sb-gold); }
</style>
