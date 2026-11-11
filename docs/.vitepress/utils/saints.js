// Utilidades compartilhadas pelos componentes que exibem santos e beatos.
import { withBase } from 'vitepress'

// O build renomeia as imagens para /assets com hash; este mapa liga o caminho
// de origem à URL final. Sem ele, as fotos quebram em produção.
const imagens = import.meta.glob('../../{santos,beatos}/*/imagens/*.{jpg,jpeg,png,webp,svg,JPG,JPEG,PNG}', {
  eager: true,
  query: '?url',
  import: 'default'
})

export const resolverImagem = (caminho) => {
  if (!caminho) return ''
  if (/^https?:/.test(caminho)) return caminho
  return imagens[`../../${caminho}`] || ''
}

export const link = (url) => withBase(url)

export const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
  'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

const ROMANOS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI',
  'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI']
export const romano = (n) => (n ? ROMANOS[n - 1] : '')

// "12 de outubro" → { day: 12, month: 9 }. Aceita observações depois da data.
export const parseFesta = (texto) => {
  const m = String(texto || '').toLowerCase().match(/(\d{1,2})º?\s+de\s+([a-zç]+)/)
  if (!m) return null
  const month = MESES.indexOf(m[2])
  return month < 0 ? null : { day: Number(m[1]), month }
}

export const festaEm = (lista, dia, mes) =>
  lista.filter((s) => {
    const f = parseFesta(s.feastDay)
    return f && f.day === dia && f.month === mes
  })

// Nome sem tratamento ("Santa Clara de Assis" → "Clara de Assis").
export const semTitulo = (titulo) =>
  String(titulo || '').replace(/^(São|Santa|Santo|Beato|Beata|Venerável|Frei|Padre)\s+/i, '').trim()

export const inicial = (titulo) => semTitulo(titulo).charAt(0).toUpperCase()

// Vitral: cada nome recebe sempre o mesmo par de cores.
const VITRAIS = [
  ['#3a5bc7', '#9b2c4e'], ['#2e8a7a', '#3a5bc7'], ['#9b2c4e', '#b8862b'],
  ['#3a5bc7', '#2e8a7a'], ['#b8862b', '#9b2c4e'], ['#5b3ac7', '#2e8a7a']
]
export const vitral = (titulo) => {
  let h = 0
  for (const c of String(titulo)) h = (h * 31 + c.charCodeAt(0)) >>> 0
  const [a, b] = VITRAIS[h % VITRAIS.length]
  return `linear-gradient(160deg, ${a}, ${b})`
}

export const rotuloTipo = (s) => {
  const fem = /^(Santa|Beata)\b/.test(s.title)
  if (s.type === 'santo') return fem ? 'Santa' : 'Santo'
  if (/^Ven/.test(s.title)) return 'Venerável'
  return fem ? 'Beata' : 'Beato'
}

export const TAGS = {
  brasil: 'Brasil',
  martir: 'Mártires',
  jovem: 'Jovens',
  doutor: 'Doutores da Igreja'
}

export const normalizar = (s) =>
  String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
