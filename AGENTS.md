# AGENTS.md

Portal estático (VitePress) com biografias, milagres e mapas de 419 santos e beatos católicos, em português. Sem backend nem banco de dados: o conteúdo é Markdown.

## Stack
- Node.js 20 (`.nvmrc`), npm com `package-lock.json`
- VitePress 1.6 (site em `docs/`), Leaflet (mapas), Playwright (devDependency)
- GitHub Pages para publicação

## Commands
- Setup: `npm ci`
- Dev: `npm run docs:dev`
- Build: `npm run docs:build` (o CI passa `BASE_PATH=/<repo>/`)
- Preview: `npm run docs:preview`
- Test: `npm test` (valida todas as páginas e roda `node --test scripts/readme.test.mjs`)
- Só validar conteúdo: `npm run conteudo:verificar`
- Regenerar: `npm run conteudo:indices` (índices e sidebar), `npm run conteudo:retratos` (cartões SVG)
- Lint e typecheck: não configurados

## Structure
- `docs/santos/<slug>/index.md` e `docs/beatos/<slug>/index.md`: um verbete por pessoa, com `imagens/` ao lado
- `docs/.vitepress/`: `config.js` (navegação e sidebar), `components/`, `theme/` (CSS), `utils/`
- `docs/*.md` e `docs/*.data.js`: home, explorar, calendário, mapa, grafo e loaders de dados
- `scripts/`: validador de conteúdo, geradores de índices e retratos, teste do README
- `docs/readme/`, `docs/prints/`: imagens do README
- `.github/workflows/`: `pages.yml` (testa, builda, publica), `validate.yml`, `sast.yml`, `security.yml`

## Conventions
- Conteúdo e UI em pt-BR; código e comentários seguem os scripts existentes (português)
- Commits: Conventional Commits, assunto minúsculo (ex.: `fix(favoritos): ...`)
- Verbete: frontmatter com `title` e `description`, um H1, citação, `<TextToSpeech />`, campos de datas (Nascimento, Morte, Canonização ou Beatificação, Festa Litúrgica), seções Biografia, Cidades por onde passou e Impacto Hoje, Milagres (ou Martírio), e um `<MiracleMap>` com pinos válidos
- Imagens sempre locais, dentro de `imagens/` do verbete; o validador recusa imagem externa
- Máximo 150 linhas por arquivo; separe responsabilidades por camada
- Fluxo Plan -> Act -> Validate; toda mudança passa por `npm test` e `npm run docs:build`
- Dados sensíveis ficam fora do contexto (chaves, tokens, dados pessoais)

## Gotchas
- `pages.yml` publica só em push para `master`; PRs só testam e buildam
- Ao criar ou remover um verbete, rode `npm run conteudo:indices`: ele reescreve `docs/.vitepress/config.js`, `docs/santos/index.md`, `docs/beatos/index.md` e a tabela do README. Não edite esses trechos à mão
- Favoritos ficam no `localStorage` do navegador; não há backend
- `engines` aceita Node >=18, mas o projeto usa Node 20 (`.nvmrc`)
- `docs/.vitepress/cache/` e `dist/` são gerados e já estão no `.gitignore`

<!-- base-actions-main-policy -->
## GitHub Actions — padrão obrigatório (@main)

- Referencie as actions internas sempre pelo branch, nunca por SHA:
  - `uses: juninmd/base-actions/<action>@main`
  - `uses: juninmd/base-actions/.github/workflows/<arquivo>.yml@main`
- Não fixe `@<sha>` em `juninmd/base-actions`: a atualização é centralizada no
  `main` e passa a valer no próximo run.
- PRs cujos checks não iniciam por billing/spending limit são mesclados pelo bot central
  `juninmd/base-actions/.github/workflows/auto-merge-billing-blocked.yml`.
  Para impedir o merge automático de um PR, aplique a label `do-not-merge`.
