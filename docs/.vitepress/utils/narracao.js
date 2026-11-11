// Narração (Web Speech API) compartilhada entre o botão do topo e o player.
import { reactive } from 'vue'

export const narracao = reactive({
  falando: false,
  pausado: false,
  velocidade: 1,
  progresso: 0,
  secao: 'Biografia'
})

let texto = ''
let inicio = 0
let secoes = []

const VELOCIDADES = [1, 1.25, 1.5, 2, 0.75]

const suportado = () => typeof window !== 'undefined' && 'speechSynthesis' in window

function coletarTexto() {
  const doc = document.querySelector('main .vp-doc')
  if (!doc) return ''
  secoes = []
  let acumulado = ''
  for (const el of doc.querySelectorAll('h2, p, li, blockquote')) {
    if (el.closest('.sb-player, .miracle-map-wrapper')) continue
    if (el.tagName === 'H2') secoes.push({ pos: acumulado.length, nome: el.textContent.replace(/#$/, '').trim() })
    acumulado += el.innerText.trim() + '\n'
  }
  return acumulado
}

function falar(aPartirDe) {
  window.speechSynthesis.cancel()
  inicio = aPartirDe
  const u = new SpeechSynthesisUtterance(texto.slice(aPartirDe))
  u.lang = 'pt-BR'
  u.rate = narracao.velocidade
  u.onboundary = (e) => {
    const pos = inicio + e.charIndex
    narracao.progresso = texto.length ? pos / texto.length : 0
    const atual = [...secoes].reverse().find((s) => s.pos <= pos)
    if (atual) narracao.secao = atual.nome
    u.ultimo = pos
  }
  u.onend = () => {
    if (u.cancelado) return
    narracao.falando = false
    narracao.progresso = 1
  }
  u.onerror = () => { narracao.falando = false }
  falar.atual = u
  window.speechSynthesis.speak(u)
  narracao.falando = true
  narracao.pausado = false
}

export function alternarNarracao() {
  if (!suportado()) {
    alert('Seu navegador não suporta a síntese de voz.')
    return
  }
  if (narracao.falando && !narracao.pausado) {
    window.speechSynthesis.pause()
    narracao.pausado = true
    return
  }
  if (narracao.pausado) {
    window.speechSynthesis.resume()
    narracao.pausado = false
    return
  }
  texto = coletarTexto()
  if (texto) falar(0)
}

export function trocarVelocidade() {
  narracao.velocidade = VELOCIDADES[(VELOCIDADES.indexOf(narracao.velocidade) + 1) % VELOCIDADES.length]
  if (narracao.falando && falar.atual) {
    const pos = falar.atual.ultimo ?? inicio
    falar.atual.cancelado = true
    falar(pos)
  }
}

export function pararNarracao() {
  if (suportado()) window.speechSynthesis.cancel()
  if (falar.atual) falar.atual.cancelado = true
  Object.assign(narracao, { falando: false, pausado: false, progresso: 0, secao: 'Biografia' })
}
