// Favoritos e preferências de leitura, guardados só no navegador do visitante.
import { ref, watch } from 'vue'
import { inBrowser } from 'vitepress'

const ler = (chave, padrao) => {
  if (!inBrowser) return padrao
  try {
    const v = localStorage.getItem(chave)
    return v ? JSON.parse(v) : padrao
  } catch {
    return padrao
  }
}

const gravar = (chave, valor) => {
  try {
    localStorage.setItem(chave, JSON.stringify(valor))
  } catch {
    /* modo privado ou armazenamento bloqueado: segue sem persistir */
  }
}

const favoritos = ref([])
let carregado = false

export function useFavoritos() {
  if (inBrowser && !carregado) {
    carregado = true
    favoritos.value = ler('sb:favoritos', [])
    watch(favoritos, (v) => gravar('sb:favoritos', v), { deep: true })
  }
  const eFavorito = (url) => favoritos.value.includes(url)
  const alternar = (url) => {
    favoritos.value = eFavorito(url)
      ? favoritos.value.filter((u) => u !== url)
      : [...favoritos.value, url]
  }
  return { favoritos, eFavorito, alternar }
}

// Tamanho do texto e modo pergaminho valem para todas as biografias.
export function aplicarLeitura(prefs) {
  if (!inBrowser) return
  const html = document.documentElement
  html.style.setProperty('--sb-read-size', `${prefs.tamanho}px`)
  html.classList.toggle('sb-pergaminho', prefs.pergaminho)
  gravar('sb:leitura', prefs)
}

export const lerLeitura = () => ler('sb:leitura', { tamanho: 19, pergaminho: false })
