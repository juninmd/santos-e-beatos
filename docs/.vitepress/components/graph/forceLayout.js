// Layout por forças (repulsão entre nós + atração pelas arestas), sem dependências.
// Calculado uma vez no cliente; a semente fixa deixa o desenho estável entre visitas.
export const W = 1600
export const H = 1200

function aleatorio(semente) {
  let s = semente
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function calcularLayout(nos, arestas) {
  const rnd = aleatorio(42)
  const pos = {}
  for (const n of nos) pos[n.id] = { x: W / 2 + (rnd() - 0.5) * W, y: H / 2 + (rnd() - 0.5) * H }

  for (let it = 0; it < 150; it++) {
    const disp = {}
    for (const n of nos) disp[n.id] = { x: 0, y: 0 }

    for (let i = 0; i < nos.length; i++) {
      for (let j = i + 1; j < nos.length; j++) {
        const a = pos[nos[i].id], b = pos[nos[j].id]
        let dx = a.x - b.x
        let dy = a.y - b.y
        const d2 = dx * dx + dy * dy || 0.01
        if (d2 > 90000) continue // pares distantes não mudam o resultado visível
        const d = Math.sqrt(d2)
        const forca = 1800 / d2
        dx = (dx / d) * forca
        dy = (dy / d) * forca
        disp[nos[i].id].x += dx; disp[nos[i].id].y += dy
        disp[nos[j].id].x -= dx; disp[nos[j].id].y -= dy
      }
    }
    for (const e of arestas) {
      const a = pos[e.source], b = pos[e.target]
      if (!a || !b) continue
      const dx = a.x - b.x, dy = a.y - b.y
      const d = Math.sqrt(dx * dx + dy * dy) || 0.01
      const fx = (dx / d) * d * 0.01, fy = (dy / d) * d * 0.01
      disp[e.source].x -= fx; disp[e.source].y -= fy
      disp[e.target].x += fx; disp[e.target].y += fy
    }
    // Puxão leve para o centro: nós isolados não fogem do quadro.
    for (const n of nos) {
      disp[n.id].x += (W / 2 - pos[n.id].x) * 0.002
      disp[n.id].y += (H / 2 - pos[n.id].y) * 0.002
      pos[n.id].x += Math.max(-30, Math.min(30, disp[n.id].x))
      pos[n.id].y += Math.max(-30, Math.min(30, disp[n.id].y))
    }
  }
  return pos
}

export function vizinhos(arestas, id) {
  const lista = []
  for (const e of arestas) {
    if (e.source === id) lista.push({ id: e.target, rel: 'cita' })
    else if (e.target === id) lista.push({ id: e.source, rel: 'citado por' })
  }
  return lista
}
