# Santos e Beatos da Igreja Católica

Biografias, imagens, milagres e mapas de santos e beatos da Igreja Católica, publicadas como site estático com [VitePress](https://vitepress.dev/).

## Conteúdo

- **163 santos** em [`docs/santos/`](docs/santos/index.md)
- **147 beatos** em [`docs/beatos/`](docs/beatos/index.md)

Cada entrada inclui biografia, contexto histórico, imagens (retrato/capa) e, quando aplicável, mapas de nascimento, morte e milagres.

## Como executar

Pré-requisitos: Node.js 18+.

```bash
npm install
```

Servidor de desenvolvimento:

```bash
npm run docs:dev
```

Site disponível em `http://localhost:5173`.

Build de produção:

```bash
npm run docs:build
npm run docs:preview
```

## Scripts de conteúdo

| Script | Descrição |
| --- | --- |
| `npm test` | Verifica integridade do conteúdo (`scripts/verificar-conteudo.mjs`) |
| `npm run conteudo:indices` | Gera índices de santos e beatos (`scripts/gerar-indices.mjs`) |
| `npm run conteudo:retratos` | Gera retratos SVG (`scripts/gerar-retratos.mjs`) |

## Estrutura

```
docs/
  santos/          # páginas dos santos
  beatos/          # páginas dos beatos
  .vitepress/      # configuração e componentes do site
scripts/           # scripts de verificação e geração de conteúdo
```

## Contribuições

Para adicionar ou corrigir uma entrada, crie/edite a página em `docs/santos/` ou `docs/beatos/`, adicione as imagens em `imagens/` e rode `npm test` para validar.