// Gera um cartão SVG local para cada página sem imagem própria, substituindo os
// antigos links para placehold.co (dependência externa que quebrava o site
// offline e não era licenciada). Rode com: node scripts/gerar-retratos.mjs
import fs from 'node:fs'
import path from 'node:path'

const DOCS = path.join(process.cwd(), 'docs')

const PALETA = {
  santos: { fundo1: '#3d2a12', fundo2: '#8a5a1c', halo: '#f3c969', texto: '#fdf6e6', selo: 'Santo' },
  beatos: { fundo1: '#141c33', fundo2: '#2f4780', halo: '#9fc0f5', texto: '#eef3fd', selo: 'Beato' }
}

const escapar = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

// Quebra gulosa por largura estimada — SVG não reflui texto sozinho.
const quebrar = (texto, maxChars) => {
  const linhas = []
  let atual = ''
  for (const palavra of texto.split(/\s+/)) {
    if (!atual) atual = palavra
    else if ((atual + ' ' + palavra).length <= maxChars) atual += ' ' + palavra
    else { linhas.push(atual); atual = palavra }
  }
  if (atual) linhas.push(atual)
  return linhas.slice(0, 3)
}

export function cartaoSvg({ nome, anos, tipo }) {
  const p = PALETA[tipo] || PALETA.santos
  const linhas = quebrar(nome, 17)
  const baseY = 420 - (linhas.length - 1) * 18

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600" role="img" aria-label="${escapar(nome)}">
  <defs>
    <linearGradient id="f" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${p.fundo1}"/>
      <stop offset="100%" stop-color="${p.fundo2}"/>
    </linearGradient>
    <radialGradient id="h" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${p.halo}" stop-opacity="0.95"/>
      <stop offset="70%" stop-color="${p.halo}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${p.halo}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="600" fill="url(#f)"/>
  <rect x="14" y="14" width="372" height="572" fill="none" stroke="${p.halo}" stroke-opacity="0.45" stroke-width="2" rx="10"/>
  <circle cx="200" cy="228" r="130" fill="url(#h)"/>
  <circle cx="200" cy="228" r="78" fill="none" stroke="${p.halo}" stroke-opacity="0.8" stroke-width="3"/>
  <path d="M200 168 v120 M170 204 h60" stroke="${p.halo}" stroke-width="7" stroke-linecap="round" fill="none" opacity="0.9"/>
${linhas
  .map(
    (linha, i) =>
      `  <text x="200" y="${baseY + i * 34}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="27" fill="${p.texto}">${escapar(linha)}</text>`
  )
  .join('\n')}
  <text x="200" y="${baseY + linhas.length * 34 + 12}" text-anchor="middle" font-family="Georgia, serif" font-size="17" fill="${p.halo}">${escapar(anos || p.selo)}</text>
  <text x="200" y="570" text-anchor="middle" font-family="Georgia, serif" font-size="12" fill="${p.texto}" opacity="0.6">Ilustração — imagem histórica pendente</text>
</svg>
`
}

// Extrai "1991" e "2006" de "3 de maio de 1991, Londres".
const ano = (v) => (v && (v.match(/\b(\d{3,4})\b/) || [])[1]) || null

export function anosDe(src) {
  const nasc = ano((src.match(/\*\*Nascimento:?\*\*:?\s*([^\n]*)/) || [])[1])
  const morte = ano((src.match(/\*\*Morte:?\*\*:?\s*([^\n]*)/) || [])[1])
  if (nasc && morte) return `${nasc} — ${morte}`
  return nasc || morte || null
}

if (import.meta.url === `file://${process.argv[1]}`) {
  let criados = 0
  for (const tipo of ['santos', 'beatos']) {
    for (const slug of fs.readdirSync(path.join(DOCS, tipo)).sort()) {
      const dir = path.join(DOCS, tipo, slug)
      const arquivo = path.join(dir, 'index.md')
      if (!fs.statSync(dir).isDirectory() || !fs.existsSync(arquivo)) continue
      const src = fs.readFileSync(arquivo, 'utf8')
      const img = src.match(/!\[[^\]]*\]\(([^)\s]+)/) || src.match(/<img[^>]*\bsrc=["']([^"']+)["']/i)
      const local = img && !/^https?:/.test(img[1]) && fs.existsSync(path.join(dir, img[1].replace(/^\.\//, '')))
      if (local) continue

      const nome = (src.match(/^#\s+(.+)$/m) || [])[1] || slug
      const destino = path.join(dir, 'imagens')
      fs.mkdirSync(destino, { recursive: true })
      fs.writeFileSync(path.join(destino, 'retrato.svg'), cartaoSvg({ nome: nome.trim(), anos: anosDe(src), tipo }))
      criados++
    }
  }
  console.log(`cartões gerados: ${criados}`)
}
