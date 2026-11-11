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

// Primeiro ano citado (3–4 dígitos, ou "NN d.C." para o século I); "a.C." fica de fora.
const ano = (texto) => {
  const t = String(texto || '')
  const m = t.match(/\b(\d{3,4})\b/) || t.match(/\b(\d{1,2})\s*d\.\s*C/)
  return m ? Number(m[1]) : null
}

const seculo = (a) => (a ? Math.min(21, Math.ceil(a / 100)) : null)

const citacao = (src) => {
  const m = src.match(/^>\s*(.+)$/m)
  return m ? limpar(m[1]).replace(/^[*_"“”']+|[*_"“”']+$/g, '').trim() : null
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

        const birth = campo(src, 'Nascimento')
        const death = campo(src, 'Morte')
        const nasc = ano(birth)
        const morte = ano(death)
        const sec = seculo(nasc || morte)
        const idade = nasc && morte && morte > nasc ? morte - nasc : null
        const canonizacao = campo(src, 'Canonização')
        const lugares = `${birth || ''} ${death || ''}`

        return {
          url: page.url,
          type: page.url.startsWith('/santos/') ? 'santo' : 'beato',
          title: limpar(titulo) || 'Sem Título',
          image,
          quote: citacao(src),
          feastDay: campo(src, 'Festa Litúrgica'),
          birth,
          death,
          honor: canonizacao ? 'Canonização' : 'Beatificação',
          honorDate: canonizacao || campo(src, 'Beatificação'),
          century: sec,
          tags: [
            /Brasil|\((MG|SP|RJ|BA|RS|SC|PR|PE|CE|GO|PA|PB|RN|ES|AL|SE|MA|PI|AM|MT|MS)\)/.test(lugares) && 'brasil',
            (/m[áa]rtir/i.test(death || '') || /\bmartirizad[oa]\b/i.test(src)) && 'martir',
            /Doutor[a]? da Igreja/i.test(src) && 'doutor',
            idade !== null && idade <= 30 && 'jovem'
          ].filter(Boolean)
        }
      })
      .sort((a, b) => a.title.localeCompare(b.title, 'pt'))
  }
})
