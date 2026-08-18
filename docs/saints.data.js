import { createContentLoader } from 'vitepress'

// Remove marcações que atrapalham a exibição em texto puro (negrito, <br>, links).
const limpar = (valor) =>
  String(valor || '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const campo = (src, nome) => {
  const achado = src.match(new RegExp(`^-\\s*\\*\\*${nome}:\\*\\*\\s*(.+)$`, 'm'))
  return achado ? limpar(achado[1]) : null
}

export default createContentLoader(['santos/**/*.md', 'beatos/**/*.md'], {
  includeSrc: true,
  transform(rawData) {
    return rawData
      .filter((page) => page.url !== '/santos/' && page.url !== '/beatos/')
      .map((page) => {
        const src = page.src || ''
        const titulo = page.frontmatter?.title || (src.match(/^#\s+(.+)$/m) || [])[1]

        // Caminho da imagem relativo à pasta docs/ (ex.: santos/x/imagens/y.jpg).
        // Quem consome resolve para a URL final com import.meta.glob, porque o
        // build renomeia e move os arquivos para /assets.
        const imgMatch = src.match(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/)
        const rel = imgMatch ? imgMatch[1].replace(/^\.\//, '') : null
        const image = rel && !/^(https?:)?\//.test(rel) ? page.url.slice(1) + rel : rel

        return {
          url: page.url,
          type: page.url.startsWith('/santos/') ? 'santo' : 'beato',
          title: limpar(titulo) || 'Sem Título',
          image,
          feastDay: campo(src, 'Festa Litúrgica'),
          birth: campo(src, 'Nascimento'),
          death: campo(src, 'Morte')
        }
      })
      .sort((a, b) => a.title.localeCompare(b.title, 'pt'))
  }
})
