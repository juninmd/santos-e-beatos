import { createContentLoader } from 'vitepress'

// Junta os marcadores de <MiracleMap> de todas as páginas para o mapa-múndi.
// Formato compacto: [lat, lng, tipo, local, índice da página].
export default createContentLoader(['santos/**/*.md', 'beatos/**/*.md'], {
  includeSrc: true,
  transform(rawData) {
    const paginas = []
    const pinos = []
    for (const page of rawData) {
      const mapa = (page.src || '').match(/<MiracleMap :items='([\s\S]*?)' \/>/)
      if (!mapa) continue
      let itens
      try {
        itens = new Function(`return (${mapa[1]})`)()
      } catch {
        continue
      }
      const titulo = page.frontmatter?.title || page.url
      const idx = paginas.push({ url: page.url, title: titulo, type: page.url.startsWith('/santos/') ? 'santo' : 'beato' }) - 1
      for (const p of itens) {
        if (Number.isFinite(p.lat) && Number.isFinite(p.lng)) pinos.push([p.lat, p.lng, p.type, p.title || '', idx])
      }
    }
    return { paginas, pinos }
  }
})
