<template>
  <div class="tts-container">
    <button @click="toggleSpeech" class="tts-button">
      {{ isSpeaking ? 'Parar Narração' : 'Ouvir Narração' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSpeaking = ref(false)
let utterance = null

const toggleSpeech = () => {
  if (isSpeaking.value) {
    window.speechSynthesis.cancel()
    isSpeaking.value = false
  } else {
    speak()
  }
}

const speak = () => {
  if (!window.speechSynthesis) {
    alert('Seu navegador não suporta a síntese de voz.')
    return
  }

  // Get text from the article content, excluding the title which is usually h1
  // We'll target the main content area in VitePress
  const content = document.querySelector('.vp-doc main') || document.body
  const text = content.innerText

  utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'pt-BR'

  utterance.onend = () => {
    isSpeaking.value = false
  }

  window.speechSynthesis.speak(utterance)
  isSpeaking.value = true
}

onUnmounted(() => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel()
  }
})
</script>

<style scoped>
.tts-container {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
}

.tts-button {
  background-color: var(--vp-c-brand-1);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-weight: bold;
}

.tts-button:hover {
  background-color: var(--vp-c-brand-2);
}
</style>
