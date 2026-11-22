# AGENTS.md

Static site (VitePress) with biographies, miracles and maps of 419 Catholic saints and blesseds, in Portuguese. No backend or database: content is Markdown.

## Stack
- Node.js 20 (`.nvmrc`), npm with `package-lock.json`
- VitePress 1.6 (site in `docs/`), Leaflet (maps), Playwright (devDependency)
- GitHub Pages for publishing

## Commands
- Setup: `npm ci`
- Dev: `npm run docs:dev`
- Build: `npm run docs:build` (CI sets `BASE_PATH=/<repo>/`)
- Preview: `npm run docs:preview`
- Test: `npm test` (validates every page, then runs `node --test scripts/readme.test.mjs`)
- Content check only: `npm run conteudo:verificar`
- Regenerate: `npm run conteudo:indices` (indexes and sidebar), `npm run conteudo:retratos` (SVG cards)
- Lint and typecheck: not configured

## Structure
- `docs/santos/<slug>/index.md` and `docs/beatos/<slug>/index.md`: one entry per person, with `imagens/` beside it
- `docs/.vitepress/`: `config.js` (navigation, sidebar), `components/`, `theme/` (CSS), `utils/`
- `docs/*.md` and `docs/*.data.js`: home, explore, calendar, map, graph pages and data loaders
- `scripts/`: content validator, index and portrait generators, README test
- `docs/readme/`, `docs/prints/`: README images
- `.github/workflows/`: `pages.yml` (test, build, publish), `validate.yml`, `sast.yml`, `security.yml`

## Conventions
- Content and UI text in Portuguese (pt-BR); scripts and comments in Portuguese, as they already are
- Commits: Conventional Commits with a lowercase subject (e.g. `fix(favoritos): ...`)
- Each entry needs frontmatter with `title` and `description`, one H1, a quote, `<TextToSpeech />`, date fields (Nascimento, Morte, Canonização or Beatificação, Festa Litúrgica), sections Biografia, Cidades por onde passou and Impacto Hoje, Milagres (or Martírio), and a `<MiracleMap>` with valid pins
- Images are always local, inside the entry's `imagens/`; the validator rejects external images
- Maximum 150 lines per file; separate responsibilities by layer
- Workflow: Plan -> Act -> Validate; every change passes `npm test` and `npm run docs:build`
- Sensitive data (keys, tokens, personal data) stays out of context

## Gotchas
- `pages.yml` publishes only on push to `master`; PRs only test and build
- After adding or removing an entry, run `npm run conteudo:indices`. It rewrites `docs/.vitepress/config.js`, `docs/santos/index.md`, `docs/beatos/index.md` and the README list. Do not edit those parts by hand
- Favorites are stored in the browser's `localStorage`; there is no backend
- `engines` accepts Node >=18, but the project uses Node 20 (`.nvmrc`)
- `docs/.vitepress/cache/` and `dist/` are generated and already in `.gitignore`

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
