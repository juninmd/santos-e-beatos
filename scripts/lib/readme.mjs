// Troca só a seção "## Lista de Santos e Beatos" do README, até o próximo H2.
// Sem o cabeçalho em início de linha, devolve null e o README não é tocado.
export const CABECALHO_LISTA = '## Lista de Santos e Beatos'

export function substituirSecaoLista(readme, corpo) {
  const m = /^## Lista de Santos e Beatos[ \t]*$/m.exec(readme)
  if (!m) return null
  const inicioCorpo = m.index + m[0].length
  const proximo = readme.slice(inicioCorpo).search(/^## /m)
  const depois = proximo < 0 ? '' : `\n${readme.slice(inicioCorpo + proximo)}`
  return `${readme.slice(0, m.index)}${CABECALHO_LISTA}\n\n${corpo}\n${depois}`
}
