import assert from 'node:assert/strict'
import { test } from 'node:test'
import { substituirSecaoLista } from './lib/readme.mjs'

test('ignora o cabeçalho citado no meio de uma linha e não apaga o resto do README', () => {
  const readme = '# Título\n\n> o script usa `## Lista de Santos e Beatos` como âncora.\n\n## Licença\n\nCC0\n'
  assert.equal(substituirSecaoLista(readme, 'tabela'), null)
})

test('troca só a seção da lista e preserva as seções seguintes', () => {
  const readme = '# T\n\n## Lista de Santos e Beatos\n\nvelha\n| a |\n\n## Licença\n\nCC0\n'
  assert.equal(
    substituirSecaoLista(readme, 'nova'),
    '# T\n\n## Lista de Santos e Beatos\n\nnova\n\n## Licença\n\nCC0\n'
  )
})

test('seção da lista no fim do arquivo é reescrita até o EOF', () => {
  const readme = '# T\n\n## Lista de Santos e Beatos\n\nvelha\n'
  assert.equal(substituirSecaoLista(readme, 'nova'), '# T\n\n## Lista de Santos e Beatos\n\nnova\n')
})
