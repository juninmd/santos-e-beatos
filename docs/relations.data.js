import { createContentLoader } from 'vitepress'

// Remove títulos honoríficos para sobrar só o "nome" usado nas menções cruzadas.
const semTitulo = (titulo) =>
  String(titulo || '')
    .replace(/^(São|Santa|Santo|Beato|Beata|Venerável)\s+/i, '')
    .trim()

export default createContentLoader(['santos/**/*.md', 'beatos/**/*.md'], {
  includeSrc: true,
  transform(rawData) {
    const paginas = rawData.filter((page) => page.url !== '/santos/' && page.url !== '/beatos/')

    const nos = paginas.map((page) => {
      const titulo = page.frontmatter?.title || (page.src.match(/^#\s+(.+)$/m) || [])[1] || 'Sem Título'
      return {
        id: page.url,
        title: titulo.trim(),
        nome: semTitulo(titulo),
        type: page.url.startsWith('/santos/') ? 'santo' : 'beato'
      }
    })

    // Menção cruzada: A -> B se o "nome" de B aparece no texto de A (e não é a própria página).
    // Nomes com menos de 4 caracteres são ignorados para evitar falsos positivos (ex.: "Ana").
    const arestas = []
    for (const origem of paginas) {
      for (const alvo of nos) {
        if (origem.url === alvo.id) continue
        if (alvo.nome.length < 4) continue
        const escaped = alvo.nome.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const re = new RegExp(`\\b${escaped}\\b`, 'i')
        if (re.test(origem.src)) {
          arestas.push({ source: origem.url, target: alvo.id })
        }
      }
    }

    return { nos, arestas }
  }
})
