// Regera a navegação a partir dos arquivos existentes: sidebar do VitePress,
// as páginas de índice e a tabela do README. Evita links quebrados e entradas
// esquecidas. Uso: node scripts/gerar-indices.mjs
import fs from 'node:fs'
import path from 'node:path'

const RAIZ = process.cwd()
const DOCS = path.join(RAIZ, 'docs')

const semAcento = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '')

// Ordena por nome próprio, ignorando o tratamento (São/Santa/Beato/Beata).
const chaveOrdem = (titulo) =>
  semAcento(titulo)
    .replace(/^(S[ãa]o|Santo|Santa|Beato|Beata|Ven[eé]r[áa]vel)\s+/i, '')
    .toLowerCase()

const listar = (tipo) =>
  fs
    .readdirSync(path.join(DOCS, tipo))
    .filter((slug) => fs.existsSync(path.join(DOCS, tipo, slug, 'index.md')))
    .map((slug) => {
      const src = fs.readFileSync(path.join(DOCS, tipo, slug, 'index.md'), 'utf8')
      const titulo = (src.match(/^#\s+(.+)$/m) || [])[1]?.trim() || slug
      const imagem = (src.match(/!\[[^\]]*\]\(([^)\s]+)/) || [])[1] || null
      return { slug, titulo, imagem, tipo }
    })
    .sort((a, b) => chaveOrdem(a.titulo).localeCompare(chaveOrdem(b.titulo), 'pt'))

const santos = listar('santos')
const beatos = listar('beatos')

// --- sidebar do VitePress ---
const itensSidebar = (lista) =>
  lista.map((p) => `            { text: '${p.titulo.replace(/'/g, "\\'")}', link: '/${p.tipo}/${p.slug}/' }`).join(',\n')

const config = fs.readFileSync(path.join(DOCS, '.vitepress/config.js'), 'utf8')
const trocarSecao = (texto, tipo, lista) => {
  const marcador = `'/${tipo}/': [`
  const inicio = texto.indexOf(marcador)
  const abre = texto.indexOf('items: [', inicio)
  const fecha = texto.indexOf('\n          ]', abre)
  return texto.slice(0, abre + 'items: ['.length) + '\n' + itensSidebar(lista) + texto.slice(fecha)
}
let novoConfig = trocarSecao(config, 'beatos', beatos)
novoConfig = trocarSecao(novoConfig, 'santos', santos)
fs.writeFileSync(path.join(DOCS, '.vitepress/config.js'), novoConfig)

// --- páginas de índice ---
const paginaIndice = (tipo, lista, titulo, intro) =>
  `# ${titulo}\n\n${intro}\n\n` +
  lista.map((p) => `- [${p.titulo}](${p.slug}/index.md)`).join('\n') +
  '\n'

fs.writeFileSync(
  path.join(DOCS, 'santos/index.md'),
  paginaIndice('santos', santos, 'Santos', `Esta seção reúne ${santos.length} santos canonizados pela Igreja Católica, com biografia, milagres e mapa de nascimento, morte e devoção.`)
)
fs.writeFileSync(
  path.join(DOCS, 'beatos/index.md'),
  paginaIndice('beatos', beatos, 'Beatos', `Esta seção reúne ${beatos.length} beatos e veneráveis da Igreja Católica, com biografia, milagres e mapa de nascimento, morte e devoção.`)
)

// --- tabela do README ---
const linhaReadme = (p) => {
  const img = p.imagem ? `docs/${p.tipo}/${p.slug}/${p.imagem.replace(/^\.\//, '')}` : ''
  return `| [${p.titulo}](docs/${p.tipo}/${p.slug}/index.md) | ![${p.titulo}](${img}) |`
}
const tabela = [
  '| Nome | Imagem |',
  '| --- | --- |',
  ...[...beatos, ...santos].map(linhaReadme)
].join('\n')

const readme = fs.readFileSync(path.join(RAIZ, 'README.md'), 'utf8')
const cabecalho = '## Lista de Santos e Beatos'
const antes = readme.slice(0, readme.indexOf(cabecalho))
fs.writeFileSync(
  path.join(RAIZ, 'README.md'),
  `${antes}${cabecalho}\n\nSão ${beatos.length} beatos e ${santos.length} santos catalogados.\n\n${tabela}\n`
)

console.log(`sidebar, índices e README atualizados: ${santos.length} santos, ${beatos.length} beatos`)
