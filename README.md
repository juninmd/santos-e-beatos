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

## Lista de Santos e Beatos

São 172 beatos e 187 santos catalogados.

| Nome | Imagem |
| --- | --- |
| [Beato Adílio Daronch](docs/beatos/beato-adilio-daronch/index.md) | ![Beato Adílio Daronch](docs/beatos/beato-adilio-daronch/imagens/retrato.svg) |
| [Beato Agostinho Kazotić](docs/beatos/beato-agostinho-kazotic/index.md) | ![Beato Agostinho Kazotić](docs/beatos/beato-agostinho-kazotic/imagens/portrait.jpg) |
| [Beato Alano de la Roche](docs/beatos/beato-alano-de-la-roche/index.md) | ![Beato Alano de la Roche](docs/beatos/beato-alano-de-la-roche/imagens/portrait.jpg) |
| [Beata Albertina Berkenbrock](docs/beatos/beata-albertina-berkenbrock/index.md) | ![Beata Albertina Berkenbrock](docs/beatos/beata-albertina-berkenbrock/imagens/retrato.svg) |
| [Beato Alberto Marvelli](docs/beatos/beato-alberto-marvelli/index.md) | ![Beato Alberto Marvelli](docs/beatos/beato-alberto-marvelli/imagens/portrait.jpg) |
| [Beata Alexandrina de Balasar](docs/beatos/alexandrina-de-balasar/index.md) | ![Beata Alexandrina de Balasar](docs/beatos/alexandrina-de-balasar/imagens/alexandrina.jpg) |
| [Beato Alojzije Stepinac](docs/beatos/beato-alojzije-stepinac/index.md) | ![Beato Alojzije Stepinac](docs/beatos/beato-alojzije-stepinac/imagens/cover.jpg) |
| [Beato Álvaro del Portillo](docs/beatos/beato-alvaro-del-portillo/index.md) | ![Beato Álvaro del Portillo](docs/beatos/beato-alvaro-del-portillo/imagens/retrato.svg) |
| [Beata Ana Catarina Emmerich](docs/beatos/beata-ana-catarina-emmerich/index.md) | ![Beata Ana Catarina Emmerich](docs/beatos/beata-ana-catarina-emmerich/imagens/emmerich.jpg) |
| [Beata Ana de Jesus](docs/beatos/beata-ana-de-jesus/index.md) | ![Beata Ana de Jesus](docs/beatos/beata-ana-de-jesus/imagens/retrato.svg) |
| [Beata Ana de São Bartolomeu](docs/beatos/beata-ana-de-sao-bartolomeu/index.md) | ![Beata Ana de São Bartolomeu](docs/beatos/beata-ana-de-sao-bartolomeu/imagens/portrait.png) |
| [Beata Ana dos Anjos Monteagudo](docs/beatos/beata-ana-dos-anjos-monteagudo/index.md) | ![Beata Ana dos Anjos Monteagudo](docs/beatos/beata-ana-dos-anjos-monteagudo/imagens/portrait.jpg) |
| [Beato Anacleto González Flores](docs/beatos/beato-anacleto-gonzalez-flores/index.md) | ![Beato Anacleto González Flores](docs/beatos/beato-anacleto-gonzalez-flores/imagens/portrait.jpg) |
| [Beata Anna Kolesárová](docs/beatos/beata-anna-kolesarova/index.md) | ![Beata Anna Kolesárová](docs/beatos/beata-anna-kolesarova/imagens/cover.jpg) |
| [Beata Anna Maria Taigi](docs/beatos/beata-anna-maria-taigi/index.md) | ![Beata Anna Maria Taigi](docs/beatos/beata-anna-maria-taigi/imagens/portrait.jpg) |
| [Beata Anna Rosa Gattorno](docs/beatos/beata-anna-rosa-gattorno/index.md) | ![Beata Anna Rosa Gattorno](docs/beatos/beata-anna-rosa-gattorno/imagens/portrait.jpg) |
| [Beata Antônia Mesina](docs/beatos/beata-antonia-mesina/index.md) | ![Beata Antônia Mesina](docs/beatos/beata-antonia-mesina/imagens/portrait.jpg) |
| [Venerável Antonietta Meo (Nennolina)](docs/beatos/beata-antonieta-meo/index.md) | ![Venerável Antonietta Meo (Nennolina)](docs/beatos/beata-antonieta-meo/imagens/portrait.jpg) |
| [Beato Antônio Chevrier](docs/beatos/beato-antonio-chevrier/index.md) | ![Beato Antônio Chevrier](docs/beatos/beato-antonio-chevrier/imagens/portrait.jpg) |
| [Beato Antônio de Categeró](docs/beatos/beato-antonio-de-categero/index.md) | ![Beato Antônio de Categeró](docs/beatos/beato-antonio-de-categero/imagens/cover.jpg) |
| [Beato Antônio Frederico Ozanam](docs/beatos/beato-antonio-frederico-ozanam/index.md) | ![Beato Antônio Frederico Ozanam](docs/beatos/beato-antonio-frederico-ozanam/imagens/portrait.jpg) |
| [Beato Antonio Rosmini](docs/beatos/beato-antonio-rosmini/index.md) | ![Beato Antonio Rosmini](docs/beatos/beato-antonio-rosmini/imagens/cover.jpg) |
| [Beata Anuarite Nengapeta](docs/beatos/beata-anuarite-nengapeta/index.md) | ![Beata Anuarite Nengapeta](docs/beatos/beata-anuarite-nengapeta/imagens/cover.jpg) |
| [Beata Armida Barelli](docs/beatos/beata-armida-barelli/index.md) | ![Beata Armida Barelli](docs/beatos/beata-armida-barelli/imagens/portrait.jpg) |
| [Beata Assunta Marchetti](docs/beatos/beata-assunta-marchetti/index.md) | ![Beata Assunta Marchetti](docs/beatos/beata-assunta-marchetti/imagens/retrato.svg) |
| [Beato Augusto Czartoryski](docs/beatos/beato-augusto-czartoryski/index.md) | ![Beato Augusto Czartoryski](docs/beatos/beato-augusto-czartoryski/imagens/portrait.jpg) |
| [Beata Bárbara Maix](docs/beatos/beata-barbara-maix/index.md) | ![Beata Bárbara Maix](docs/beatos/beata-barbara-maix/imagens/barbara-maix.jpg) |
| [Beata Benedetta Bianchi Porro](docs/beatos/beata-benedetta-bianchi-porro/index.md) | ![Beata Benedetta Bianchi Porro](docs/beatos/beata-benedetta-bianchi-porro/imagens/portrait.jpg) |
| [Beata Benedita Cambiagio](docs/beatos/beata-benedita-cambiagio/index.md) | ![Beata Benedita Cambiagio](docs/beatos/beata-benedita-cambiagio/imagens/portrait.jpg) |
| [Beata Benigna](docs/beatos/beata-benigna/index.md) | ![Beata Benigna](docs/beatos/beata-benigna/imagens/benigna.jpg) |
| [Beato Bernardo de Hoyos](docs/beatos/beato-bernardo-de-hoyos/index.md) | ![Beato Bernardo de Hoyos](docs/beatos/beato-bernardo-de-hoyos/imagens/cover.jpg) |
| [Beato Carlo Gnocchi](docs/beatos/beato-carlo-gnocchi/index.md) | ![Beato Carlo Gnocchi](docs/beatos/beato-carlo-gnocchi/imagens/portrait.jpg) |
| [Beato Carlo Steeb](docs/beatos/beato-carlo-steeb/index.md) | ![Beato Carlo Steeb](docs/beatos/beato-carlo-steeb/imagens/portrait.jpg) |
| [Beato Carlos da Áustria](docs/beatos/beato-carlos-da-austria/index.md) | ![Beato Carlos da Áustria](docs/beatos/beato-carlos-da-austria/imagens/portrait.jpg) |
| [Beato Carlos Manuel Rodríguez Santiago](docs/beatos/beato-carlos-manuel/index.md) | ![Beato Carlos Manuel Rodríguez Santiago](docs/beatos/beato-carlos-manuel/imagens/beato-carlos-manuel.jpg) |
| [Beata Catarina de Santo Agostinho](docs/beatos/beata-catarina-de-santo-agostinho/index.md) | ![Beata Catarina de Santo Agostinho](docs/beatos/beata-catarina-de-santo-agostinho/imagens/cover.jpg) |
| [Beata Catarina Troiani](docs/beatos/beata-catarina-troiani/index.md) | ![Beata Catarina Troiani](docs/beatos/beata-catarina-troiani/imagens/portrait.jpg) |
| [Beato Ceferino Giménez Malla](docs/beatos/beato-ceferino-gimenez-malla/index.md) | ![Beato Ceferino Giménez Malla](docs/beatos/beato-ceferino-gimenez-malla/imagens/portrait.jpg) |
| [Beata Chiara Luce Badano](docs/beatos/beata-chiara-luce-badano/index.md) | ![Beata Chiara Luce Badano](docs/beatos/beata-chiara-luce-badano/imagens/portrait.jpg) |
| [Beata Chiquitunga](docs/beatos/beata-chiquitunga/index.md) | ![Beata Chiquitunga](docs/beatos/beata-chiquitunga/imagens/portrait.jpg) |
| [Beato Cláudio Granzotto](docs/beatos/beato-claudio-granzotto/index.md) | ![Beato Cláudio Granzotto](docs/beatos/beato-claudio-granzotto/imagens/portrait.jpg) |
| [Beata Clélia Merloni](docs/beatos/beata-clelia-merloni/index.md) | ![Beata Clélia Merloni](docs/beatos/beata-clelia-merloni/imagens/portrait.jpg) |
| [Beato Clemente August von Galen](docs/beatos/beato-clemente-august-von-galen/index.md) | ![Beato Clemente August von Galen](docs/beatos/beato-clemente-august-von-galen/imagens/portrait.jpg) |
| [Beato Clemente Marchisio](docs/beatos/beato-clemente-marchisio/index.md) | ![Beato Clemente Marchisio](docs/beatos/beato-clemente-marchisio/imagens/portrait.jpg) |
| [Beato Columba Marmion](docs/beatos/beato-columba-marmion/index.md) | ![Beato Columba Marmion](docs/beatos/beato-columba-marmion/imagens/portrait.jpg) |
| [Beata Concepción Cabrera de Armida (Conchita)](docs/beatos/beata-maria-da-conceicao/index.md) | ![Beata Concepción Cabrera de Armida (Conchita)](docs/beatos/beata-maria-da-conceicao/imagens/retrato.svg) |
| [Beato Contardo Ferrini](docs/beatos/beato-contardo-ferrini/index.md) | ![Beato Contardo Ferrini](docs/beatos/beato-contardo-ferrini/imagens/portrait.jpg) |
| [Beato Crispino de Viterbo](docs/beatos/beato-crispino-de-viterbo/index.md) | ![Beato Crispino de Viterbo](docs/beatos/beato-crispino-de-viterbo/imagens/portrait.jpg) |
| [Beata Dina Bélanger](docs/beatos/beata-dina-belanger/index.md) | ![Beata Dina Bélanger](docs/beatos/beata-dina-belanger/imagens/portrait.jpg) |
| [Beato Diogo José de Cádis](docs/beatos/beato-diogo-jose-de-cadiz/index.md) | ![Beato Diogo José de Cádis](docs/beatos/beato-diogo-jose-de-cadiz/imagens/portrait.jpg) |
| [Beato Domingos da Mãe de Deus](docs/beatos/beato-domingos-da-mae-de-deus/index.md) | ![Beato Domingos da Mãe de Deus](docs/beatos/beato-domingos-da-mae-de-deus/imagens/portrait.jpg) |
| [Beata Edel Quinn](docs/beatos/beata-edel-quinn/index.md) | ![Beata Edel Quinn](docs/beatos/beata-edel-quinn/imagens/retrato.jpg) |
| [Beato Edmundo Rice](docs/beatos/beato-edmundo-rice/index.md) | ![Beato Edmundo Rice](docs/beatos/beato-edmundo-rice/imagens/retrato.jpg) |
| [Beato Eduardo Pironio](docs/beatos/beato-eduardo-pironio/index.md) | ![Beato Eduardo Pironio](docs/beatos/beato-eduardo-pironio/imagens/portrait.jpg) |
| [Beata Edviges Carboni](docs/beatos/beata-edviges-carboni/index.md) | ![Beata Edviges Carboni](docs/beatos/beata-edviges-carboni/imagens/portrait.jpg) |
| [Beata Elena Aiello](docs/beatos/beata-elena-aiello/index.md) | ![Beata Elena Aiello](docs/beatos/beata-elena-aiello/imagens/portrait.jpg) |
| [Beata Elisabetta Canori Mora](docs/beatos/beata-elisabetta-canori-mora/index.md) | ![Beata Elisabetta Canori Mora](docs/beatos/beata-elisabetta-canori-mora/imagens/portrait.jpg) |
| [Beato Estêvão Sándor](docs/beatos/beato-estevao-sandor/index.md) | ![Beato Estêvão Sándor](docs/beatos/beato-estevao-sandor/imagens/retrato.svg) |
| [Beata Eurosia Fabris](docs/beatos/beata-eurosia-fabris/index.md) | ![Beata Eurosia Fabris](docs/beatos/beata-eurosia-fabris/imagens/cover.jpg) |
| [Beata Eusébia Palomino Yenes](docs/beatos/beata-eusebia-palomino-yenes/index.md) | ![Beata Eusébia Palomino Yenes](docs/beatos/beata-eusebia-palomino-yenes/imagens/retrato.jpg) |
| [Beato Filipe Rinaldi](docs/beatos/beato-filipe-rinaldi/index.md) | ![Beato Filipe Rinaldi](docs/beatos/beato-filipe-rinaldi/imagens/portrait.jpg) |
| [Beato Fra Angelico (João de Fiesole)](docs/beatos/beato-fra-angelico/index.md) | ![Beato Fra Angelico (João de Fiesole)](docs/beatos/beato-fra-angelico/imagens/fra-angelico.jpg) |
| [Beato Francisco Gárate](docs/beatos/beato-francisco-garate/index.md) | ![Beato Francisco Gárate](docs/beatos/beato-francisco-garate/imagens/portrait.jpg) |
| [Beato Francisco Jordan](docs/beatos/beato-francisco-jordan/index.md) | ![Beato Francisco Jordan](docs/beatos/beato-francisco-jordan/imagens/portrait.jpg) |
| [Beato Francisco Palau](docs/beatos/beato-francisco-palau/index.md) | ![Beato Francisco Palau](docs/beatos/beato-francisco-palau/imagens/portrait.jpg) |
| [Beato Francisco Xavier Seelos](docs/beatos/beato-francisco-xavier-seelos/index.md) | ![Beato Francisco Xavier Seelos](docs/beatos/beato-francisco-xavier-seelos/imagens/cover.jpg) |
| [Beato Franz Jägerstätter](docs/beatos/beato-franz-jagerstatter/index.md) | ![Beato Franz Jägerstätter](docs/beatos/beato-franz-jagerstatter/imagens/retrato.svg) |
| [Beato Giuseppe Toniolo](docs/beatos/beato-giuseppe-toniolo/index.md) | ![Beato Giuseppe Toniolo](docs/beatos/beato-giuseppe-toniolo/imagens/portrait.jpg) |
| [Beato Gonçalo de Amarante](docs/beatos/beato-goncalo-de-amarante/index.md) | ![Beato Gonçalo de Amarante](docs/beatos/beato-goncalo-de-amarante/imagens/retrato.svg) |
| [Beata Guadalupe Ortiz de Landázuri](docs/beatos/beata-guadalupe-ortiz-de-landazuri/index.md) | ![Beata Guadalupe Ortiz de Landázuri](docs/beatos/beata-guadalupe-ortiz-de-landazuri/imagens/portrait.jpg) |
| [Beato Guido de Montpellier](docs/beatos/beato-guido-de-montpellier/index.md) | ![Beato Guido de Montpellier](docs/beatos/beato-guido-de-montpellier/imagens/portrait.png) |
| [Beato Guilherme José Chaminade](docs/beatos/beato-guilherme-jose-chaminade/index.md) | ![Beato Guilherme José Chaminade](docs/beatos/beato-guilherme-jose-chaminade/imagens/portrait.jpg) |
| [Beato Henrique Suso](docs/beatos/beato-henrique-suso/index.md) | ![Beato Henrique Suso](docs/beatos/beato-henrique-suso/imagens/portrait.jpg) |
| [Beato Ildefonso Schuster](docs/beatos/beato-ildefonso-schuster/index.md) | ![Beato Ildefonso Schuster](docs/beatos/beato-ildefonso-schuster/imagens/portrait.jpg) |
| [Beata Imelda Lambertini](docs/beatos/beata-imelda-lambertini/index.md) | ![Beata Imelda Lambertini](docs/beatos/beata-imelda-lambertini/imagens/portrait.jpg) |
| [Beato Inácio de Azevedo](docs/beatos/beato-inacio-de-azevedo/index.md) | ![Beato Inácio de Azevedo](docs/beatos/beato-inacio-de-azevedo/imagens/portrait.jpg) |
| [Beato Inácio Maloyan](docs/beatos/beato-inacio-maloyan/index.md) | ![Beato Inácio Maloyan](docs/beatos/beato-inacio-maloyan/imagens/retrato.svg) |
| [Beato Inocêncio V](docs/beatos/beato-inocencio-v/index.md) | ![Beato Inocêncio V](docs/beatos/beato-inocencio-v/imagens/portrait.jpg) |
| [Beato Inocêncio XI](docs/beatos/beato-inocencio-xi/index.md) | ![Beato Inocêncio XI](docs/beatos/beato-inocencio-xi/imagens/portrait.jpg) |
| [Beata Isabel Cristina](docs/beatos/beata-isabel-cristina/index.md) | ![Beata Isabel Cristina](docs/beatos/beata-isabel-cristina/imagens/isabel-cristina.jpg) |
| [Beato Isidoro Bakanja](docs/beatos/beato-isidoro-bakanja/index.md) | ![Beato Isidoro Bakanja](docs/beatos/beato-isidoro-bakanja/imagens/portrait.jpg) |
| [Beato Ivan Merz](docs/beatos/beato-ivan-merz/index.md) | ![Beato Ivan Merz](docs/beatos/beato-ivan-merz/imagens/cover.jpg) |
| [Beato Jacinto Vera](docs/beatos/beato-jacinto-vera/index.md) | ![Beato Jacinto Vera](docs/beatos/beato-jacinto-vera/imagens/portrait.jpg) |
| [Beato Jerzy Popiełuszko](docs/beatos/beato-jerzy-popieluszko/index.md) | ![Beato Jerzy Popiełuszko](docs/beatos/beato-jerzy-popieluszko/imagens/portrait.jpg) |
| [Beato Joan Roig i Diggle](docs/beatos/beato-joan-roig-i-diggle/index.md) | ![Beato Joan Roig i Diggle](docs/beatos/beato-joan-roig-i-diggle/imagens/portrait.jpg) |
| [Beata Joana de Portugal](docs/beatos/beata-joana-de-portugal/index.md) | ![Beata Joana de Portugal](docs/beatos/beata-joana-de-portugal/imagens/portrait.jpg) |
| [Beato João Baptista Machado](docs/beatos/beato-joao-baptista-machado/index.md) | ![Beato João Baptista Machado](docs/beatos/beato-joao-baptista-machado/imagens/retrato.jpg) |
| [Beato João Duns Scotus](docs/beatos/beato-joao-duns-scotus/index.md) | ![Beato João Duns Scotus](docs/beatos/beato-joao-duns-scotus/imagens/portrait.jpg) |
| [Beato João Paulo I](docs/beatos/beato-joao-paulo-i/index.md) | ![Beato João Paulo I](docs/beatos/beato-joao-paulo-i/imagens/retrato.svg) |
| [Beato João Schiavo](docs/beatos/beato-joao-schiavo/index.md) | ![Beato João Schiavo](docs/beatos/beato-joao-schiavo/imagens/portrait.jpg) |
| [Beato Jordão da Saxônia](docs/beatos/beato-jordao-da-saxonia/index.md) | ![Beato Jordão da Saxônia](docs/beatos/beato-jordao-da-saxonia/imagens/portrait.png) |
| [Beato José Gregório Hernández](docs/beatos/beato-jose-gregorio-hernandez/index.md) | ![Beato José Gregório Hernández](docs/beatos/beato-jose-gregorio-hernandez/imagens/portrait.jpg) |
| [Beato Justo Takayama Ukon](docs/beatos/beato-justo-takayama-ukon/index.md) | ![Beato Justo Takayama Ukon](docs/beatos/beato-justo-takayama-ukon/imagens/retrato.svg) |
| [Beato Karl Leisner](docs/beatos/beato-karl-leisner/index.md) | ![Beato Karl Leisner](docs/beatos/beato-karl-leisner/imagens/portrait.jpg) |
| [Beata Karolina Kózka](docs/beatos/beata-karolina-kozka/index.md) | ![Beata Karolina Kózka](docs/beatos/beata-karolina-kozka/imagens/retrato.jpg) |
| [Beata Laura Vicuña](docs/beatos/beata-laura-vicuna/index.md) | ![Beata Laura Vicuña](docs/beatos/beata-laura-vicuna/imagens/laura-vicuna.jpg) |
| [Beata Lindalva Justo de Oliveira](docs/beatos/beata-lindalva-justo-de-oliveira/index.md) | ![Beata Lindalva Justo de Oliveira](docs/beatos/beata-lindalva-justo-de-oliveira/imagens/retrato.svg) |
| [Beato Lojze Grozde](docs/beatos/beato-lojze-grozde/index.md) | ![Beato Lojze Grozde](docs/beatos/beato-lojze-grozde/imagens/cover.jpg) |
| [Beato Luca Belludi](docs/beatos/beato-luca-belludi/index.md) | ![Beato Luca Belludi](docs/beatos/beato-luca-belludi/imagens/portrait.jpg) |
| [Beato Luca Passi](docs/beatos/beato-luca-passi/index.md) | ![Beato Luca Passi](docs/beatos/beato-luca-passi/imagens/portrait.jpg) |
| [Beato Luigi Beltrame Quattrocchi](docs/beatos/beato-luigi-beltrame-quattrocchi/index.md) | ![Beato Luigi Beltrame Quattrocchi](docs/beatos/beato-luigi-beltrame-quattrocchi/imagens/portrait.jpg) |
| [Beato Luigi Maria Monti](docs/beatos/beato-luigi-maria-monti/index.md) | ![Beato Luigi Maria Monti](docs/beatos/beato-luigi-maria-monti/imagens/portrait.jpg) |
| [Beato Luigi Monza](docs/beatos/beato-luigi-monza/index.md) | ![Beato Luigi Monza](docs/beatos/beato-luigi-monza/imagens/cover.jpg) |
| [Beato Luigi Novarese](docs/beatos/beato-luigi-novarese/index.md) | ![Beato Luigi Novarese](docs/beatos/beato-luigi-novarese/imagens/portrait.jpg) |
| [Beato Luigi Tezza](docs/beatos/beato-luigi-tezza/index.md) | ![Beato Luigi Tezza](docs/beatos/beato-luigi-tezza/imagens/cover.jpg) |
| [Beato Luis Variara](docs/beatos/beato-luis-variara/index.md) | ![Beato Luis Variara](docs/beatos/beato-luis-variara/imagens/portrait.jpg) |
| [Beata Madre Esperança de Jesus](docs/beatos/beata-madre-esperanca-de-jesus/index.md) | ![Beata Madre Esperança de Jesus](docs/beatos/beata-madre-esperanca-de-jesus/imagens/portrait.jpg) |
| [Beata Mafalda de Portugal](docs/beatos/beata-mafalda-de-portugal/index.md) | ![Beata Mafalda de Portugal](docs/beatos/beata-mafalda-de-portugal/imagens/portrait.jpg) |
| [Beato Manuel Gómez González](docs/beatos/beato-manuel-gomez-gonzalez/index.md) | ![Beato Manuel Gómez González](docs/beatos/beato-manuel-gomez-gonzalez/imagens/portrait.jpg) |
| [Beato Manuel Lozano Garrido](docs/beatos/beato-manuel-lozano-garrido/index.md) | ![Beato Manuel Lozano Garrido](docs/beatos/beato-manuel-lozano-garrido/imagens/retrato.svg) |
| [Beato Marcel Callo](docs/beatos/beato-marcel-callo/index.md) | ![Beato Marcel Callo](docs/beatos/beato-marcel-callo/imagens/retrato.svg) |
| [Beato Marcos de Aviano](docs/beatos/beato-marcos-de-aviano/index.md) | ![Beato Marcos de Aviano](docs/beatos/beato-marcos-de-aviano/imagens/portrait.jpg) |
| [Beata Maria Assunta Pallotta](docs/beatos/beata-maria-assunta-pallotta/index.md) | ![Beata Maria Assunta Pallotta](docs/beatos/beata-maria-assunta-pallotta/imagens/portrait.jpg) |
| [Beata Maria Bolognesi](docs/beatos/beata-maria-bolognesi/index.md) | ![Beata Maria Bolognesi](docs/beatos/beata-maria-bolognesi/imagens/portrait.jpg) |
| [Beata Maria Cândida da Eucaristia](docs/beatos/beata-maria-candida-da-eucaristia/index.md) | ![Beata Maria Cândida da Eucaristia](docs/beatos/beata-maria-candida-da-eucaristia/imagens/portrait.jpg) |
| [Beata Maria Celeste Crostarosa](docs/beatos/beata-maria-celeste-crostarosa/index.md) | ![Beata Maria Celeste Crostarosa](docs/beatos/beata-maria-celeste-crostarosa/imagens/portrait.jpg) |
| [Beata Maria Clara do Menino Jesus](docs/beatos/beata-maria-clara-do-menino-jesus/index.md) | ![Beata Maria Clara do Menino Jesus](docs/beatos/beata-maria-clara-do-menino-jesus/imagens/cover.jpg) |
| [Beata Maria Cristina de Saboia](docs/beatos/beata-maria-cristina-de-saboia/index.md) | ![Beata Maria Cristina de Saboia](docs/beatos/beata-maria-cristina-de-saboia/imagens/portrait.jpg) |
| [Beata Maria da Paixão](docs/beatos/beata-maria-da-paixao/index.md) | ![Beata Maria da Paixão](docs/beatos/beata-maria-da-paixao/imagens/portrait.jpg) |
| [Beata Maria de San José Alvarado](docs/beatos/beata-maria-de-san-jose-alvarado/index.md) | ![Beata Maria de San José Alvarado](docs/beatos/beata-maria-de-san-jose-alvarado/imagens/portrait.jpg) |
| [Beata Maria do Divino Coração](docs/beatos/beata-maria-do-divino-coracao/index.md) | ![Beata Maria do Divino Coração](docs/beatos/beata-maria-do-divino-coracao/imagens/retrato.svg) |
| [Beata Maria Gabriela da Unidade](docs/beatos/beata-maria-gabriela-da-unidade/index.md) | ![Beata Maria Gabriela da Unidade](docs/beatos/beata-maria-gabriela-da-unidade/imagens/retrato.svg) |
| [Beata Maria Laura Mainetti](docs/beatos/beata-maria-laura-mainetti/index.md) | ![Beata Maria Laura Mainetti](docs/beatos/beata-maria-laura-mainetti/imagens/portrait.jpg) |
| [Beata Maria Pierina De Micheli](docs/beatos/beata-maria-pierina-de-micheli/index.md) | ![Beata Maria Pierina De Micheli](docs/beatos/beata-maria-pierina-de-micheli/imagens/portrait.jpg) |
| [Beata Maria Repetto](docs/beatos/beata-maria-repetto/index.md) | ![Beata Maria Repetto](docs/beatos/beata-maria-repetto/imagens/portrait.jpg) |
| [Beata Maria Romero Meneses](docs/beatos/beata-maria-romero-meneses/index.md) | ![Beata Maria Romero Meneses](docs/beatos/beata-maria-romero-meneses/imagens/maria-romero.jpg) |
| [Beata Maria Teresa de São José](docs/beatos/beata-maria-teresa-de-sao-jose/index.md) | ![Beata Maria Teresa de São José](docs/beatos/beata-maria-teresa-de-sao-jose/imagens/portrait.jpg) |
| [Beata Maria Teresa Ledóchowska](docs/beatos/beata-maria-teresa-ledochowska/index.md) | ![Beata Maria Teresa Ledóchowska](docs/beatos/beata-maria-teresa-ledochowska/imagens/portrait.jpg) |
| [Beata Mariana de Jesus](docs/beatos/beata-mariana-de-jesus/index.md) | ![Beata Mariana de Jesus](docs/beatos/beata-mariana-de-jesus/imagens/retrato.svg) |
| [Beato Mariano de la Mata](docs/beatos/beato-mariano-de-la-mata/index.md) | ![Beato Mariano de la Mata](docs/beatos/beato-mariano-de-la-mata/imagens/retrato.svg) |
| [Beata Marta Le Bouteiller](docs/beatos/beata-marta-le-bouteiller/index.md) | ![Beata Marta Le Bouteiller](docs/beatos/beata-marta-le-bouteiller/imagens/portrait.jpg) |
| [Beato Maurício Tornay](docs/beatos/beato-mauricio-tornay/index.md) | ![Beato Maurício Tornay](docs/beatos/beato-mauricio-tornay/imagens/retrato.svg) |
| [Beato Michael McGivney](docs/beatos/beato-michael-mcgivney/index.md) | ![Beato Michael McGivney](docs/beatos/beato-michael-mcgivney/imagens/portrait.jpg) |
| [Beato Miguel Pro](docs/beatos/beato-miguel-pro/index.md) | ![Beato Miguel Pro](docs/beatos/beato-miguel-pro/imagens/retrato.svg) |
| [Beato Miguel Rua](docs/beatos/beato-miguel-rua/index.md) | ![Beato Miguel Rua](docs/beatos/beato-miguel-rua/imagens/portrait.jpg) |
| [Beato Miguel Sopoćko](docs/beatos/beato-miguel-sopocko/index.md) | ![Beato Miguel Sopoćko](docs/beatos/beato-miguel-sopocko/imagens/portrait.jpg) |
| [Beato Miroslav Bulešić](docs/beatos/beato-miroslav-bulesic/index.md) | ![Beato Miroslav Bulešić](docs/beatos/beato-miroslav-bulesic/imagens/portrait.jpg) |
| [Beato Moisés Lira](docs/beatos/beato-moises-lira/index.md) | ![Beato Moisés Lira](docs/beatos/beato-moises-lira/imagens/beato-moises-lira.jpg) |
| [Beata Nhá Chica](docs/beatos/nha-chica/index.md) | ![Beata Nhá Chica](docs/beatos/nha-chica/imagens/nha-chica.jpg) |
| [Venerável Nicola D'Onofrio](docs/beatos/beato-nicola-donofrio/index.md) | ![Venerável Nicola D'Onofrio](docs/beatos/beato-nicola-donofrio/imagens/portrait.jpg) |
| [Beato Nicolau Steno](docs/beatos/beato-nicolau-steno/index.md) | ![Beato Nicolau Steno](docs/beatos/beato-nicolau-steno/imagens/portrait.jpg) |
| [Beato Odoardo Focherini](docs/beatos/beato-odoardo-focherini/index.md) | ![Beato Odoardo Focherini](docs/beatos/beato-odoardo-focherini/imagens/portrait.jpg) |
| [Padre Donizetti Tavares de Lima](docs/beatos/padre-donizetti/index.md) | ![Padre Donizetti Tavares de Lima](docs/beatos/padre-donizetti/imagens/padre_restaurada_colorida.jpg) |
| [Beato Padre Eustáquio](docs/beatos/beato-padre-eustaquio/index.md) | ![Beato Padre Eustáquio](docs/beatos/beato-padre-eustaquio/imagens/retrato.svg) |
| [Beato Padre Victor](docs/beatos/padre-victor/index.md) | ![Beato Padre Victor](docs/beatos/padre-victor/imagens/padre-victor.jpg) |
| [Beata Paulina Jaricot](docs/beatos/beata-paulina-jaricot/index.md) | ![Beata Paulina Jaricot](docs/beatos/beata-paulina-jaricot/imagens/portrait.jpg) |
| [Beato Pedro Donders](docs/beatos/beato-pedro-donders/index.md) | ![Beato Pedro Donders](docs/beatos/beato-pedro-donders/imagens/retrato.jpg) |
| [Beato Pedro Vigne](docs/beatos/beato-pedro-vigne/index.md) | ![Beato Pedro Vigne](docs/beatos/beato-pedro-vigne/imagens/portrait.jpg) |
| [Beata Pierina Morosini](docs/beatos/beata-pierina-morosini/index.md) | ![Beata Pierina Morosini](docs/beatos/beata-pierina-morosini/imagens/retrato.jpg) |
| [Beata Pina Suriano](docs/beatos/beata-pina-suriano/index.md) | ![Beata Pina Suriano](docs/beatos/beata-pina-suriano/imagens/portrait.jpg) |
| [Beato Pino Puglisi](docs/beatos/beato-pino-puglisi/index.md) | ![Beato Pino Puglisi](docs/beatos/beato-pino-puglisi/imagens/pino-puglisi.jpg) |
| [Beato Pio IX](docs/beatos/beato-pio-ix/index.md) | ![Beato Pio IX](docs/beatos/beato-pio-ix/imagens/portrait.jpg) |
| [Beato Raimundo de Cápua](docs/beatos/beato-raimundo-de-capua/index.md) | ![Beato Raimundo de Cápua](docs/beatos/beato-raimundo-de-capua/imagens/retrato.jpg) |
| [Beato Richard Henkes](docs/beatos/beato-richard-henkes/index.md) | ![Beato Richard Henkes](docs/beatos/beato-richard-henkes/imagens/cover.jpg) |
| [Beata Rita Amada de Jesus](docs/beatos/beata-rita-amada-de-jesus/index.md) | ![Beata Rita Amada de Jesus](docs/beatos/beata-rita-amada-de-jesus/imagens/portrait.jpg) |
| [Beato Rolando Rivi](docs/beatos/beato-rolando-rivi/index.md) | ![Beato Rolando Rivi](docs/beatos/beato-rolando-rivi/imagens/retrato.svg) |
| [Beata Rosália Rendu](docs/beatos/beata-rosalia-rendu/index.md) | ![Beata Rosália Rendu](docs/beatos/beata-rosalia-rendu/imagens/portrait.jpg) |
| [Beato Rosário Livatino](docs/beatos/beato-rosario-livatino/index.md) | ![Beato Rosário Livatino](docs/beatos/beato-rosario-livatino/imagens/cover.jpg) |
| [Beato Rupert Mayer](docs/beatos/beato-rupert-mayer/index.md) | ![Beato Rupert Mayer](docs/beatos/beato-rupert-mayer/imagens/portrait.jpg) |
| [Beato Rutilio Grande](docs/beatos/beato-rutilio-grande/index.md) | ![Beato Rutilio Grande](docs/beatos/beato-rutilio-grande/imagens/cover.jpg) |
| [Beata Sancha de Portugal](docs/beatos/beata-sancha-de-portugal/index.md) | ![Beata Sancha de Portugal](docs/beatos/beata-sancha-de-portugal/imagens/retrato.jpg) |
| [Beata Sandra Sabattini](docs/beatos/beata-sandra-sabattini/index.md) | ![Beata Sandra Sabattini](docs/beatos/beata-sandra-sabattini/imagens/retrato.svg) |
| [Beata Savina Petrilli](docs/beatos/beata-savina-petrilli/index.md) | ![Beata Savina Petrilli](docs/beatos/beata-savina-petrilli/imagens/portrait.jpg) |
| [Beato Solanus Casey](docs/beatos/beato-solanus-casey/index.md) | ![Beato Solanus Casey](docs/beatos/beato-solanus-casey/imagens/portrait.jpg) |
| [Beato Stanley Rother](docs/beatos/beato-stanley-rother/index.md) | ![Beato Stanley Rother](docs/beatos/beato-stanley-rother/imagens/portrait.jpg) |
| [Beato Stefan Wyszyński](docs/beatos/beato-stefan-wyszynski/index.md) | ![Beato Stefan Wyszyński](docs/beatos/beato-stefan-wyszynski/imagens/portrait.jpg) |
| [Beato Teresio Olivelli](docs/beatos/beato-teresio-olivelli/index.md) | ![Beato Teresio Olivelli](docs/beatos/beato-teresio-olivelli/imagens/retrato.jpg) |
| [Beato Tiago Alberione](docs/beatos/beato-tiago-alberione/index.md) | ![Beato Tiago Alberione](docs/beatos/beato-tiago-alberione/imagens/retrato.svg) |
| [Beato Tiago de Voragine](docs/beatos/beato-tiago-de-voragine/index.md) | ![Beato Tiago de Voragine](docs/beatos/beato-tiago-de-voragine/imagens/portrait.jpg) |
| [Beato Tito Zeman](docs/beatos/beato-tito-zeman/index.md) | ![Beato Tito Zeman](docs/beatos/beato-tito-zeman/imagens/portrait.jpg) |
| [Beato Urbano V](docs/beatos/beato-urbano-v/index.md) | ![Beato Urbano V](docs/beatos/beato-urbano-v/imagens/portrait.jpg) |
| [Beato Zeferino Namuncurá](docs/beatos/beato-zeferino-namuncura/index.md) | ![Beato Zeferino Namuncurá](docs/beatos/beato-zeferino-namuncura/imagens/retrato.svg) |
| [Santo Afonso Maria de Ligório](docs/santos/santo-afonso-maria-de-ligorio/index.md) | ![Santo Afonso Maria de Ligório](docs/santos/santo-afonso-maria-de-ligorio/imagens/portrait.jpg) |
| [Santa Ágata](docs/santos/santa-agata/index.md) | ![Santa Ágata](docs/santos/santa-agata/imagens/portrait.jpg) |
| [Santo Agostinho](docs/santos/santo-agostinho/index.md) | ![Santo Agostinho](docs/santos/santo-agostinho/imagens/agostinho.jpg) |
| [Santa Águeda](docs/santos/santa-agueda/index.md) | ![Santa Águeda](docs/santos/santa-agueda/imagens/retrato.jpg) |
| [Santo Alberto Hurtado](docs/santos/santo-alberto-hurtado/index.md) | ![Santo Alberto Hurtado](docs/santos/santo-alberto-hurtado/imagens/portrait.jpg) |
| [Santo Alberto Magno](docs/santos/santo-alberto-magno/index.md) | ![Santo Alberto Magno](docs/santos/santo-alberto-magno/imagens/portrait.jpg) |
| [Santo Amaro](docs/santos/santo-amaro/index.md) | ![Santo Amaro](docs/santos/santo-amaro/imagens/retrato.jpg) |
| [Santo Ambrósio](docs/santos/santo-ambrosio/index.md) | ![Santo Ambrósio](docs/santos/santo-ambrosio/imagens/portrait.jpg) |
| [Santo André](docs/santos/santo-andre/index.md) | ![Santo André](docs/santos/santo-andre/imagens/retrato.svg) |
| [Santo André Kim Taegõn](docs/santos/santo-andre-kim-taegon/index.md) | ![Santo André Kim Taegõn](docs/santos/santo-andre-kim-taegon/imagens/portrait.jpg) |
| [Santo Anselmo de Cantuária](docs/santos/santo-anselmo/index.md) | ![Santo Anselmo de Cantuária](docs/santos/santo-anselmo/imagens/portrait.jpg) |
| [Santo Antão do Deserto](docs/santos/santo-antao-do-deserto/index.md) | ![Santo Antão do Deserto](docs/santos/santo-antao-do-deserto/imagens/portrait.jpg) |
| [Santo Antônio de Pádua](docs/santos/santo-antonio/index.md) | ![Santo Antônio de Pádua](docs/santos/santo-antonio/imagens/santo-antonio.jpg) |
| [Santo Antônio de Sant'Ana Galvão](docs/santos/santo-antonio-de-santana-galvao/index.md) | ![Santo Antônio de Sant'Ana Galvão](docs/santos/santo-antonio-de-santana-galvao/imagens/portrait.jpg) |
| [Santo Antônio Maria Claret](docs/santos/santo-antonio-maria-claret/index.md) | ![Santo Antônio Maria Claret](docs/santos/santo-antonio-maria-claret/imagens/portrait.jpg) |
| [Santa Apolônia](docs/santos/santa-apolonia/index.md) | ![Santa Apolônia](docs/santos/santa-apolonia/imagens/cover.jpg) |
| [São Artêmides Zatti](docs/santos/sao-artemides-zatti/index.md) | ![São Artêmides Zatti](docs/santos/sao-artemides-zatti/imagens/retrato.svg) |
| [Santo Atanásio](docs/santos/santo-atanasio/index.md) | ![Santo Atanásio](docs/santos/santo-atanasio/imagens/cover.jpg) |
| [Santa Bárbara](docs/santos/santa-barbara/index.md) | ![Santa Bárbara](docs/santos/santa-barbara/imagens/portrait.jpg) |
| [São Bartolo Longo](docs/santos/sao-bartolo-longo/index.md) | ![São Bartolo Longo](docs/santos/sao-bartolo-longo/imagens/retrato.svg) |
| [São Bartolomeu](docs/santos/sao-bartolomeu/index.md) | ![São Bartolomeu](docs/santos/sao-bartolomeu/imagens/retrato.svg) |
| [São Basílio Magno](docs/santos/sao-basilio-magno/index.md) | ![São Basílio Magno](docs/santos/sao-basilio-magno/imagens/portrait.jpg) |
| [Santa Beatriz da Silva](docs/santos/santa-beatriz-da-silva/index.md) | ![Santa Beatriz da Silva](docs/santos/santa-beatriz-da-silva/imagens/retrato.svg) |
| [São Beda](docs/santos/sao-beda/index.md) | ![São Beda](docs/santos/sao-beda/imagens/retrato.jpg) |
| [São Benedito](docs/santos/sao-benedito/index.md) | ![São Benedito](docs/santos/sao-benedito/imagens/portrait.jpg) |
| [São Bento](docs/santos/sao-bento/index.md) | ![São Bento](docs/santos/sao-bento/imagens/retrato.svg) |
| [São Bento Menni](docs/santos/sao-bento-menni/index.md) | ![São Bento Menni](docs/santos/sao-bento-menni/imagens/retrato.jpg) |
| [Santa Bernadete Soubirous](docs/santos/santa-bernadete-soubirous/index.md) | ![Santa Bernadete Soubirous](docs/santos/santa-bernadete-soubirous/imagens/portrait.jpg) |
| [São Bernardo de Claraval](docs/santos/sao-bernardo/index.md) | ![São Bernardo de Claraval](docs/santos/sao-bernardo/imagens/portrait.jpg) |
| [São Boaventura](docs/santos/sao-boaventura/index.md) | ![São Boaventura](docs/santos/sao-boaventura/imagens/portrait.jpg) |
| [São Brás](docs/santos/sao-bras/index.md) | ![São Brás](docs/santos/sao-bras/imagens/portrait.jpg) |
| [Santa Brígida da Suécia](docs/santos/santa-brigida-da-suecia/index.md) | ![Santa Brígida da Suécia](docs/santos/santa-brigida-da-suecia/imagens/portrait.jpg) |
| [São Bruno](docs/santos/sao-bruno/index.md) | ![São Bruno](docs/santos/sao-bruno/imagens/portrait.jpg) |
| [São Camilo de Lellis](docs/santos/sao-camilo-de-lellis/index.md) | ![São Camilo de Lellis](docs/santos/sao-camilo-de-lellis/imagens/sao-camilo.jpg) |
| [São Carlo Acutis](docs/santos/carlo-acutis/index.md) | ![São Carlo Acutis](docs/santos/carlo-acutis/imagens/carlo-acutis.jpg) |
| [São Carlos Borromeu](docs/santos/sao-carlos-borromeu/index.md) | ![São Carlos Borromeu](docs/santos/sao-carlos-borromeu/imagens/portrait.jpg) |
| [São Carlos Lwanga](docs/santos/sao-carlos-lwanga/index.md) | ![São Carlos Lwanga](docs/santos/sao-carlos-lwanga/imagens/cover.jpg) |
| [Santa Catarina de Alexandria](docs/santos/santa-catarina-de-alexandria/index.md) | ![Santa Catarina de Alexandria](docs/santos/santa-catarina-de-alexandria/imagens/retrato.jpg) |
| [Santa Catarina de Sena](docs/santos/santa-catarina-de-sena/index.md) | ![Santa Catarina de Sena](docs/santos/santa-catarina-de-sena/imagens/retrato.svg) |
| [Santa Catarina Labouré](docs/santos/santa-catarina-laboure/index.md) | ![Santa Catarina Labouré](docs/santos/santa-catarina-laboure/imagens/portrait.jpg) |
| [Santa Cecília](docs/santos/santa-cecilia/index.md) | ![Santa Cecília](docs/santos/santa-cecilia/imagens/portrait.jpg) |
| [São Charbel Makhlouf](docs/santos/sao-charbel/index.md) | ![São Charbel Makhlouf](docs/santos/sao-charbel/imagens/charbel.jpg) |
| [São Charles de Foucauld](docs/santos/sao-charles-de-foucauld/index.md) | ![São Charles de Foucauld](docs/santos/sao-charles-de-foucauld/imagens/portrait.jpg) |
| [Santa Clara de Assis](docs/santos/santa-clara-de-assis/index.md) | ![Santa Clara de Assis](docs/santos/santa-clara-de-assis/imagens/portrait.jpg) |
| [São Columbano](docs/santos/sao-columbano/index.md) | ![São Columbano](docs/santos/sao-columbano/imagens/portrait.jpg) |
| [São Cristóvão](docs/santos/sao-cristovao/index.md) | ![São Cristóvão](docs/santos/sao-cristovao/imagens/portrait.jpg) |
| [São Damião de Molokai](docs/santos/sao-damiao-de-molokai/index.md) | ![São Damião de Molokai](docs/santos/sao-damiao-de-molokai/imagens/portrait.jpg) |
| [São Dimas](docs/santos/sao-dimas/index.md) | ![São Dimas](docs/santos/sao-dimas/imagens/portrait.jpg) |
| [São Domingos de Gusmão](docs/santos/sao-domingos-de-gusmao/index.md) | ![São Domingos de Gusmão](docs/santos/sao-domingos-de-gusmao/imagens/portrait.jpg) |
| [São Domingos Sávio](docs/santos/sao-domingos-savio/index.md) | ![São Domingos Sávio](docs/santos/sao-domingos-savio/imagens/portrait.jpg) |
| [Santa Dulce dos Pobres](docs/santos/santa-dulce-dos-pobres/index.md) | ![Santa Dulce dos Pobres](docs/santos/santa-dulce-dos-pobres/imagens/retrato.svg) |
| [Santa Edwiges](docs/santos/santa-edwiges/index.md) | ![Santa Edwiges](docs/santos/santa-edwiges/imagens/portrait.jpg) |
| [Beata Elena Guerra](docs/santos/santa-elena-guerra/index.md) | ![Beata Elena Guerra](docs/santos/santa-elena-guerra/imagens/retrato.svg) |
| [Santa Escolástica](docs/santos/santa-escolastica/index.md) | ![Santa Escolástica](docs/santos/santa-escolastica/imagens/retrato.jpg) |
| [São Estevão](docs/santos/sao-estevao/index.md) | ![São Estevão](docs/santos/sao-estevao/imagens/retrato.svg) |
| [Santo Expedito](docs/santos/santo-expedito/index.md) | ![Santo Expedito](docs/santos/santo-expedito/imagens/portrait.png) |
| [Santa Faustina Kowalska](docs/santos/santa-faustina-kowalska/index.md) | ![Santa Faustina Kowalska](docs/santos/santa-faustina-kowalska/imagens/santa-faustina.jpg) |
| [São Filipe](docs/santos/sao-filipe/index.md) | ![São Filipe](docs/santos/sao-filipe/imagens/retrato.svg) |
| [São Filipe Neri](docs/santos/sao-filipe-neri/index.md) | ![São Filipe Neri](docs/santos/sao-filipe-neri/imagens/sao-filipe-neri.jpg) |
| [Santa Filomena](docs/santos/santa-filomena/index.md) | ![Santa Filomena](docs/santos/santa-filomena/imagens/portrait.jpg) |
| [São Francisco de Assis](docs/santos/sao-francisco-de-assis/index.md) | ![São Francisco de Assis](docs/santos/sao-francisco-de-assis/imagens/sao-francisco.jpg) |
| [São Francisco de Sales](docs/santos/sao-francisco-de-sales/index.md) | ![São Francisco de Sales](docs/santos/sao-francisco-de-sales/imagens/cover.jpg) |
| [São Francisco Marto](docs/santos/sao-francisco-marto/index.md) | ![São Francisco Marto](docs/santos/sao-francisco-marto/imagens/cover.jpg) |
| [São Francisco Xavier](docs/santos/sao-francisco-xavier/index.md) | ![São Francisco Xavier](docs/santos/sao-francisco-xavier/imagens/sao-francisco-xavier.jpg) |
| [São Gabriel de Nossa Senhora das Dores](docs/santos/sao-gabriel-de-nossa-senhora-das-dores/index.md) | ![São Gabriel de Nossa Senhora das Dores](docs/santos/sao-gabriel-de-nossa-senhora-das-dores/imagens/portrait.jpg) |
| [São Gaspar del Búfalo](docs/santos/sao-gaspar-del-bufalo/index.md) | ![São Gaspar del Búfalo](docs/santos/sao-gaspar-del-bufalo/imagens/portrait.jpg) |
| [Santa Gemma Galgani](docs/santos/santa-gemma-galgani/index.md) | ![Santa Gemma Galgani](docs/santos/santa-gemma-galgani/imagens/portrait.jpg) |
| [Santa Genoveva](docs/santos/santa-genoveva/index.md) | ![Santa Genoveva](docs/santos/santa-genoveva/imagens/portrait.jpg) |
| [São Geraldo Majella](docs/santos/sao-geraldo-majella/index.md) | ![São Geraldo Majella](docs/santos/sao-geraldo-majella/imagens/sao-geraldo.png) |
| [Santa Gianna Beretta Molla](docs/santos/santa-gianna-beretta-molla/index.md) | ![Santa Gianna Beretta Molla](docs/santos/santa-gianna-beretta-molla/imagens/portrait.jpg) |
| [São Gregório Magno](docs/santos/sao-gregorio-magno/index.md) | ![São Gregório Magno](docs/santos/sao-gregorio-magno/imagens/cover.jpg) |
| [Santa Helena](docs/santos/santa-helena/index.md) | ![Santa Helena](docs/santos/santa-helena/imagens/portrait.jpg) |
| [Santa Hildegarda de Bingen](docs/santos/santa-hildegarda-de-bingen/index.md) | ![Santa Hildegarda de Bingen](docs/santos/santa-hildegarda-de-bingen/imagens/portrait.jpg) |
| [Santo Inácio de Antioquia](docs/santos/santo-inacio-de-antioquia/index.md) | ![Santo Inácio de Antioquia](docs/santos/santo-inacio-de-antioquia/imagens/portrait.jpg) |
| [Santo Inácio de Loyola](docs/santos/santo-inacio-de-loyola/index.md) | ![Santo Inácio de Loyola](docs/santos/santo-inacio-de-loyola/imagens/cover.jpg) |
| [Santa Inês](docs/santos/santa-ines/index.md) | ![Santa Inês](docs/santos/santa-ines/imagens/retrato.svg) |
| [Santo Ireneu de Lyon](docs/santos/santo-ireneu-de-lyon/index.md) | ![Santo Ireneu de Lyon](docs/santos/santo-ireneu-de-lyon/imagens/portrait.jpg) |
| [Santa Isabel da Hungria](docs/santos/santa-isabel-da-hungria/index.md) | ![Santa Isabel da Hungria](docs/santos/santa-isabel-da-hungria/imagens/portrait.jpg) |
| [Santo Isidoro de Sevilha](docs/santos/santo-isidoro-de-sevilha/index.md) | ![Santo Isidoro de Sevilha](docs/santos/santo-isidoro-de-sevilha/imagens/portrait.jpg) |
| [Santo Ivo de Kermartin](docs/santos/santo-ivo/index.md) | ![Santo Ivo de Kermartin](docs/santos/santo-ivo/imagens/cover.jpg) |
| [Santa Jacinta Marto](docs/santos/santa-jacinta-marto/index.md) | ![Santa Jacinta Marto](docs/santos/santa-jacinta-marto/imagens/cover.jpg) |
| [São Jerônimo](docs/santos/sao-jeronimo/index.md) | ![São Jerônimo](docs/santos/sao-jeronimo/imagens/cover.jpg) |
| [Santa Joana d'Arc](docs/santos/santa-joana-d-arc/index.md) | ![Santa Joana d'Arc](docs/santos/santa-joana-d-arc/imagens/portrait.jpg) |
| [Santa Joana de Chantal](docs/santos/santa-joana-de-chantal/index.md) | ![Santa Joana de Chantal](docs/santos/santa-joana-de-chantal/imagens/portrait.jpg) |
| [São João Batista](docs/santos/sao-joao-batista/index.md) | ![São João Batista](docs/santos/sao-joao-batista/imagens/portrait.jpg) |
| [São João Batista de La Salle](docs/santos/sao-joao-batista-de-la-salle/index.md) | ![São João Batista de La Salle](docs/santos/sao-joao-batista-de-la-salle/imagens/portrait.jpg) |
| [São João Bosco](docs/santos/sao-joao-bosco/index.md) | ![São João Bosco](docs/santos/sao-joao-bosco/imagens/dom-bosco.jpg) |
| [São João Crisóstomo](docs/santos/sao-joao-crisostomo/index.md) | ![São João Crisóstomo](docs/santos/sao-joao-crisostomo/imagens/portrait.jpg) |
| [São João da Cruz](docs/santos/sao-joao-da-cruz/index.md) | ![São João da Cruz](docs/santos/sao-joao-da-cruz/imagens/cover.jpg) |
| [São João Damasceno](docs/santos/sao-joao-damasceno/index.md) | ![São João Damasceno](docs/santos/sao-joao-damasceno/imagens/portrait.jpg) |
| [São João de Ávila](docs/santos/sao-joao-de-avila/index.md) | ![São João de Ávila](docs/santos/sao-joao-de-avila/imagens/portrait.jpg) |
| [São João de Brito](docs/santos/sao-joao-de-brito/index.md) | ![São João de Brito](docs/santos/sao-joao-de-brito/imagens/portrait.jpg) |
| [São João de Capistrano](docs/santos/sao-joao-de-capistrano/index.md) | ![São João de Capistrano](docs/santos/sao-joao-de-capistrano/imagens/portrait.jpg) |
| [São João de Deus](docs/santos/sao-joao-de-deus/index.md) | ![São João de Deus](docs/santos/sao-joao-de-deus/imagens/portrait.jpg) |
| [São João Diego Cuauhtlatoatzin](docs/santos/sao-joao-diego/index.md) | ![São João Diego Cuauhtlatoatzin](docs/santos/sao-joao-diego/imagens/portrait.jpg) |
| [São João Eudes](docs/santos/sao-joao-eudes/index.md) | ![São João Eudes](docs/santos/sao-joao-eudes/imagens/portrait.jpg) |
| [São João Evangelista](docs/santos/sao-joao-evangelista/index.md) | ![São João Evangelista](docs/santos/sao-joao-evangelista/imagens/retrato.svg) |
| [São João Macías](docs/santos/sao-joao-macias/index.md) | ![São João Macías](docs/santos/sao-joao-macias/imagens/portrait.jpg) |
| [São João Maria Vianney](docs/santos/sao-joao-maria-vianney/index.md) | ![São João Maria Vianney](docs/santos/sao-joao-maria-vianney/imagens/portrait.jpg) |
| [São João Neumann](docs/santos/sao-joao-neumann/index.md) | ![São João Neumann](docs/santos/sao-joao-neumann/imagens/portrait.jpg) |
| [São João Paulo II](docs/santos/sao-joao-paulo-ii/index.md) | ![São João Paulo II](docs/santos/sao-joao-paulo-ii/imagens/joao-paulo-ii.jpg) |
| [São João XXIII](docs/santos/sao-joao-xxiii/index.md) | ![São João XXIII](docs/santos/sao-joao-xxiii/imagens/portrait.jpg) |
| [São Jorge](docs/santos/sao-jorge/index.md) | ![São Jorge](docs/santos/sao-jorge/imagens/sao-jorge.jpg) |
| [São José](docs/santos/sao-jose/index.md) | ![São José](docs/santos/sao-jose/imagens/portrait.jpg) |
| [São José de Anchieta](docs/santos/sao-jose-de-anchieta/index.md) | ![São José de Anchieta](docs/santos/sao-jose-de-anchieta/imagens/portrait.jpg) |
| [São José de Cupertino](docs/santos/sao-jose-de-cupertino/index.md) | ![São José de Cupertino](docs/santos/sao-jose-de-cupertino/imagens/cover.jpg) |
| [São José Gregório Hernández](docs/santos/sao-jose-gregorio-hernandez/index.md) | ![São José Gregório Hernández](docs/santos/sao-jose-gregorio-hernandez/imagens/jose-gregorio.png) |
| [São José Marello](docs/santos/sao-jose-marello/index.md) | ![São José Marello](docs/santos/sao-jose-marello/imagens/cover.jpg) |
| [São José Moscati](docs/santos/sao-jose-moscati/index.md) | ![São José Moscati](docs/santos/sao-jose-moscati/imagens/portrait.jpg) |
| [São José Sánchez del Río](docs/santos/sao-jose-sanchez-del-rio/index.md) | ![São José Sánchez del Río](docs/santos/sao-jose-sanchez-del-rio/imagens/cover.jpg) |
| [Santa Josefina Bakhita](docs/santos/santa-josefina-bakhita/index.md) | ![Santa Josefina Bakhita](docs/santos/santa-josefina-bakhita/imagens/portrait.jpg) |
| [São Josemaria Escrivá](docs/santos/sao-josemaria-escriva/index.md) | ![São Josemaria Escrivá](docs/santos/sao-josemaria-escriva/imagens/retrato.jpg) |
| [São Judas Tadeu](docs/santos/sao-judas-tadeu/index.md) | ![São Judas Tadeu](docs/santos/sao-judas-tadeu/imagens/sao-judas.jpg) |
| [São Junípero Serra](docs/santos/sao-junipero-serra/index.md) | ![São Junípero Serra](docs/santos/sao-junipero-serra/imagens/portrait.jpg) |
| [São Justino Mártir](docs/santos/sao-justino-martir/index.md) | ![São Justino Mártir](docs/santos/sao-justino-martir/imagens/portrait.jpg) |
| [Santa Kateri Tekakwitha](docs/santos/santa-kateri-tekakwitha/index.md) | ![Santa Kateri Tekakwitha](docs/santos/santa-kateri-tekakwitha/imagens/portrait.jpg) |
| [São Leão Magno](docs/santos/sao-leao-magno/index.md) | ![São Leão Magno](docs/santos/sao-leao-magno/imagens/portrait.jpg) |
| [São Longuinho](docs/santos/sao-longuinho/index.md) | ![São Longuinho](docs/santos/sao-longuinho/imagens/portrait.jpg) |
| [São Lourenço](docs/santos/sao-lourenco/index.md) | ![São Lourenço](docs/santos/sao-lourenco/imagens/retrato.svg) |
| [São Lourenço Ruiz](docs/santos/sao-lourenco-ruiz/index.md) | ![São Lourenço Ruiz](docs/santos/sao-lourenco-ruiz/imagens/retrato.svg) |
| [São Lucas](docs/santos/sao-lucas/index.md) | ![São Lucas](docs/santos/sao-lucas/imagens/retrato.svg) |
| [São Ludovico Pavoni](docs/santos/sao-ludovico-pavoni/index.md) | ![São Ludovico Pavoni](docs/santos/sao-ludovico-pavoni/imagens/portrait.jpg) |
| [São Luís Gonzaga](docs/santos/sao-luis-gonzaga/index.md) | ![São Luís Gonzaga](docs/santos/sao-luis-gonzaga/imagens/portrait.png) |
| [São Luís Maria Grignion de Montfort](docs/santos/sao-luis-maria-grignion-de-montfort/index.md) | ![São Luís Maria Grignion de Montfort](docs/santos/sao-luis-maria-grignion-de-montfort/imagens/portrait.jpg) |
| [São Luís Orione](docs/santos/sao-luis-orione/index.md) | ![São Luís Orione](docs/santos/sao-luis-orione/imagens/portrait.jpg) |
| [Santa Luísa de Marillac](docs/santos/santa-luisa-de-marillac/index.md) | ![Santa Luísa de Marillac](docs/santos/santa-luisa-de-marillac/imagens/retrato.svg) |
| [Santa Luzia](docs/santos/santa-luzia/index.md) | ![Santa Luzia](docs/santos/santa-luzia/imagens/retrato.svg) |
| [São Marcos](docs/santos/sao-marcos/index.md) | ![São Marcos](docs/santos/sao-marcos/imagens/retrato.svg) |
| [Santa Margarida Maria Alacoque](docs/santos/santa-margarida-maria-alacoque/index.md) | ![Santa Margarida Maria Alacoque](docs/santos/santa-margarida-maria-alacoque/imagens/portrait.jpg) |
| [Santa Maria Domingas Mazzarello](docs/santos/santa-maria-domingas-mazzarello/index.md) | ![Santa Maria Domingas Mazzarello](docs/santos/santa-maria-domingas-mazzarello/imagens/retrato.jpg) |
| [Santa Maria Goretti](docs/santos/santa-maria-goretti/index.md) | ![Santa Maria Goretti](docs/santos/santa-maria-goretti/imagens/portrait.jpg) |
| [Santa Maria Madalena](docs/santos/santa-maria-madalena/index.md) | ![Santa Maria Madalena](docs/santos/santa-maria-madalena/imagens/retrato.svg) |
| [Santa Maria Troncatti](docs/santos/santa-maria-troncatti/index.md) | ![Santa Maria Troncatti](docs/santos/santa-maria-troncatti/imagens/retrato.svg) |
| [Santa Marta](docs/santos/santa-marta/index.md) | ![Santa Marta](docs/santos/santa-marta/imagens/portrait.jpg) |
| [São Martinho de Lima](docs/santos/sao-martinho-de-lima/index.md) | ![São Martinho de Lima](docs/santos/sao-martinho-de-lima/imagens/retrato.svg) |
| [São Martinho de Tours](docs/santos/sao-martinho-de-tours/index.md) | ![São Martinho de Tours](docs/santos/sao-martinho-de-tours/imagens/portrait.jpg) |
| [São Mateus](docs/santos/sao-mateus/index.md) | ![São Mateus](docs/santos/sao-mateus/imagens/retrato.svg) |
| [São Matias](docs/santos/sao-matias/index.md) | ![São Matias](docs/santos/sao-matias/imagens/retrato.svg) |
| [São Maximiliano Kolbe](docs/santos/sao-maximiliano-kolbe/index.md) | ![São Maximiliano Kolbe](docs/santos/sao-maximiliano-kolbe/imagens/maximiliano.jpg) |
| [Santa Mônica](docs/santos/santa-monica/index.md) | ![Santa Mônica](docs/santos/santa-monica/imagens/santa-monica.jpg) |
| [São Nicolau](docs/santos/sao-nicolau/index.md) | ![São Nicolau](docs/santos/sao-nicolau/img/portrait.jpg) |
| [São Norberto](docs/santos/sao-norberto/index.md) | ![São Norberto](docs/santos/sao-norberto/imagens/portrait.jpg) |
| [São Nuno de Santa Maria](docs/santos/sao-nuno-de-santa-maria/index.md) | ![São Nuno de Santa Maria](docs/santos/sao-nuno-de-santa-maria/imagens/portrait.jpg) |
| [São Oscar Romero](docs/santos/sao-oscar-romero/index.md) | ![São Oscar Romero](docs/santos/sao-oscar-romero/imagens/portrait.jpg) |
| [São Padre Pio de Pietrelcina](docs/santos/sao-padre-pio/index.md) | ![São Padre Pio de Pietrelcina](docs/santos/sao-padre-pio/imagens/padre-pio.jpg) |
| [São Pantaleão](docs/santos/sao-pantaleao/index.md) | ![São Pantaleão](docs/santos/sao-pantaleao/imagens/retrato.jpg) |
| [São Patrício](docs/santos/sao-patricio/index.md) | ![São Patrício](docs/santos/sao-patricio/imagens/portrait.jpg) |
| [Santa Paulina do Coração Agonizante de Jesus](docs/santos/santa-paulina/index.md) | ![Santa Paulina do Coração Agonizante de Jesus](docs/santos/santa-paulina/imagens/portrait.jpg) |
| [São Paulo](docs/santos/sao-paulo/index.md) | ![São Paulo](docs/santos/sao-paulo/imagens/retrato.svg) |
| [São Paulo da Cruz](docs/santos/sao-paulo-da-cruz/index.md) | ![São Paulo da Cruz](docs/santos/sao-paulo-da-cruz/imagens/cover.jpg) |
| [São Paulo VI](docs/santos/sao-paulo-vi/index.md) | ![São Paulo VI](docs/santos/sao-paulo-vi/imagens/portrait.jpg) |
| [São Pedro](docs/santos/sao-pedro/index.md) | ![São Pedro](docs/santos/sao-pedro/imagens/retrato.svg) |
| [São Pedro Canísio](docs/santos/sao-pedro-canisio/index.md) | ![São Pedro Canísio](docs/santos/sao-pedro-canisio/imagens/portrait.jpg) |
| [São Pedro Claver](docs/santos/sao-pedro-claver/index.md) | ![São Pedro Claver](docs/santos/sao-pedro-claver/imagens/portrait.jpg) |
| [São Pedro Damião](docs/santos/sao-pedro-damiao/index.md) | ![São Pedro Damião](docs/santos/sao-pedro-damiao/imagens/cover.jpg) |
| [São Pedro de Alcântara](docs/santos/sao-pedro-de-alcantara/index.md) | ![São Pedro de Alcântara](docs/santos/sao-pedro-de-alcantara/imagens/portrait.jpg) |
| [São Pedro Julião Eymard](docs/santos/sao-pedro-juliao-eymard/index.md) | ![São Pedro Julião Eymard](docs/santos/sao-pedro-juliao-eymard/imagens/portrait.jpg) |
| [São Peregrino](docs/santos/sao-peregrino/index.md) | ![São Peregrino](docs/santos/sao-peregrino/imagens/portrait.jpg) |
| [São Pier Giorgio Frassati](docs/santos/pier-giorgio-frassati/index.md) | ![São Pier Giorgio Frassati](docs/santos/pier-giorgio-frassati/imagens/pier-giorgio.jpg) |
| [São Pio V](docs/santos/sao-pio-v/index.md) | ![São Pio V](docs/santos/sao-pio-v/imagens/portrait.jpg) |
| [São Pio X](docs/santos/sao-pio-x/index.md) | ![São Pio X](docs/santos/sao-pio-x/imagens/portrait.jpg) |
| [São Policarpo de Esmirna](docs/santos/sao-policarpo/index.md) | ![São Policarpo de Esmirna](docs/santos/sao-policarpo/imagens/cover.jpg) |
| [Santa Rita de Cássia](docs/santos/santa-rita-de-cassia/index.md) | ![Santa Rita de Cássia](docs/santos/santa-rita-de-cassia/imagens/santa-rita.jpg) |
| [São Roberto Belarmino](docs/santos/sao-roberto-belarmino/index.md) | ![São Roberto Belarmino](docs/santos/sao-roberto-belarmino/imagens/portrait.jpg) |
| [São Roque](docs/santos/sao-roque/index.md) | ![São Roque](docs/santos/sao-roque/imagens/portrait.jpg) |
| [Santa Rosa de Lima](docs/santos/santa-rosa-de-lima/index.md) | ![Santa Rosa de Lima](docs/santos/santa-rosa-de-lima/imagens/santa-rosa.jpg) |
| [São Sebastião](docs/santos/sao-sebastiao/index.md) | ![São Sebastião](docs/santos/sao-sebastiao/imagens/retrato.svg) |
| [São Simão](docs/santos/sao-simao/index.md) | ![São Simão](docs/santos/sao-simao/imagens/retrato.svg) |
| [São Tarcísio](docs/santos/sao-tarcisio/index.md) | ![São Tarcísio](docs/santos/sao-tarcisio/imagens/portrait.jpg) |
| [Santa Teresa Benedita da Cruz](docs/santos/santa-teresa-benedita-da-cruz/index.md) | ![Santa Teresa Benedita da Cruz](docs/santos/santa-teresa-benedita-da-cruz/imagens/portrait.jpg) |
| [Santa Teresa de Ávila](docs/santos/santa-teresa-de-avila/index.md) | ![Santa Teresa de Ávila](docs/santos/santa-teresa-de-avila/imagens/portrait.jpg) |
| [Santa Teresa de Calcutá](docs/santos/santa-teresa-de-calcuta/index.md) | ![Santa Teresa de Calcutá](docs/santos/santa-teresa-de-calcuta/imagens/retrato.svg) |
| [Santa Teresa dos Andes](docs/santos/santa-teresa-dos-andes/index.md) | ![Santa Teresa dos Andes](docs/santos/santa-teresa-dos-andes/imagens/portrait.jpg) |
| [Santa Teresinha do Menino Jesus](docs/santos/santa-teresinha-do-menino-jesus/index.md) | ![Santa Teresinha do Menino Jesus](docs/santos/santa-teresinha-do-menino-jesus/imagens/santa-teresinha.jpg) |
| [São Tiago Maior](docs/santos/sao-tiago-maior/index.md) | ![São Tiago Maior](docs/santos/sao-tiago-maior/imagens/retrato.svg) |
| [São Tiago Menor](docs/santos/sao-tiago-menor/index.md) | ![São Tiago Menor](docs/santos/sao-tiago-menor/imagens/retrato.svg) |
| [São Tomás Becket](docs/santos/sao-tomas-becket/index.md) | ![São Tomás Becket](docs/santos/sao-tomas-becket/imagens/portrait.jpg) |
| [São Tomás de Aquino](docs/santos/sao-tomas-de-aquino/index.md) | ![São Tomás de Aquino](docs/santos/sao-tomas-de-aquino/imagens/portrait.jpg) |
| [São Tomás de Vilanova](docs/santos/sao-tomas-de-vilanova/index.md) | ![São Tomás de Vilanova](docs/santos/sao-tomas-de-vilanova/imagens/portrait.jpg) |
| [São Tomás More](docs/santos/sao-tomas-more/index.md) | ![São Tomás More](docs/santos/sao-tomas-more/imagens/portrait.jpg) |
| [São Tomé](docs/santos/sao-tome/index.md) | ![São Tomé](docs/santos/sao-tome/imagens/retrato.svg) |
| [São Valentim](docs/santos/sao-valentim/index.md) | ![São Valentim](docs/santos/sao-valentim/imagens/portrait.jpg) |
| [São Venceslau](docs/santos/sao-venceslau/index.md) | ![São Venceslau](docs/santos/sao-venceslau/imagens/portrait.jpg) |
| [São Vicente de Paulo](docs/santos/sao-vicente-de-paulo/index.md) | ![São Vicente de Paulo](docs/santos/sao-vicente-de-paulo/imagens/retrato.svg) |
| [São Vicente Ferrer](docs/santos/sao-vicente-ferrer/index.md) | ![São Vicente Ferrer](docs/santos/sao-vicente-ferrer/imagens/portrait.jpg) |
| [São Vicente Pallotti](docs/santos/sao-vicente-pallotti/index.md) | ![São Vicente Pallotti](docs/santos/sao-vicente-pallotti/imagens/portrait.jpg) |
| [Santa Zita](docs/santos/santa-zita/index.md) | ![Santa Zita](docs/santos/santa-zita/imagens/portrait.jpg) |
