// Configuração comum dos mapas Leaflet (página do santo e mapa-múndi).

// Taxonomia dos marcadores; as cores também são as da legenda.
export const MARKER_TYPES = {
  nascimento: { label: 'Nascimento', color: '#6fd3c0' },
  morte: { label: 'Morte / Martírio', color: '#e05a82' },
  milagre: { label: 'Milagre', color: '#e9c46a' },
  tumulo: { label: 'Túmulo / Relíquias', color: '#b38cff' },
  vida: { label: 'Vida e missão', color: '#6f9cff' }
}
export const DEFAULT_TYPE = 'vida'

export const escapeHtml = (value = '') =>
  String(value).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  )

// Tiles do OpenStreetMap; no tema escuro um filtro CSS (map.css) escurece o mapa.
const TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const ATRIBUICAO = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

// Cria o mapa com o tema do site e devolve uma função para trocar o tema depois.
export async function criarMapa(el, escuro, opcoes = {}) {
  const L = (await import('leaflet')).default
  const map = L.map(el, { scrollWheelZoom: false, worldCopyJump: true, ...opcoes })
  L.tileLayer(TILES, { attribution: ATRIBUICAO, maxZoom: 18 }).addTo(map)
  const tema = (e) => el.classList.toggle('sb-mapa-escuro', e)
  tema(escuro)
  return { L, map, tema }
}
