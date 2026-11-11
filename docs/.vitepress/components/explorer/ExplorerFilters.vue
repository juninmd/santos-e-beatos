<template>
  <div class="filtros">
    <div v-if="!fixo" class="segmento" role="group" aria-label="Tipo">
      <button v-for="t in TIPOS" :key="t.k" type="button" :aria-pressed="tipo === t.k" @click="emit('update:tipo', t.k)">
        {{ t.rot }} <span>{{ contagem[t.k] }}</span>
      </button>
    </div>
    <div class="linha">
      <label class="busca">
        <span class="sb-sr">Filtrar por nome, cidade ou festa</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <input type="search" :value="q" placeholder="Nome, cidade, mês da festa…" @input="emit('update:q', $event.target.value)" />
      </label>
      <label class="ordem">
        <span>Ordenar</span>
        <select :value="ordem" @change="emit('update:ordem', $event.target.value)">
          <option value="az">A–Z</option>
          <option value="festa">Festa mais próxima</option>
          <option value="antigos">Mais antigos</option>
          <option value="recentes">Mais recentes</option>
        </select>
      </label>
    </div>
    <div class="chips" role="group" aria-label="Temas">
      <button type="button" class="sb-chip" :aria-pressed="!tag" @click="emit('update:tag', '')">Todos</button>
      <button v-for="(rot, k) in TAGS" :key="k" type="button" class="sb-chip" :aria-pressed="tag === k" @click="emit('update:tag', tag === k ? '' : k)">{{ rot }}</button>
      <button type="button" class="sb-chip" :aria-pressed="tag === 'salvos'" @click="emit('update:tag', tag === 'salvos' ? '' : 'salvos')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" /></svg>
        Salvos <span v-if="salvos">({{ salvos }})</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { TAGS } from '../../utils/saints.js'

defineProps({
  tipo: String, q: String, tag: String, ordem: String,
  contagem: Object, fixo: Boolean, salvos: Number
})
const emit = defineEmits(['update:tipo', 'update:q', 'update:tag', 'update:ordem'])

const TIPOS = [{ k: 'todos', rot: 'Todos' }, { k: 'santo', rot: 'Santos' }, { k: 'beato', rot: 'Beatos' }]
</script>

<style scoped>
.filtros { display: flex; flex-direction: column; gap: 16px; }
.segmento { display: inline-flex; align-self: flex-start; padding: 6px; border-radius: 999px; background: var(--sb-surface); border: 1px solid var(--sb-line); }
.segmento button {
  min-height: 44px; padding: 0 20px; border: 0; border-radius: 999px; cursor: pointer;
  background: transparent; color: var(--sb-text); font: 600 15px var(--sb-ui); transition: background 0.3s;
}
.segmento button span { opacity: 0.7; font-weight: 500; }
.segmento button[aria-pressed='true'] { background: var(--sb-cta); color: var(--sb-cta-text); }
.linha { display: flex; flex-wrap: wrap; gap: 12px; }
.busca {
  flex: 1 1 280px; display: flex; align-items: center; gap: 10px; padding: 0 16px; min-height: 48px;
  border-radius: 14px; background: var(--sb-surface); border: 1px solid var(--sb-line); color: var(--sb-gold);
}
.busca:focus-within { border-color: var(--sb-gold); }
.busca input { flex: 1; min-width: 0; height: 46px; border: 0; outline: 0; background: transparent; color: var(--sb-text); font: 400 15px var(--sb-ui); }
.ordem { display: flex; align-items: center; gap: 8px; font: 400 14px var(--sb-ui); color: var(--sb-muted); }
.ordem select {
  min-height: 48px; padding: 0 12px; border-radius: 14px; background: var(--sb-surface);
  color: var(--sb-text); border: 1px solid var(--sb-line); font: 500 14px var(--sb-ui);
}
.chips { display: flex; flex-wrap: wrap; gap: 10px; }
</style>
