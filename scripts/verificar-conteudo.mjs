// Valida a estrutura de todas as páginas de santos e beatos.
// Uso: node scripts/verificar-conteudo.mjs  (sai com código 1 se achar problema)
import fs from 'node:fs'
import path from 'node:path'

const DOCS = path.join(process.cwd(), 'docs')
const CAMPOS = ['Nascimento', 'Morte', 'Festa Litúrgica']
const SECOES = ['Biografia', 'Cidades por onde passou', 'Impacto Hoje']

const paginas = () => {
  const lista = []
  for (const tipo of ['santos', 'beatos']) {
    for (const slug of fs.readdirSync(path.join(DOCS, tipo)).sort()) {
      const dir = path.join(DOCS, tipo, slug)
      if (!fs.statSync(dir).isDirectory()) continue
      const arquivo = path.join(dir, 'index.md')
      if (fs.existsSync(arquivo)) lista.push({ id: `${tipo}/${slug}`, tipo, slug, dir, arquivo })
    }
  }
  return lista
}

const problemas = []
const reportar = (id, msg) => problemas.push(`${id}: ${msg}`)

for (const p of paginas()) {
  const src = fs.readFileSync(p.arquivo, 'utf8')

  if (!/^---\ntitle: .+\ndescription: .+\n---/m.test(src)) reportar(p.id, 'frontmatter incompleto')
  if (!/^#\s+\S/m.test(src)) reportar(p.id, 'sem título H1')
  if (!/^>\s+\S/m.test(src)) reportar(p.id, 'sem citação')
  if (!/<TextToSpeech\s*\/>/.test(src)) reportar(p.id, 'sem <TextToSpeech />')

  const img = src.match(/!\[[^\]]*\]\(([^)\s]+)/)
  if (!img) reportar(p.id, 'sem imagem')
  else if (/^https?:/.test(img[1])) reportar(p.id, `imagem externa: ${img[1]}`)
  else if (!fs.existsSync(path.join(p.dir, img[1].replace(/^\.\//, '')))) reportar(p.id, `imagem inexistente: ${img[1]}`)

  for (const campo of CAMPOS) {
    if (!new RegExp(`^- \\*\\*${campo}:\\*\\*\\s*\\S`, 'm').test(src)) reportar(p.id, `sem campo ${campo}`)
  }
  if (!/^- \*\*(Canonização|Beatificação):\*\*\s*\S/m.test(src)) reportar(p.id, 'sem Canonização/Beatificação')
  for (const secao of SECOES) {
    if (!new RegExp(`^##\\s+${secao}\\s*$`, 'm').test(src)) reportar(p.id, `sem seção "${secao}"`)
  }
  // Mártires costumam ter "Martírio" no lugar de "Milagres" — ambos servem.
  if (!/^##\s+.*(Milagre|M[áa]rtir|Mart[íi]rio|Beatifica[çc][ãa]o|Canoniza[çc][ãa]o)/m.test(src)) {
    reportar(p.id, 'sem seção de milagres ou martírio')
  }

  const mapa = src.match(/<MiracleMap :items='([\s\S]*?)' \/>/)
  if (!mapa) { reportar(p.id, 'sem <MiracleMap>'); continue }

  let pinos
  try {
    pinos = new Function(`return (${mapa[1]})`)()
  } catch (err) {
    reportar(p.id, `mapa inválido: ${err.message}`)
    continue
  }
  if (!pinos.length) reportar(p.id, 'mapa sem marcadores')
  for (const pino of pinos) {
    if (!Number.isFinite(pino.lat) || pino.lat < -90 || pino.lat > 90) reportar(p.id, `latitude inválida em "${pino.title}"`)
    if (!Number.isFinite(pino.lng) || pino.lng < -180 || pino.lng > 180) reportar(p.id, `longitude inválida em "${pino.title}"`)
    if (!pino.title) reportar(p.id, 'marcador sem título')
    if (!['nascimento', 'morte', 'milagre', 'tumulo', 'vida'].includes(pino.type)) {
      reportar(p.id, `tipo de marcador desconhecido: ${pino.type}`)
    }
  }
  const tipos = new Set(pinos.map((x) => x.type))
  if (!tipos.has('nascimento') && !/desconhecid/i.test(src)) reportar(p.id, 'mapa sem marcador de nascimento')
  if (!tipos.has('morte')) reportar(p.id, 'mapa sem marcador de morte')
}

console.log(`páginas verificadas: ${paginas().length}`)
if (problemas.length) {
  console.error(`\nproblemas encontrados: ${problemas.length}`)
  console.error(problemas.join('\n'))
  process.exit(1)
}
console.log('nenhum problema encontrado')
