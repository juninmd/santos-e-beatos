import { createContentLoader } from 'vitepress'

export default createContentLoader(['santos/**/*.md', 'beatos/**/*.md'], {
  includeSrc: true,
  transform(rawData) {
    return rawData
      .filter((page) => page.url !== '/santos/' && page.url !== '/beatos/') // Exclude index pages
      .map((page) => {
        const src = page.src
        const metadata = {}

        // Extract title (h1)
        const titleMatch = src.match(/^#\s+(.*)/m)
        metadata.title = titleMatch ? titleMatch[1] : 'Sem Título'

        // Extract image
        const imgMatch = src.match(/!\[.*?\]\((.*?)\)/)
        metadata.image = imgMatch ? imgMatch[1] : null

        // Extract Feast Day
        // Pattern: **Festa Litúrgica:** 12 de outubro
        const feastMatch = src.match(/\*\*Festa Litúrgica:\*\*\s*(.*)/)
        metadata.feastDay = feastMatch ? feastMatch[1].trim() : null

        // Extract Birth and Death for display
        const birthMatch = src.match(/\*\*Nascimento:\*\*\s*(.*)/)
        metadata.birth = birthMatch ? birthMatch[1].trim() : null

        const deathMatch = src.match(/\*\*Morte:\*\*\s*(.*)/)
        metadata.death = deathMatch ? deathMatch[1].trim() : null

        return {
          url: page.url,
          ...metadata
        }
      })
  }
})
