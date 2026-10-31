# Santos e Beatos da Igreja Católica

Biografias, imagens, milagres e mapas de santos e beatos da Igreja Católica, publicadas como site estático com [VitePress](https://vitepress.dev/).

## Conteúdo

- **200 santos** em [`docs/santos/`](docs/santos/index.md)
- **185 beatos** em [`docs/beatos/`](docs/beatos/index.md)

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

São 183 beatos e 211 santos catalogados.

| Nome | Imagem |
| --- | --- |
| [Beato Adílio Daronch](docs/beatos/beato-adilio-daronch/index.md) | ![Beato Adílio Daronch](docs/beatos/beato-adilio-daronch/imagens/restaurada_4k.jpg) |
| [Beato Agostinho Kazotić](docs/beatos/beato-agostinho-kazotic/index.md) | ![Beato Agostinho Kazotić](docs/beatos/beato-agostinho-kazotic/imagens/restaurada_4k.jpg) |
| [Beato Alano de la Roche](docs/beatos/beato-alano-de-la-roche/index.md) | ![Beato Alano de la Roche](docs/beatos/beato-alano-de-la-roche/imagens/restaurada_4k.jpg) |
| [Beata Albertina Berkenbrock](docs/beatos/beata-albertina-berkenbrock/index.md) | ![Beata Albertina Berkenbrock](docs/beatos/beata-albertina-berkenbrock/imagens/restaurada_4k.jpg) |
| [Beato Alberto Marvelli](docs/beatos/beato-alberto-marvelli/index.md) | ![Beato Alberto Marvelli](docs/beatos/beato-alberto-marvelli/imagens/restaurada_4k.jpg) |
| [Beata Alexandrina Maria da Costa](docs/beatos/beata-alexandrina-maria-da-costa/index.md) | ![Beata Alexandrina Maria da Costa](docs/beatos/beata-alexandrina-maria-da-costa/imagens/restaurada_4k.jpg) |
| [Beato Alojzije Stepinac](docs/beatos/beato-alojzije-stepinac/index.md) | ![Beato Alojzije Stepinac](docs/beatos/beato-alojzije-stepinac/imagens/restaurada_colorida_4k.jpg) |
| [Beato Álvaro del Portillo](docs/beatos/beato-alvaro-del-portillo/index.md) | ![Beato Álvaro del Portillo](docs/beatos/beato-alvaro-del-portillo/imagens/restaurada_4k.jpg) |
| [Beata Ana Catarina Emmerich](docs/beatos/beata-ana-catarina-emmerich/index.md) | ![Beata Ana Catarina Emmerich](docs/beatos/beata-ana-catarina-emmerich/imagens/restaurada_4k.jpg) |
| [Beata Ana de Jesus](docs/beatos/beata-ana-de-jesus/index.md) | ![Beata Ana de Jesus](docs/beatos/beata-ana-de-jesus/imagens/restaurada_4k.jpg) |
| [Beata Ana de São Bartolomeu](docs/beatos/beata-ana-de-sao-bartolomeu/index.md) | ![Beata Ana de São Bartolomeu](docs/beatos/beata-ana-de-sao-bartolomeu/imagens/restaurada_4k.jpg) |
| [Beata Ana dos Anjos Monteagudo](docs/beatos/beata-ana-dos-anjos-monteagudo/index.md) | ![Beata Ana dos Anjos Monteagudo](docs/beatos/beata-ana-dos-anjos-monteagudo/imagens/restaurada_4k.jpg) |
| [Beata Ana Maria Javouhey](docs/beatos/beata-ana-maria-javouhey/index.md) | ![Beata Ana Maria Javouhey](docs/beatos/beata-ana-maria-javouhey/imagens/restaurada_4k.jpg) |
| [Beato Anacleto González Flores](docs/beatos/beato-anacleto-gonzalez-flores/index.md) | ![Beato Anacleto González Flores](docs/beatos/beato-anacleto-gonzalez-flores/imagens/restaurada_colorida_4k.jpg) |
| [Beata Anna Kolesárová](docs/beatos/beata-anna-kolesarova/index.md) | ![Beata Anna Kolesárová](docs/beatos/beata-anna-kolesarova/imagens/restaurada_4k.jpg) |
| [Beata Anna Maria Taigi](docs/beatos/beata-anna-maria-taigi/index.md) | ![Beata Anna Maria Taigi](docs/beatos/beata-anna-maria-taigi/imagens/restaurada_4k.jpg) |
| [Beata Anna Rosa Gattorno](docs/beatos/beata-anna-rosa-gattorno/index.md) | ![Beata Anna Rosa Gattorno](docs/beatos/beata-anna-rosa-gattorno/imagens/restaurada_colorida_4k.jpg) |
| [Beata Antônia Mesina](docs/beatos/beata-antonia-mesina/index.md) | ![Beata Antônia Mesina](docs/beatos/beata-antonia-mesina/imagens/restaurada_4k.jpg) |
| [Venerável Antonietta Meo (Nennolina)](docs/beatos/beata-antonieta-meo/index.md) | ![Venerável Antonietta Meo (Nennolina)](docs/beatos/beata-antonieta-meo/imagens/restaurada_colorida_4k.jpg) |
| [Beato Antônio Chevrier](docs/beatos/beato-antonio-chevrier/index.md) | ![Beato Antônio Chevrier](docs/beatos/beato-antonio-chevrier/imagens/restaurada_4k.jpg) |
| [Beato Antônio de Categeró](docs/beatos/beato-antonio-de-categero/index.md) | ![Beato Antônio de Categeró](docs/beatos/beato-antonio-de-categero/imagens/restaurada_colorida_4k.jpg) |
| [Beato Antônio Frederico Ozanam](docs/beatos/beato-antonio-frederico-ozanam/index.md) | ![Beato Antônio Frederico Ozanam](docs/beatos/beato-antonio-frederico-ozanam/imagens/restaurada_colorida_4k.jpg) |
| [Beato Antonio Rosmini](docs/beatos/beato-antonio-rosmini/index.md) | ![Beato Antonio Rosmini](docs/beatos/beato-antonio-rosmini/imagens/restaurada_colorida_4k.jpg) |
| [Beata Anuarite Nengapeta](docs/beatos/beata-anuarite-nengapeta/index.md) | ![Beata Anuarite Nengapeta](docs/beatos/beata-anuarite-nengapeta/imagens/restaurada_colorida_4k.jpg) |
| [Beata Armida Barelli](docs/beatos/beata-armida-barelli/index.md) | ![Beata Armida Barelli](docs/beatos/beata-armida-barelli/imagens/restaurada_4k.jpg) |
| [Beata Assunta Marchetti](docs/beatos/beata-assunta-marchetti/index.md) | ![Beata Assunta Marchetti](docs/beatos/beata-assunta-marchetti/imagens/restaurada_4k.jpg) |
| [Beato Augusto Czartoryski](docs/beatos/beato-augusto-czartoryski/index.md) | ![Beato Augusto Czartoryski](docs/beatos/beato-augusto-czartoryski/imagens/restaurada_4k.jpg) |
| [Beata Bárbara Maix](docs/beatos/beata-barbara-maix/index.md) | ![Beata Bárbara Maix](docs/beatos/beata-barbara-maix/imagens/restaurada_4k.jpg) |
| [Beato Basílio Moreau](docs/beatos/beato-basilio-moreau/index.md) | ![Beato Basílio Moreau](docs/beatos/beato-basilio-moreau/imagens/restaurada_4k.jpg) |
| [Beata Benedetta Bianchi Porro](docs/beatos/beata-benedetta-bianchi-porro/index.md) | ![Beata Benedetta Bianchi Porro](docs/beatos/beata-benedetta-bianchi-porro/imagens/restaurada_colorida_4k.jpg) |
| [Beata Benigna](docs/beatos/beata-benigna/index.md) | ![Beata Benigna](docs/beatos/beata-benigna/imagens/restaurada_4k.jpg) |
| [Beato Bernardo de Hoyos](docs/beatos/beato-bernardo-de-hoyos/index.md) | ![Beato Bernardo de Hoyos](docs/beatos/beato-bernardo-de-hoyos/imagens/restaurada_4k.jpg) |
| [Beato Bronislaw Markiewicz](docs/beatos/beato-bronislaw-markiewicz/index.md) | ![Beato Bronislaw Markiewicz](docs/beatos/beato-bronislaw-markiewicz/imagens/restaurada_colorida_4k.jpg) |
| [Beato Carlo Gnocchi](docs/beatos/beato-carlo-gnocchi/index.md) | ![Beato Carlo Gnocchi](docs/beatos/beato-carlo-gnocchi/imagens/restaurada_4k.jpg) |
| [Beato Carlo Steeb](docs/beatos/beato-carlo-steeb/index.md) | ![Beato Carlo Steeb](docs/beatos/beato-carlo-steeb/imagens/original.jpg) |
| [Beato Carlos da Áustria](docs/beatos/beato-carlos-da-austria/index.md) | ![Beato Carlos da Áustria](docs/beatos/beato-carlos-da-austria/imagens/restaurada_colorida_4k.jpg) |
| [Beato Carlos Manuel Rodríguez Santiago](docs/beatos/beato-carlos-manuel/index.md) | ![Beato Carlos Manuel Rodríguez Santiago](docs/beatos/beato-carlos-manuel/imagens/restaurada_colorida_4k.jpg) |
| [Beata Catarina de Santo Agostinho](docs/beatos/beata-catarina-de-santo-agostinho/index.md) | ![Beata Catarina de Santo Agostinho](docs/beatos/beata-catarina-de-santo-agostinho/imagens/restaurada_colorida_4k.jpg) |
| [Beata Catarina Troiani](docs/beatos/beata-catarina-troiani/index.md) | ![Beata Catarina Troiani](docs/beatos/beata-catarina-troiani/imagens/restaurada_colorida_4k.jpg) |
| [Beato Ceferino Giménez Malla](docs/beatos/beato-ceferino-gimenez-malla/index.md) | ![Beato Ceferino Giménez Malla](docs/beatos/beato-ceferino-gimenez-malla/imagens/restaurada_colorida_4k.jpg) |
| [Beata Chiara Luce Badano](docs/beatos/beata-chiara-luce-badano/index.md) | ![Beata Chiara Luce Badano](docs/beatos/beata-chiara-luce-badano/imagens/restaurada_colorida_4k.jpg) |
| [Beata Chiquitunga](docs/beatos/beata-chiquitunga/index.md) | ![Beata Chiquitunga](docs/beatos/beata-chiquitunga/imagens/restaurada_4k.jpg) |
| [Beato Cláudio Granzotto](docs/beatos/beato-claudio-granzotto/index.md) | ![Beato Cláudio Granzotto](docs/beatos/beato-claudio-granzotto/imagens/restaurada_colorida_4k.jpg) |
| [Beata Clélia Merloni](docs/beatos/beata-clelia-merloni/index.md) | ![Beata Clélia Merloni](docs/beatos/beata-clelia-merloni/imagens/restaurada_colorida_4k.jpg) |
| [Beato Clemente August von Galen](docs/beatos/beato-clemente-august-von-galen/index.md) | ![Beato Clemente August von Galen](docs/beatos/beato-clemente-august-von-galen/imagens/restaurada_colorida_4k.jpg) |
| [Beato Clemente Marchisio](docs/beatos/beato-clemente-marchisio/index.md) | ![Beato Clemente Marchisio](docs/beatos/beato-clemente-marchisio/imagens/restaurada_colorida_4k.jpg) |
| [Beato Columba Marmion](docs/beatos/beato-columba-marmion/index.md) | ![Beato Columba Marmion](docs/beatos/beato-columba-marmion/imagens/restaurada_4k.jpg) |
| [Beata Concepción Cabrera de Armida](docs/beatos/beata-concepcion-cabrera/index.md) | ![Beata Concepción Cabrera de Armida](docs/beatos/beata-concepcion-cabrera/imagens/restaurada_colorida_4k.jpg) |
| [Beata Concepción Cabrera de Armida (Conchita)](docs/beatos/beata-maria-da-conceicao/index.md) | ![Beata Concepción Cabrera de Armida (Conchita)](docs/beatos/beata-maria-da-conceicao/imagens/restaurada_colorida_4k.jpg) |
| [Beato Contardo Ferrini](docs/beatos/beato-contardo-ferrini/index.md) | ![Beato Contardo Ferrini](docs/beatos/beato-contardo-ferrini/imagens/restaurada_colorida_4k.jpg) |
| [Beata Dina Bélanger](docs/beatos/beata-dina-belanger/index.md) | ![Beata Dina Bélanger](docs/beatos/beata-dina-belanger/imagens/restaurada_colorida_4k.jpg) |
| [Beato Diogo José de Cádis](docs/beatos/beato-diogo-jose-de-cadiz/index.md) | ![Beato Diogo José de Cádis](docs/beatos/beato-diogo-jose-de-cadiz/imagens/restaurada_4k.jpg) |
| [Beato Domingos da Mãe de Deus](docs/beatos/beato-domingos-da-mae-de-deus/index.md) | ![Beato Domingos da Mãe de Deus](docs/beatos/beato-domingos-da-mae-de-deus/imagens/restaurada_4k.jpg) |
| [Beata Edel Quinn](docs/beatos/beata-edel-quinn/index.md) | ![Beata Edel Quinn](docs/beatos/beata-edel-quinn/imagens/restaurada_4k.jpg) |
| [Beato Edmundo Rice](docs/beatos/beato-edmundo-rice/index.md) | ![Beato Edmundo Rice](docs/beatos/beato-edmundo-rice/imagens/restaurada_4k.jpg) |
| [Beato Eduardo Pironio](docs/beatos/beato-eduardo-pironio/index.md) | ![Beato Eduardo Pironio](docs/beatos/beato-eduardo-pironio/imagens/restaurada_colorida_4k.jpg) |
| [Beata Edviges Carboni](docs/beatos/beata-edviges-carboni/index.md) | ![Beata Edviges Carboni](docs/beatos/beata-edviges-carboni/imagens/restaurada_colorida_4k.jpg) |
| [Beata Elena Aiello](docs/beatos/beata-elena-aiello/index.md) | ![Beata Elena Aiello](docs/beatos/beata-elena-aiello/imagens/restaurada_colorida_4k.jpg) |
| [Beata Elisabetta Canori Mora](docs/beatos/beata-elisabetta-canori-mora/index.md) | ![Beata Elisabetta Canori Mora](docs/beatos/beata-elisabetta-canori-mora/imagens/restaurada_4k.jpg) |
| [Beata Elisabetta Sanna](docs/beatos/beata-elisabetta-sanna/index.md) | ![Beata Elisabetta Sanna](docs/beatos/beata-elisabetta-sanna/imagens/restaurada_4k.jpg) |
| [Beato Estêvão Sándor](docs/beatos/beato-estevao-sandor/index.md) | ![Beato Estêvão Sándor](docs/beatos/beato-estevao-sandor/imagens/restaurada_4k.jpg) |
| [Beata Eurosia Fabris](docs/beatos/beata-eurosia-fabris/index.md) | ![Beata Eurosia Fabris](docs/beatos/beata-eurosia-fabris/imagens/restaurada_4k.jpg) |
| [Beata Eusébia Palomino Yenes](docs/beatos/beata-eusebia-palomino-yenes/index.md) | ![Beata Eusébia Palomino Yenes](docs/beatos/beata-eusebia-palomino-yenes/imagens/restaurada_colorida_4k.jpg) |
| [Beato Filipe Rinaldi](docs/beatos/beato-filipe-rinaldi/index.md) | ![Beato Filipe Rinaldi](docs/beatos/beato-filipe-rinaldi/imagens/restaurada_4k.jpg) |
| [Beato Fra Angelico (João de Fiesole)](docs/beatos/beato-fra-angelico/index.md) | ![Beato Fra Angelico (João de Fiesole)](docs/beatos/beato-fra-angelico/imagens/restaurada_4k.jpg) |
| [Beato Francisco Gárate](docs/beatos/beato-francisco-garate/index.md) | ![Beato Francisco Gárate](docs/beatos/beato-francisco-garate/imagens/restaurada_4k.jpg) |
| [Beato Francisco Jordan](docs/beatos/beato-francisco-jordan/index.md) | ![Beato Francisco Jordan](docs/beatos/beato-francisco-jordan/imagens/restaurada_4k.jpg) |
| [Beato Francisco Palau](docs/beatos/beato-francisco-palau/index.md) | ![Beato Francisco Palau](docs/beatos/beato-francisco-palau/imagens/restaurada_4k.jpg) |
| [Beato Francisco Xavier Seelos](docs/beatos/beato-francisco-xavier-seelos/index.md) | ![Beato Francisco Xavier Seelos](docs/beatos/beato-francisco-xavier-seelos/imagens/original.jpg) |
| [Beato Franz Jägerstätter](docs/beatos/beato-franz-jagerstatter/index.md) | ![Beato Franz Jägerstätter](docs/beatos/beato-franz-jagerstatter/imagens/restaurada_4k.jpg) |
| [Beato Giuseppe Toniolo](docs/beatos/beato-giuseppe-toniolo/index.md) | ![Beato Giuseppe Toniolo](docs/beatos/beato-giuseppe-toniolo/imagens/restaurada_4k.jpg) |
| [Beato Gonçalo de Amarante](docs/beatos/beato-goncalo-de-amarante/index.md) | ![Beato Gonçalo de Amarante](docs/beatos/beato-goncalo-de-amarante/imagens/restaurada_4k.jpg) |
| [Beata Guadalupe Ortiz de Landázuri](docs/beatos/beata-guadalupe-ortiz-de-landazuri/index.md) | ![Beata Guadalupe Ortiz de Landázuri](docs/beatos/beata-guadalupe-ortiz-de-landazuri/imagens/restaurada_colorida_4k.jpg) |
| [Beato Guido de Montpellier](docs/beatos/beato-guido-de-montpellier/index.md) | ![Beato Guido de Montpellier](docs/beatos/beato-guido-de-montpellier/imagens/restaurada_colorida_4k.jpg) |
| [Beato Guilherme José Chaminade](docs/beatos/beato-guilherme-jose-chaminade/index.md) | ![Beato Guilherme José Chaminade](docs/beatos/beato-guilherme-jose-chaminade/imagens/restaurada_4k.jpg) |
| [Beato Henrique Suso](docs/beatos/beato-henrique-suso/index.md) | ![Beato Henrique Suso](docs/beatos/beato-henrique-suso/imagens/restaurada_4k.jpg) |
| [Beato Hermann de Reichenau](docs/beatos/beato-hermann-de-reichenau/index.md) | ![Beato Hermann de Reichenau](docs/beatos/beato-hermann-de-reichenau/imagens/restaurada_4k.jpg) |
| [Beato Ildefonso Schuster](docs/beatos/beato-ildefonso-schuster/index.md) | ![Beato Ildefonso Schuster](docs/beatos/beato-ildefonso-schuster/imagens/restaurada_4k.jpg) |
| [Beata Imelda Lambertini](docs/beatos/beata-imelda-lambertini/index.md) | ![Beata Imelda Lambertini](docs/beatos/beata-imelda-lambertini/imagens/restaurada_4k.jpg) |
| [Beato Inácio de Azevedo](docs/beatos/beato-inacio-de-azevedo/index.md) | ![Beato Inácio de Azevedo](docs/beatos/beato-inacio-de-azevedo/imagens/restaurada_4k.jpg) |
| [Beato Inácio Maloyan](docs/beatos/beato-inacio-maloyan/index.md) | ![Beato Inácio Maloyan](docs/beatos/beato-inacio-maloyan/imagens/restaurada_colorida_4k.jpg) |
| [Beato Inocêncio V](docs/beatos/beato-inocencio-v/index.md) | ![Beato Inocêncio V](docs/beatos/beato-inocencio-v/imagens/restaurada_4k.jpg) |
| [Beato Inocêncio XI](docs/beatos/beato-inocencio-xi/index.md) | ![Beato Inocêncio XI](docs/beatos/beato-inocencio-xi/imagens/restaurada_4k.jpg) |
| [Beata Isabel Cristina](docs/beatos/beata-isabel-cristina/index.md) | ![Beata Isabel Cristina](docs/beatos/beata-isabel-cristina/imagens/restaurada_4k.jpg) |
| [Beato Isidoro Bakanja](docs/beatos/beato-isidoro-bakanja/index.md) | ![Beato Isidoro Bakanja](docs/beatos/beato-isidoro-bakanja/imagens/restaurada_colorida_4k.jpg) |
| [Beato Ivan Merz](docs/beatos/beato-ivan-merz/index.md) | ![Beato Ivan Merz](docs/beatos/beato-ivan-merz/imagens/restaurada_4k.jpg) |
| [Beato Jacinto Vera](docs/beatos/beato-jacinto-vera/index.md) | ![Beato Jacinto Vera](docs/beatos/beato-jacinto-vera/imagens/restaurada_4k.jpg) |
| [Beato Jerzy Popiełuszko](docs/beatos/beato-jerzy-popieluszko/index.md) | ![Beato Jerzy Popiełuszko](docs/beatos/beato-jerzy-popieluszko/imagens/restaurada_colorida_4k.jpg) |
| [Beato Joan Roig i Diggle](docs/beatos/beato-joan-roig-i-diggle/index.md) | ![Beato Joan Roig i Diggle](docs/beatos/beato-joan-roig-i-diggle/imagens/restaurada_colorida_4k.jpg) |
| [Beata Joana de Portugal](docs/beatos/beata-joana-de-portugal/index.md) | ![Beata Joana de Portugal](docs/beatos/beata-joana-de-portugal/imagens/restaurada_4k.jpg) |
| [Beato João Baptista Machado](docs/beatos/beato-joao-baptista-machado/index.md) | ![Beato João Baptista Machado](docs/beatos/beato-joao-baptista-machado/imagens/restaurada_4k.jpg) |
| [Beato João Duns Scotus](docs/beatos/beato-joao-duns-scotus/index.md) | ![Beato João Duns Scotus](docs/beatos/beato-joao-duns-scotus/imagens/restaurada_4k.jpg) |
| [Beato João Paulo I](docs/beatos/beato-joao-paulo-i/index.md) | ![Beato João Paulo I](docs/beatos/beato-joao-paulo-i/imagens/restaurada_4k.jpg) |
| [Beato João Schiavo](docs/beatos/beato-joao-schiavo/index.md) | ![Beato João Schiavo](docs/beatos/beato-joao-schiavo/imagens/restaurada_colorida_4k.jpg) |
| [Beato Jordão da Saxônia](docs/beatos/beato-jordao-da-saxonia/index.md) | ![Beato Jordão da Saxônia](docs/beatos/beato-jordao-da-saxonia/imagens/restaurada_colorida_4k.jpg) |
| [Beato Justo Takayama Ukon](docs/beatos/beato-justo-takayama-ukon/index.md) | ![Beato Justo Takayama Ukon](docs/beatos/beato-justo-takayama-ukon/imagens/restaurada_4k.jpg) |
| [Beato Karl Leisner](docs/beatos/beato-karl-leisner/index.md) | ![Beato Karl Leisner](docs/beatos/beato-karl-leisner/imagens/restaurada_4k.jpg) |
| [Beata Karolina Kózka](docs/beatos/beata-karolina-kozka/index.md) | ![Beata Karolina Kózka](docs/beatos/beata-karolina-kozka/imagens/restaurada_colorida_4k.jpg) |
| [Beata Laura Vicuña](docs/beatos/beata-laura-vicuna/index.md) | ![Beata Laura Vicuña](docs/beatos/beata-laura-vicuna/imagens/restaurada_colorida_4k.jpg) |
| [Beata Liduina Meneguzzi](docs/beatos/beata-liduina-meneguzzi/index.md) | ![Beata Liduina Meneguzzi](docs/beatos/beata-liduina-meneguzzi/imagens/restaurada_colorida_4k.jpg) |
| [Beata Lindalva Justo de Oliveira](docs/beatos/beata-lindalva-justo-de-oliveira/index.md) | ![Beata Lindalva Justo de Oliveira](docs/beatos/beata-lindalva-justo-de-oliveira/imagens/restaurada_4k.jpg) |
| [Beato Lojze Grozde](docs/beatos/beato-lojze-grozde/index.md) | ![Beato Lojze Grozde](docs/beatos/beato-lojze-grozde/imagens/restaurada_colorida_4k.jpg) |
| [Beato Luca Belludi](docs/beatos/beato-luca-belludi/index.md) | ![Beato Luca Belludi](docs/beatos/beato-luca-belludi/imagens/restaurada_4k.jpg) |
| [Beato Luca Passi](docs/beatos/beato-luca-passi/index.md) | ![Beato Luca Passi](docs/beatos/beato-luca-passi/imagens/restaurada_4k.jpg) |
| [Beata Lúcia de Narni](docs/beatos/beata-lucia-de-narni/index.md) | ![Beata Lúcia de Narni](docs/beatos/beata-lucia-de-narni/imagens/restaurada_colorida_4k.jpg) |
| [Beato Luigi Beltrame Quattrocchi](docs/beatos/beato-luigi-beltrame-quattrocchi/index.md) | ![Beato Luigi Beltrame Quattrocchi](docs/beatos/beato-luigi-beltrame-quattrocchi/imagens/restaurada_4k.jpg) |
| [Beato Luigi Maria Monti](docs/beatos/beato-luigi-maria-monti/index.md) | ![Beato Luigi Maria Monti](docs/beatos/beato-luigi-maria-monti/imagens/original.jpg) |
| [Beato Luigi Monza](docs/beatos/beato-luigi-monza/index.md) | ![Beato Luigi Monza](docs/beatos/beato-luigi-monza/imagens/restaurada_4k.jpg) |
| [Beato Luigi Novarese](docs/beatos/beato-luigi-novarese/index.md) | ![Beato Luigi Novarese](docs/beatos/beato-luigi-novarese/imagens/restaurada_colorida_4k.jpg) |
| [Beato Luigi Tezza](docs/beatos/beato-luigi-tezza/index.md) | ![Beato Luigi Tezza](docs/beatos/beato-luigi-tezza/imagens/restaurada_colorida_4k.jpg) |
| [Beato Luis Variara](docs/beatos/beato-luis-variara/index.md) | ![Beato Luis Variara](docs/beatos/beato-luis-variara/imagens/restaurada_4k.jpg) |
| [Beata Madre Esperança de Jesus](docs/beatos/beata-madre-esperanca-de-jesus/index.md) | ![Beata Madre Esperança de Jesus](docs/beatos/beata-madre-esperanca-de-jesus/imagens/restaurada_4k.jpg) |
| [Beata Mafalda de Portugal](docs/beatos/beata-mafalda-de-portugal/index.md) | ![Beata Mafalda de Portugal](docs/beatos/beata-mafalda-de-portugal/imagens/restaurada_4k.jpg) |
| [Beato Manuel Gómez González](docs/beatos/beato-manuel-gomez-gonzalez/index.md) | ![Beato Manuel Gómez González](docs/beatos/beato-manuel-gomez-gonzalez/imagens/restaurada_colorida_4k.jpg) |
| [Beato Manuel Lozano Garrido](docs/beatos/beato-manuel-lozano-garrido/index.md) | ![Beato Manuel Lozano Garrido](docs/beatos/beato-manuel-lozano-garrido/imagens/restaurada_4k.jpg) |
| [Beato Marcel Callo](docs/beatos/beato-marcel-callo/index.md) | ![Beato Marcel Callo](docs/beatos/beato-marcel-callo/imagens/restaurada_colorida_4k.jpg) |
| [Beato Marcelo Spínola e Maestre](docs/beatos/beato-marcelo-spinola/index.md) | ![Beato Marcelo Spínola e Maestre](docs/beatos/beato-marcelo-spinola/imagens/restaurada_colorida_4k.jpg) |
| [Beato Marcos de Aviano](docs/beatos/beato-marcos-de-aviano/index.md) | ![Beato Marcos de Aviano](docs/beatos/beato-marcos-de-aviano/imagens/restaurada_4k.jpg) |
| [Beata Maria Assunta Pallotta](docs/beatos/beata-maria-assunta-pallotta/index.md) | ![Beata Maria Assunta Pallotta](docs/beatos/beata-maria-assunta-pallotta/imagens/restaurada_4k.jpg) |
| [Beata Maria Bolognesi](docs/beatos/beata-maria-bolognesi/index.md) | ![Beata Maria Bolognesi](docs/beatos/beata-maria-bolognesi/imagens/restaurada_4k.jpg) |
| [Beata Maria Candelária de São José](docs/beatos/beata-maria-candelaria/index.md) | ![Beata Maria Candelária de São José](docs/beatos/beata-maria-candelaria/imagens/restaurada_4k.jpg) |
| [Beata Maria Cândida da Eucaristia](docs/beatos/beata-maria-candida-da-eucaristia/index.md) | ![Beata Maria Cândida da Eucaristia](docs/beatos/beata-maria-candida-da-eucaristia/imagens/restaurada_4k.jpg) |
| [Beata Maria Celeste Crostarosa](docs/beatos/beata-maria-celeste-crostarosa/index.md) | ![Beata Maria Celeste Crostarosa](docs/beatos/beata-maria-celeste-crostarosa/imagens/restaurada_4k.jpg) |
| [Beata Maria Clara do Menino Jesus](docs/beatos/beata-maria-clara-do-menino-jesus/index.md) | ![Beata Maria Clara do Menino Jesus](docs/beatos/beata-maria-clara-do-menino-jesus/imagens/restaurada_4k.jpg) |
| [Beata Maria Cristina de Saboia](docs/beatos/beata-maria-cristina-de-saboia/index.md) | ![Beata Maria Cristina de Saboia](docs/beatos/beata-maria-cristina-de-saboia/imagens/restaurada_4k.jpg) |
| [Beata Maria da Paixão](docs/beatos/beata-maria-da-paixao/index.md) | ![Beata Maria da Paixão](docs/beatos/beata-maria-da-paixao/imagens/restaurada_4k.jpg) |
| [Beata Maria de San José Alvarado](docs/beatos/beata-maria-de-san-jose-alvarado/index.md) | ![Beata Maria de San José Alvarado](docs/beatos/beata-maria-de-san-jose-alvarado/imagens/restaurada_colorida_4k.jpg) |
| [Beata Maria do Divino Coração](docs/beatos/beata-maria-do-divino-coracao/index.md) | ![Beata Maria do Divino Coração](docs/beatos/beata-maria-do-divino-coracao/imagens/restaurada_colorida_4k.jpg) |
| [Beata Maria dos Apóstolos](docs/beatos/beata-maria-dos-apostolos/index.md) | ![Beata Maria dos Apóstolos](docs/beatos/beata-maria-dos-apostolos/imagens/restaurada_colorida_4k.jpg) |
| [Beata Maria Gabriela da Unidade](docs/beatos/beata-maria-gabriela-da-unidade/index.md) | ![Beata Maria Gabriela da Unidade](docs/beatos/beata-maria-gabriela-da-unidade/imagens/restaurada_4k.jpg) |
| [Beata Maria Laura Mainetti](docs/beatos/beata-maria-laura-mainetti/index.md) | ![Beata Maria Laura Mainetti](docs/beatos/beata-maria-laura-mainetti/imagens/restaurada_4k.jpg) |
| [Beata Maria Pierina De Micheli](docs/beatos/beata-maria-pierina-de-micheli/index.md) | ![Beata Maria Pierina De Micheli](docs/beatos/beata-maria-pierina-de-micheli/imagens/restaurada_colorida_4k.jpg) |
| [Beata Maria Repetto](docs/beatos/beata-maria-repetto/index.md) | ![Beata Maria Repetto](docs/beatos/beata-maria-repetto/imagens/restaurada_colorida_4k.jpg) |
| [Beata Maria Restituta Kafka](docs/beatos/beata-maria-restituta-kafka/index.md) | ![Beata Maria Restituta Kafka](docs/beatos/beata-maria-restituta-kafka/imagens/restaurada_colorida_4k.jpg) |
| [Beata Maria Romero Meneses](docs/beatos/beata-maria-romero-meneses/index.md) | ![Beata Maria Romero Meneses](docs/beatos/beata-maria-romero-meneses/imagens/restaurada_4k.jpg) |
| [Beata Maria Teresa de São José](docs/beatos/beata-maria-teresa-de-sao-jose/index.md) | ![Beata Maria Teresa de São José](docs/beatos/beata-maria-teresa-de-sao-jose/imagens/restaurada_4k.jpg) |
| [Beata Maria Teresa Ledóchowska](docs/beatos/beata-maria-teresa-ledochowska/index.md) | ![Beata Maria Teresa Ledóchowska](docs/beatos/beata-maria-teresa-ledochowska/imagens/restaurada_4k.jpg) |
| [Beata Mariana de Jesus](docs/beatos/beata-mariana-de-jesus/index.md) | ![Beata Mariana de Jesus](docs/beatos/beata-mariana-de-jesus/imagens/restaurada_4k.jpg) |
| [Beato Mariano de la Mata](docs/beatos/beato-mariano-de-la-mata/index.md) | ![Beato Mariano de la Mata](docs/beatos/beato-mariano-de-la-mata/imagens/restaurada_4k.jpg) |
| [Beata Marta Le Bouteiller](docs/beatos/beata-marta-le-bouteiller/index.md) | ![Beata Marta Le Bouteiller](docs/beatos/beata-marta-le-bouteiller/imagens/restaurada_colorida_4k.jpg) |
| [Beato Maurício Tornay](docs/beatos/beato-mauricio-tornay/index.md) | ![Beato Maurício Tornay](docs/beatos/beato-mauricio-tornay/imagens/restaurada_colorida_4k.jpg) |
| [Beato Michael McGivney](docs/beatos/beato-michael-mcgivney/index.md) | ![Beato Michael McGivney](docs/beatos/beato-michael-mcgivney/imagens/restaurada_4k.jpg) |
| [Beato Miguel Pro](docs/beatos/beato-miguel-pro/index.md) | ![Beato Miguel Pro](docs/beatos/beato-miguel-pro/imagens/restaurada_4k.jpg) |
| [Beato Miguel Rua](docs/beatos/beato-miguel-rua/index.md) | ![Beato Miguel Rua](docs/beatos/beato-miguel-rua/imagens/restaurada_colorida_4k.jpg) |
| [Beato Miguel Sopoćko](docs/beatos/beato-miguel-sopocko/index.md) | ![Beato Miguel Sopoćko](docs/beatos/beato-miguel-sopocko/imagens/restaurada_4k.jpg) |
| [Beata Miriam Teresa Demjanovich](docs/beatos/beata-miriam-teresa-demjanovich/index.md) | ![Beata Miriam Teresa Demjanovich](docs/beatos/beata-miriam-teresa-demjanovich/imagens/restaurada_4k.jpg) |
| [Beato Miroslav Bulešić](docs/beatos/beato-miroslav-bulesic/index.md) | ![Beato Miroslav Bulešić](docs/beatos/beato-miroslav-bulesic/imagens/restaurada_colorida_4k.jpg) |
| [Beato Moisés Lira](docs/beatos/beato-moises-lira/index.md) | ![Beato Moisés Lira](docs/beatos/beato-moises-lira/imagens/restaurada_colorida_4k.jpg) |
| [Beata Nhá Chica](docs/beatos/nha-chica/index.md) | ![Beata Nhá Chica](docs/beatos/nha-chica/imagens/restaurada_4k.jpg) |
| [Venerável Nicola D'Onofrio](docs/beatos/beato-nicola-donofrio/index.md) | ![Venerável Nicola D'Onofrio](docs/beatos/beato-nicola-donofrio/imagens/restaurada_colorida_4k.jpg) |
| [Beato Nicolau Steno](docs/beatos/beato-nicolau-steno/index.md) | ![Beato Nicolau Steno](docs/beatos/beato-nicolau-steno/imagens/restaurada_4k.jpg) |
| [Beato Odoardo Focherini](docs/beatos/beato-odoardo-focherini/index.md) | ![Beato Odoardo Focherini](docs/beatos/beato-odoardo-focherini/imagens/restaurada_4k.jpg) |
| [Padre Donizetti Tavares de Lima](docs/beatos/padre-donizetti/index.md) | ![Padre Donizetti Tavares de Lima](docs/beatos/padre-donizetti/imagens/padre_restaurada_colorida.jpg) |
| [Beato Padre Eustáquio](docs/beatos/beato-padre-eustaquio/index.md) | ![Beato Padre Eustáquio](docs/beatos/beato-padre-eustaquio/imagens/restaurada_4k.jpg) |
| [Beato Padre Victor](docs/beatos/padre-victor/index.md) | ![Beato Padre Victor](docs/beatos/padre-victor/imagens/restaurada_4k.jpg) |
| [Beata Paulina Jaricot](docs/beatos/beata-paulina-jaricot/index.md) | ![Beata Paulina Jaricot](docs/beatos/beata-paulina-jaricot/imagens/restaurada_4k.jpg) |
| [Beato Pedro Donders](docs/beatos/beato-pedro-donders/index.md) | ![Beato Pedro Donders](docs/beatos/beato-pedro-donders/imagens/restaurada_4k.jpg) |
| [Beato Pedro Vigne](docs/beatos/beato-pedro-vigne/index.md) | ![Beato Pedro Vigne](docs/beatos/beato-pedro-vigne/imagens/restaurada_4k.jpg) |
| [Beata Pierina Morosini](docs/beatos/beata-pierina-morosini/index.md) | ![Beata Pierina Morosini](docs/beatos/beata-pierina-morosini/imagens/restaurada_4k.jpg) |
| [Beata Pina Suriano](docs/beatos/beata-pina-suriano/index.md) | ![Beata Pina Suriano](docs/beatos/beata-pina-suriano/imagens/restaurada_colorida_4k.jpg) |
| [Beato Pino Puglisi](docs/beatos/beato-pino-puglisi/index.md) | ![Beato Pino Puglisi](docs/beatos/beato-pino-puglisi/imagens/restaurada_colorida_4k.jpg) |
| [Beato Pio IX](docs/beatos/beato-pio-ix/index.md) | ![Beato Pio IX](docs/beatos/beato-pio-ix/imagens/restaurada_colorida_4k.jpg) |
| [Beato Raimundo de Cápua](docs/beatos/beato-raimundo-de-capua/index.md) | ![Beato Raimundo de Cápua](docs/beatos/beato-raimundo-de-capua/imagens/restaurada_colorida_4k.jpg) |
| [Beato Richard Henkes](docs/beatos/beato-richard-henkes/index.md) | ![Beato Richard Henkes](docs/beatos/beato-richard-henkes/imagens/restaurada_4k.jpg) |
| [Beata Rita Amada de Jesus](docs/beatos/beata-rita-amada-de-jesus/index.md) | ![Beata Rita Amada de Jesus](docs/beatos/beata-rita-amada-de-jesus/imagens/restaurada_colorida_4k.jpg) |
| [Beato Rolando Rivi](docs/beatos/beato-rolando-rivi/index.md) | ![Beato Rolando Rivi](docs/beatos/beato-rolando-rivi/imagens/restaurada_colorida_4k.jpg) |
| [Beata Rosália Rendu](docs/beatos/beata-rosalia-rendu/index.md) | ![Beata Rosália Rendu](docs/beatos/beata-rosalia-rendu/imagens/restaurada_4k.jpg) |
| [Beato Rosário Livatino](docs/beatos/beato-rosario-livatino/index.md) | ![Beato Rosário Livatino](docs/beatos/beato-rosario-livatino/imagens/restaurada_4k.jpg) |
| [Beato Rupert Mayer](docs/beatos/beato-rupert-mayer/index.md) | ![Beato Rupert Mayer](docs/beatos/beato-rupert-mayer/imagens/restaurada_colorida_4k.jpg) |
| [Beato Rutilio Grande](docs/beatos/beato-rutilio-grande/index.md) | ![Beato Rutilio Grande](docs/beatos/beato-rutilio-grande/imagens/restaurada_4k.jpg) |
| [Beata Sancha de Portugal](docs/beatos/beata-sancha-de-portugal/index.md) | ![Beata Sancha de Portugal](docs/beatos/beata-sancha-de-portugal/imagens/restaurada_4k.jpg) |
| [Beata Sandra Sabattini](docs/beatos/beata-sandra-sabattini/index.md) | ![Beata Sandra Sabattini](docs/beatos/beata-sandra-sabattini/imagens/restaurada_4k.jpg) |
| [Beata Savina Petrilli](docs/beatos/beata-savina-petrilli/index.md) | ![Beata Savina Petrilli](docs/beatos/beata-savina-petrilli/imagens/restaurada_4k.jpg) |
| [Beato Solanus Casey](docs/beatos/beato-solanus-casey/index.md) | ![Beato Solanus Casey](docs/beatos/beato-solanus-casey/imagens/restaurada_4k.jpg) |
| [Beato Stanley Rother](docs/beatos/beato-stanley-rother/index.md) | ![Beato Stanley Rother](docs/beatos/beato-stanley-rother/imagens/restaurada_4k.jpg) |
| [Beato Stefan Wyszyński](docs/beatos/beato-stefan-wyszynski/index.md) | ![Beato Stefan Wyszyński](docs/beatos/beato-stefan-wyszynski/imagens/restaurada_4k.jpg) |
| [Beata Teresa de Portugal](docs/beatos/beata-teresa-de-portugal/index.md) | ![Beata Teresa de Portugal](docs/beatos/beata-teresa-de-portugal/imagens/restaurada_4k.jpg) |
| [Beato Teresio Olivelli](docs/beatos/beato-teresio-olivelli/index.md) | ![Beato Teresio Olivelli](docs/beatos/beato-teresio-olivelli/imagens/restaurada_4k.jpg) |
| [Beato Tiago Alberione](docs/beatos/beato-tiago-alberione/index.md) | ![Beato Tiago Alberione](docs/beatos/beato-tiago-alberione/imagens/restaurada_4k.jpg) |
| [Beato Tiago de Voragine](docs/beatos/beato-tiago-de-voragine/index.md) | ![Beato Tiago de Voragine](docs/beatos/beato-tiago-de-voragine/imagens/restaurada_4k.jpg) |
| [Beato Tito Zeman](docs/beatos/beato-tito-zeman/index.md) | ![Beato Tito Zeman](docs/beatos/beato-tito-zeman/imagens/restaurada_4k.jpg) |
| [Beato Urbano V](docs/beatos/beato-urbano-v/index.md) | ![Beato Urbano V](docs/beatos/beato-urbano-v/imagens/restaurada_4k.jpg) |
| [Beato Zeferino Namuncurá](docs/beatos/beato-zeferino-namuncura/index.md) | ![Beato Zeferino Namuncurá](docs/beatos/beato-zeferino-namuncura/imagens/restaurada_colorida_4k.jpg) |
| [Santo Afonso Maria de Ligório](docs/santos/santo-afonso-maria-de-ligorio/index.md) | ![Santo Afonso Maria de Ligório](docs/santos/santo-afonso-maria-de-ligorio/imagens/restaurada_4k.jpg) |
| [Santa Ágata](docs/santos/santa-agata/index.md) | ![Santa Ágata](docs/santos/santa-agata/imagens/restaurada_4k.jpg) |
| [Santo Agostinho](docs/santos/santo-agostinho/index.md) | ![Santo Agostinho](docs/santos/santo-agostinho/imagens/restaurada_4k.jpg) |
| [Santo Alberto Hurtado](docs/santos/santo-alberto-hurtado/index.md) | ![Santo Alberto Hurtado](docs/santos/santo-alberto-hurtado/imagens/restaurada_colorida_4k.jpg) |
| [Santo Alberto Magno](docs/santos/santo-alberto-magno/index.md) | ![Santo Alberto Magno](docs/santos/santo-alberto-magno/imagens/restaurada_4k.jpg) |
| [Santo Amaro](docs/santos/santo-amaro/index.md) | ![Santo Amaro](docs/santos/santo-amaro/imagens/restaurada_4k.jpg) |
| [Santo Ambrósio](docs/santos/santo-ambrosio/index.md) | ![Santo Ambrósio](docs/santos/santo-ambrosio/imagens/restaurada_4k.jpg) |
| [Santo André](docs/santos/santo-andre/index.md) | ![Santo André](docs/santos/santo-andre/imagens/restaurada_4k.jpg) |
| [Santo André Kim Taegõn](docs/santos/santo-andre-kim-taegon/index.md) | ![Santo André Kim Taegõn](docs/santos/santo-andre-kim-taegon/imagens/restaurada_4k.jpg) |
| [Santo Anselmo de Cantuária](docs/santos/santo-anselmo/index.md) | ![Santo Anselmo de Cantuária](docs/santos/santo-anselmo/imagens/restaurada_4k.jpg) |
| [Santo Antão do Deserto](docs/santos/santo-antao-do-deserto/index.md) | ![Santo Antão do Deserto](docs/santos/santo-antao-do-deserto/imagens/restaurada_4k.jpg) |
| [Santo Antônio de Pádua](docs/santos/santo-antonio/index.md) | ![Santo Antônio de Pádua](docs/santos/santo-antonio/imagens/restaurada_4k.jpg) |
| [Santo Antônio de Sant'Ana Galvão](docs/santos/santo-antonio-de-santana-galvao/index.md) | ![Santo Antônio de Sant'Ana Galvão](docs/santos/santo-antonio-de-santana-galvao/imagens/restaurada_4k.jpg) |
| [Santo Antônio Maria Claret](docs/santos/santo-antonio-maria-claret/index.md) | ![Santo Antônio Maria Claret](docs/santos/santo-antonio-maria-claret/imagens/restaurada_4k.jpg) |
| [Santa Apolônia](docs/santos/santa-apolonia/index.md) | ![Santa Apolônia](docs/santos/santa-apolonia/imagens/restaurada_4k.jpg) |
| [São Artêmides Zatti](docs/santos/sao-artemides-zatti/index.md) | ![São Artêmides Zatti](docs/santos/sao-artemides-zatti/imagens/restaurada_4k.jpg) |
| [Santo Atanásio](docs/santos/santo-atanasio/index.md) | ![Santo Atanásio](docs/santos/santo-atanasio/imagens/original.jpg) |
| [Santa Bárbara](docs/santos/santa-barbara/index.md) | ![Santa Bárbara](docs/santos/santa-barbara/imagens/restaurada_4k.jpg) |
| [São Bartolo Longo](docs/santos/sao-bartolo-longo/index.md) | ![São Bartolo Longo](docs/santos/sao-bartolo-longo/imagens/restaurada_colorida_4k.jpg) |
| [São Bartolomeu](docs/santos/sao-bartolomeu/index.md) | ![São Bartolomeu](docs/santos/sao-bartolomeu/imagens/restaurada_4k.jpg) |
| [São Bartolomeu dos Mártires](docs/santos/sao-bartolomeu-dos-martires/index.md) | ![São Bartolomeu dos Mártires](docs/santos/sao-bartolomeu-dos-martires/imagens/restaurada_4k.jpg) |
| [São Basílio Magno](docs/santos/sao-basilio-magno/index.md) | ![São Basílio Magno](docs/santos/sao-basilio-magno/imagens/restaurada_4k.jpg) |
| [Santa Beatriz da Silva](docs/santos/santa-beatriz-da-silva/index.md) | ![Santa Beatriz da Silva](docs/santos/santa-beatriz-da-silva/imagens/restaurada_4k.jpg) |
| [São Beda](docs/santos/sao-beda/index.md) | ![São Beda](docs/santos/sao-beda/imagens/restaurada_4k.jpg) |
| [Santa Benedita Cambiagio Frassinello](docs/santos/santa-benedita-cambiagio/index.md) | ![Santa Benedita Cambiagio Frassinello](docs/santos/santa-benedita-cambiagio/imagens/restaurada_colorida_4k.jpg) |
| [São Benedito](docs/santos/sao-benedito/index.md) | ![São Benedito](docs/santos/sao-benedito/imagens/restaurada_4k.jpg) |
| [São Bento](docs/santos/sao-bento/index.md) | ![São Bento](docs/santos/sao-bento/imagens/restaurada_4k.jpg) |
| [São Bento Menni](docs/santos/sao-bento-menni/index.md) | ![São Bento Menni](docs/santos/sao-bento-menni/imagens/restaurada_4k.jpg) |
| [Santa Bernadete Soubirous](docs/santos/santa-bernadete-soubirous/index.md) | ![Santa Bernadete Soubirous](docs/santos/santa-bernadete-soubirous/imagens/restaurada_colorida_4k.jpg) |
| [São Bernardino de Sena](docs/santos/sao-bernardino-de-sena/index.md) | ![São Bernardino de Sena](docs/santos/sao-bernardino-de-sena/imagens/restaurada_4k.jpg) |
| [São Bernardo de Claraval](docs/santos/sao-bernardo/index.md) | ![São Bernardo de Claraval](docs/santos/sao-bernardo/imagens/restaurada_4k.jpg) |
| [São Boaventura](docs/santos/sao-boaventura/index.md) | ![São Boaventura](docs/santos/sao-boaventura/imagens/restaurada_4k.jpg) |
| [São Bonifácio](docs/santos/sao-bonifacio/index.md) | ![São Bonifácio](docs/santos/sao-bonifacio/imagens/restaurada_4k.jpg) |
| [São Brás](docs/santos/sao-bras/index.md) | ![São Brás](docs/santos/sao-bras/imagens/restaurada_4k.jpg) |
| [Santa Brígida da Suécia](docs/santos/santa-brigida-da-suecia/index.md) | ![Santa Brígida da Suécia](docs/santos/santa-brigida-da-suecia/imagens/restaurada_4k.jpg) |
| [São Bruno](docs/santos/sao-bruno/index.md) | ![São Bruno](docs/santos/sao-bruno/imagens/restaurada_4k.jpg) |
| [São Caetano de Thiene](docs/santos/sao-caetano-de-thiene/index.md) | ![São Caetano de Thiene](docs/santos/sao-caetano-de-thiene/imagens/restaurada_colorida_4k.jpg) |
| [São Camilo de Lellis](docs/santos/sao-camilo-de-lellis/index.md) | ![São Camilo de Lellis](docs/santos/sao-camilo-de-lellis/imagens/restaurada_4k.jpg) |
| [São Carlo Acutis](docs/santos/carlo-acutis/index.md) | ![São Carlo Acutis](docs/santos/carlo-acutis/imagens/restaurada_4k.jpg) |
| [São Carlos Borromeu](docs/santos/sao-carlos-borromeu/index.md) | ![São Carlos Borromeu](docs/santos/sao-carlos-borromeu/imagens/restaurada_4k.jpg) |
| [São Carlos Lwanga](docs/santos/sao-carlos-lwanga/index.md) | ![São Carlos Lwanga](docs/santos/sao-carlos-lwanga/imagens/restaurada_4k.jpg) |
| [Santa Catarina de Alexandria](docs/santos/santa-catarina-de-alexandria/index.md) | ![Santa Catarina de Alexandria](docs/santos/santa-catarina-de-alexandria/imagens/restaurada_4k.jpg) |
| [Santa Catarina de Sena](docs/santos/santa-catarina-de-sena/index.md) | ![Santa Catarina de Sena](docs/santos/santa-catarina-de-sena/imagens/restaurada_4k.jpg) |
| [Santa Catarina Labouré](docs/santos/santa-catarina-laboure/index.md) | ![Santa Catarina Labouré](docs/santos/santa-catarina-laboure/imagens/restaurada_4k.jpg) |
| [Santa Cecília](docs/santos/santa-cecilia/index.md) | ![Santa Cecília](docs/santos/santa-cecilia/imagens/restaurada_4k.jpg) |
| [São Charbel Makhlouf](docs/santos/sao-charbel/index.md) | ![São Charbel Makhlouf](docs/santos/sao-charbel/imagens/restaurada_4k.jpg) |
| [São Charles de Foucauld](docs/santos/sao-charles-de-foucauld/index.md) | ![São Charles de Foucauld](docs/santos/sao-charles-de-foucauld/imagens/restaurada_colorida_4k.jpg) |
| [Santa Clara de Assis](docs/santos/santa-clara-de-assis/index.md) | ![Santa Clara de Assis](docs/santos/santa-clara-de-assis/imagens/restaurada_4k.jpg) |
| [Santa Clotilde](docs/santos/santa-clotilde/index.md) | ![Santa Clotilde](docs/santos/santa-clotilde/imagens/restaurada_4k.jpg) |
| [São Columbano](docs/santos/sao-columbano/index.md) | ![São Columbano](docs/santos/sao-columbano/imagens/restaurada_4k.jpg) |
| [São Crispino de Viterbo](docs/santos/sao-crispino-de-viterbo/index.md) | ![São Crispino de Viterbo](docs/santos/sao-crispino-de-viterbo/imagens/restaurada_4k.jpg) |
| [São Cristóvão](docs/santos/sao-cristovao/index.md) | ![São Cristóvão](docs/santos/sao-cristovao/imagens/restaurada_4k.jpg) |
| [São Damião de Molokai](docs/santos/sao-damiao-de-molokai/index.md) | ![São Damião de Molokai](docs/santos/sao-damiao-de-molokai/imagens/restaurada_colorida_4k.jpg) |
| [São Dimas](docs/santos/sao-dimas/index.md) | ![São Dimas](docs/santos/sao-dimas/imagens/restaurada_colorida_4k.jpg) |
| [Santa Dinfna](docs/santos/santa-dinfna/index.md) | ![Santa Dinfna](docs/santos/santa-dinfna/imagens/restaurada_4k.jpg) |
| [São Domingos de Gusmão](docs/santos/sao-domingos-de-gusmao/index.md) | ![São Domingos de Gusmão](docs/santos/sao-domingos-de-gusmao/imagens/restaurada_4k.jpg) |
| [São Domingos Sávio](docs/santos/sao-domingos-savio/index.md) | ![São Domingos Sávio](docs/santos/sao-domingos-savio/imagens/restaurada_4k.jpg) |
| [Santa Dulce dos Pobres](docs/santos/santa-dulce-dos-pobres/index.md) | ![Santa Dulce dos Pobres](docs/santos/santa-dulce-dos-pobres/imagens/restaurada_4k.jpg) |
| [Santo Eduardo, o Confessor](docs/santos/santo-eduardo-o-confessor/index.md) | ![Santo Eduardo, o Confessor](docs/santos/santo-eduardo-o-confessor/imagens/restaurada_colorida_4k.jpg) |
| [Santa Edwiges](docs/santos/santa-edwiges/index.md) | ![Santa Edwiges](docs/santos/santa-edwiges/imagens/restaurada_4k.jpg) |
| [Santa Elena Guerra](docs/santos/santa-elena-guerra/index.md) | ![Santa Elena Guerra](docs/santos/santa-elena-guerra/imagens/restaurada_4k.jpg) |
| [Santa Escolástica](docs/santos/santa-escolastica/index.md) | ![Santa Escolástica](docs/santos/santa-escolastica/imagens/restaurada_4k.jpg) |
| [São Estevão](docs/santos/sao-estevao/index.md) | ![São Estevão](docs/santos/sao-estevao/imagens/restaurada_4k.jpg) |
| [Santo Estêvão da Hungria](docs/santos/santo-estevao-da-hungria/index.md) | ![Santo Estêvão da Hungria](docs/santos/santo-estevao-da-hungria/imagens/restaurada_4k.jpg) |
| [Santa Eulália de Mérida](docs/santos/santa-eulalia-de-merida/index.md) | ![Santa Eulália de Mérida](docs/santos/santa-eulalia-de-merida/imagens/restaurada_4k.jpg) |
| [Santo Expedito](docs/santos/santo-expedito/index.md) | ![Santo Expedito](docs/santos/santo-expedito/imagens/restaurada_4k.jpg) |
| [Santa Faustina Kowalska](docs/santos/santa-faustina-kowalska/index.md) | ![Santa Faustina Kowalska](docs/santos/santa-faustina-kowalska/imagens/restaurada_4k.jpg) |
| [São Filipe](docs/santos/sao-filipe/index.md) | ![São Filipe](docs/santos/sao-filipe/imagens/restaurada_4k.jpg) |
| [São Filipe Neri](docs/santos/sao-filipe-neri/index.md) | ![São Filipe Neri](docs/santos/sao-filipe-neri/imagens/restaurada_4k.jpg) |
| [Santa Filomena](docs/santos/santa-filomena/index.md) | ![Santa Filomena](docs/santos/santa-filomena/imagens/restaurada_4k.jpg) |
| [São Francisco de Assis](docs/santos/sao-francisco-de-assis/index.md) | ![São Francisco de Assis](docs/santos/sao-francisco-de-assis/imagens/restaurada_4k.jpg) |
| [São Francisco de Paula](docs/santos/sao-francisco-de-paula/index.md) | ![São Francisco de Paula](docs/santos/sao-francisco-de-paula/imagens/restaurada_4k.jpg) |
| [São Francisco de Sales](docs/santos/sao-francisco-de-sales/index.md) | ![São Francisco de Sales](docs/santos/sao-francisco-de-sales/imagens/restaurada_4k.jpg) |
| [São Francisco Marto](docs/santos/sao-francisco-marto/index.md) | ![São Francisco Marto](docs/santos/sao-francisco-marto/imagens/restaurada_4k.jpg) |
| [São Francisco Xavier](docs/santos/sao-francisco-xavier/index.md) | ![São Francisco Xavier](docs/santos/sao-francisco-xavier/imagens/restaurada_4k.jpg) |
| [São Gabriel de Nossa Senhora das Dores](docs/santos/sao-gabriel-de-nossa-senhora-das-dores/index.md) | ![São Gabriel de Nossa Senhora das Dores](docs/santos/sao-gabriel-de-nossa-senhora-das-dores/imagens/restaurada_4k.jpg) |
| [São Gaspar del Búfalo](docs/santos/sao-gaspar-del-bufalo/index.md) | ![São Gaspar del Búfalo](docs/santos/sao-gaspar-del-bufalo/imagens/original.jpg) |
| [Santa Gemma Galgani](docs/santos/santa-gemma-galgani/index.md) | ![Santa Gemma Galgani](docs/santos/santa-gemma-galgani/imagens/restaurada_colorida_4k.jpg) |
| [Santa Genoveva](docs/santos/santa-genoveva/index.md) | ![Santa Genoveva](docs/santos/santa-genoveva/imagens/restaurada_4k.jpg) |
| [São Geraldo Majella](docs/santos/sao-geraldo-majella/index.md) | ![São Geraldo Majella](docs/santos/sao-geraldo-majella/imagens/restaurada_4k.jpg) |
| [Santa Gertrudes, a Grande](docs/santos/santa-gertrudes/index.md) | ![Santa Gertrudes, a Grande](docs/santos/santa-gertrudes/imagens/restaurada_4k.jpg) |
| [Santa Gianna Beretta Molla](docs/santos/santa-gianna-beretta-molla/index.md) | ![Santa Gianna Beretta Molla](docs/santos/santa-gianna-beretta-molla/imagens/restaurada_4k.jpg) |
| [São Gregório Magno](docs/santos/sao-gregorio-magno/index.md) | ![São Gregório Magno](docs/santos/sao-gregorio-magno/imagens/restaurada_4k.jpg) |
| [São Guido Maria Conforti](docs/santos/sao-guido-maria-conforti/index.md) | ![São Guido Maria Conforti](docs/santos/sao-guido-maria-conforti/imagens/restaurada_colorida_4k.jpg) |
| [Santa Helena](docs/santos/santa-helena/index.md) | ![Santa Helena](docs/santos/santa-helena/imagens/restaurada_4k.jpg) |
| [Santa Hildegarda de Bingen](docs/santos/santa-hildegarda-de-bingen/index.md) | ![Santa Hildegarda de Bingen](docs/santos/santa-hildegarda-de-bingen/imagens/restaurada_4k.jpg) |
| [Santo Inácio de Antioquia](docs/santos/santo-inacio-de-antioquia/index.md) | ![Santo Inácio de Antioquia](docs/santos/santo-inacio-de-antioquia/imagens/restaurada_4k.jpg) |
| [Santo Inácio de Loyola](docs/santos/santo-inacio-de-loyola/index.md) | ![Santo Inácio de Loyola](docs/santos/santo-inacio-de-loyola/imagens/restaurada_4k.jpg) |
| [Santa Inês](docs/santos/santa-ines/index.md) | ![Santa Inês](docs/santos/santa-ines/imagens/restaurada_4k.jpg) |
| [Santo Ireneu de Lyon](docs/santos/santo-ireneu-de-lyon/index.md) | ![Santo Ireneu de Lyon](docs/santos/santo-ireneu-de-lyon/imagens/restaurada_4k.jpg) |
| [Santa Isabel da Hungria](docs/santos/santa-isabel-da-hungria/index.md) | ![Santa Isabel da Hungria](docs/santos/santa-isabel-da-hungria/imagens/restaurada_4k.jpg) |
| [Santa Isabel de Portugal](docs/santos/santa-isabel-de-portugal/index.md) | ![Santa Isabel de Portugal](docs/santos/santa-isabel-de-portugal/imagens/restaurada_4k.jpg) |
| [Santo Isidoro de Sevilha](docs/santos/santo-isidoro-de-sevilha/index.md) | ![Santo Isidoro de Sevilha](docs/santos/santo-isidoro-de-sevilha/imagens/restaurada_4k.jpg) |
| [Santo Isidro Lavrador](docs/santos/santo-isidro-lavrador/index.md) | ![Santo Isidro Lavrador](docs/santos/santo-isidro-lavrador/imagens/restaurada_4k.jpg) |
| [Santo Ivo de Kermartin](docs/santos/santo-ivo/index.md) | ![Santo Ivo de Kermartin](docs/santos/santo-ivo/imagens/restaurada_4k.jpg) |
| [Santa Jacinta Marto](docs/santos/santa-jacinta-marto/index.md) | ![Santa Jacinta Marto](docs/santos/santa-jacinta-marto/imagens/restaurada_colorida_4k.jpg) |
| [São Jerônimo](docs/santos/sao-jeronimo/index.md) | ![São Jerônimo](docs/santos/sao-jeronimo/imagens/restaurada_4k.jpg) |
| [Santa Joana d'Arc](docs/santos/santa-joana-d-arc/index.md) | ![Santa Joana d'Arc](docs/santos/santa-joana-d-arc/imagens/restaurada_4k.jpg) |
| [Santa Joana de Chantal](docs/santos/santa-joana-de-chantal/index.md) | ![Santa Joana de Chantal](docs/santos/santa-joana-de-chantal/imagens/restaurada_4k.jpg) |
| [São João Batista](docs/santos/sao-joao-batista/index.md) | ![São João Batista](docs/santos/sao-joao-batista/imagens/restaurada_4k.jpg) |
| [São João Batista de La Salle](docs/santos/sao-joao-batista-de-la-salle/index.md) | ![São João Batista de La Salle](docs/santos/sao-joao-batista-de-la-salle/imagens/restaurada_4k.jpg) |
| [São João Bosco](docs/santos/sao-joao-bosco/index.md) | ![São João Bosco](docs/santos/sao-joao-bosco/imagens/restaurada_4k.jpg) |
| [São João Calábria](docs/santos/sao-joao-calabria/index.md) | ![São João Calábria](docs/santos/sao-joao-calabria/imagens/restaurada_4k.jpg) |
| [São João Crisóstomo](docs/santos/sao-joao-crisostomo/index.md) | ![São João Crisóstomo](docs/santos/sao-joao-crisostomo/imagens/restaurada_4k.jpg) |
| [São João da Cruz](docs/santos/sao-joao-da-cruz/index.md) | ![São João da Cruz](docs/santos/sao-joao-da-cruz/imagens/restaurada_4k.jpg) |
| [São João Damasceno](docs/santos/sao-joao-damasceno/index.md) | ![São João Damasceno](docs/santos/sao-joao-damasceno/imagens/restaurada_4k.jpg) |
| [São João de Ávila](docs/santos/sao-joao-de-avila/index.md) | ![São João de Ávila](docs/santos/sao-joao-de-avila/imagens/restaurada_4k.jpg) |
| [São João de Brito](docs/santos/sao-joao-de-brito/index.md) | ![São João de Brito](docs/santos/sao-joao-de-brito/imagens/restaurada_4k.jpg) |
| [São João de Capistrano](docs/santos/sao-joao-de-capistrano/index.md) | ![São João de Capistrano](docs/santos/sao-joao-de-capistrano/imagens/restaurada_4k.jpg) |
| [São João de Deus](docs/santos/sao-joao-de-deus/index.md) | ![São João de Deus](docs/santos/sao-joao-de-deus/imagens/restaurada_4k.jpg) |
| [São João Diego Cuauhtlatoatzin](docs/santos/sao-joao-diego/index.md) | ![São João Diego Cuauhtlatoatzin](docs/santos/sao-joao-diego/imagens/restaurada_4k.jpg) |
| [São João Eudes](docs/santos/sao-joao-eudes/index.md) | ![São João Eudes](docs/santos/sao-joao-eudes/imagens/restaurada_colorida_4k.jpg) |
| [São João Evangelista](docs/santos/sao-joao-evangelista/index.md) | ![São João Evangelista](docs/santos/sao-joao-evangelista/imagens/restaurada_4k.jpg) |
| [São João Macías](docs/santos/sao-joao-macias/index.md) | ![São João Macías](docs/santos/sao-joao-macias/imagens/restaurada_4k.jpg) |
| [São João Maria Vianney](docs/santos/sao-joao-maria-vianney/index.md) | ![São João Maria Vianney](docs/santos/sao-joao-maria-vianney/imagens/restaurada_4k.jpg) |
| [São João Nepomuceno](docs/santos/sao-joao-nepomuceno/index.md) | ![São João Nepomuceno](docs/santos/sao-joao-nepomuceno/imagens/restaurada_4k.jpg) |
| [São João Neumann](docs/santos/sao-joao-neumann/index.md) | ![São João Neumann](docs/santos/sao-joao-neumann/imagens/restaurada_colorida_4k.jpg) |
| [São João Paulo II](docs/santos/sao-joao-paulo-ii/index.md) | ![São João Paulo II](docs/santos/sao-joao-paulo-ii/imagens/restaurada_colorida_4k.jpg) |
| [São João XXIII](docs/santos/sao-joao-xxiii/index.md) | ![São João XXIII](docs/santos/sao-joao-xxiii/imagens/restaurada_4k.jpg) |
| [São Jorge](docs/santos/sao-jorge/index.md) | ![São Jorge](docs/santos/sao-jorge/imagens/restaurada_4k.jpg) |
| [São José](docs/santos/sao-jose/index.md) | ![São José](docs/santos/sao-jose/imagens/restaurada_4k.jpg) |
| [São José de Anchieta](docs/santos/sao-jose-de-anchieta/index.md) | ![São José de Anchieta](docs/santos/sao-jose-de-anchieta/imagens/restaurada_4k.jpg) |
| [São José de Cupertino](docs/santos/sao-jose-de-cupertino/index.md) | ![São José de Cupertino](docs/santos/sao-jose-de-cupertino/imagens/restaurada_4k.jpg) |
| [São José Gregório Hernández](docs/santos/sao-jose-gregorio-hernandez/index.md) | ![São José Gregório Hernández](docs/santos/sao-jose-gregorio-hernandez/imagens/restaurada_4k.jpg) |
| [São José Marello](docs/santos/sao-jose-marello/index.md) | ![São José Marello](docs/santos/sao-jose-marello/imagens/restaurada_4k.jpg) |
| [São José Moscati](docs/santos/sao-jose-moscati/index.md) | ![São José Moscati](docs/santos/sao-jose-moscati/imagens/restaurada_4k.jpg) |
| [São José Sánchez del Río](docs/santos/sao-jose-sanchez-del-rio/index.md) | ![São José Sánchez del Río](docs/santos/sao-jose-sanchez-del-rio/imagens/restaurada_4k.jpg) |
| [Santa Josefina Bakhita](docs/santos/santa-josefina-bakhita/index.md) | ![Santa Josefina Bakhita](docs/santos/santa-josefina-bakhita/imagens/restaurada_4k.jpg) |
| [São Josemaria Escrivá](docs/santos/sao-josemaria-escriva/index.md) | ![São Josemaria Escrivá](docs/santos/sao-josemaria-escriva/imagens/restaurada_colorida_4k.jpg) |
| [São Judas Tadeu](docs/santos/sao-judas-tadeu/index.md) | ![São Judas Tadeu](docs/santos/sao-judas-tadeu/imagens/restaurada_4k.jpg) |
| [São Junípero Serra](docs/santos/sao-junipero-serra/index.md) | ![São Junípero Serra](docs/santos/sao-junipero-serra/imagens/original.jpg) |
| [São Justino Mártir](docs/santos/sao-justino-martir/index.md) | ![São Justino Mártir](docs/santos/sao-justino-martir/imagens/restaurada_4k.jpg) |
| [Santa Kateri Tekakwitha](docs/santos/santa-kateri-tekakwitha/index.md) | ![Santa Kateri Tekakwitha](docs/santos/santa-kateri-tekakwitha/imagens/restaurada_4k.jpg) |
| [São Lázaro de Betânia](docs/santos/sao-lazaro-de-betania/index.md) | ![São Lázaro de Betânia](docs/santos/sao-lazaro-de-betania/imagens/restaurada_4k.jpg) |
| [São Leão Magno](docs/santos/sao-leao-magno/index.md) | ![São Leão Magno](docs/santos/sao-leao-magno/imagens/restaurada_4k.jpg) |
| [São Longuinho](docs/santos/sao-longuinho/index.md) | ![São Longuinho](docs/santos/sao-longuinho/imagens/restaurada_4k.jpg) |
| [São Lourenço](docs/santos/sao-lourenco/index.md) | ![São Lourenço](docs/santos/sao-lourenco/imagens/restaurada_4k.jpg) |
| [São Lourenço Ruiz](docs/santos/sao-lourenco-ruiz/index.md) | ![São Lourenço Ruiz](docs/santos/sao-lourenco-ruiz/imagens/restaurada_4k.jpg) |
| [São Lucas](docs/santos/sao-lucas/index.md) | ![São Lucas](docs/santos/sao-lucas/imagens/restaurada_4k.jpg) |
| [São Ludovico Pavoni](docs/santos/sao-ludovico-pavoni/index.md) | ![São Ludovico Pavoni](docs/santos/sao-ludovico-pavoni/imagens/restaurada_4k.jpg) |
| [São Luís Gonzaga](docs/santos/sao-luis-gonzaga/index.md) | ![São Luís Gonzaga](docs/santos/sao-luis-gonzaga/imagens/restaurada_4k.jpg) |
| [São Luís IX](docs/santos/sao-luis-ix/index.md) | ![São Luís IX](docs/santos/sao-luis-ix/imagens/restaurada_4k.jpg) |
| [São Luís Maria Grignion de Montfort](docs/santos/sao-luis-maria-grignion-de-montfort/index.md) | ![São Luís Maria Grignion de Montfort](docs/santos/sao-luis-maria-grignion-de-montfort/imagens/restaurada_4k.jpg) |
| [São Luís Orione](docs/santos/sao-luis-orione/index.md) | ![São Luís Orione](docs/santos/sao-luis-orione/imagens/restaurada_4k.jpg) |
| [Santa Luísa de Marillac](docs/santos/santa-luisa-de-marillac/index.md) | ![Santa Luísa de Marillac](docs/santos/santa-luisa-de-marillac/imagens/restaurada_4k.jpg) |
| [Santa Luzia](docs/santos/santa-luzia/index.md) | ![Santa Luzia](docs/santos/santa-luzia/imagens/restaurada_4k.jpg) |
| [Santa Mama Antula (María Antonia de Paz y Figueroa)](docs/santos/santa-mama-antula/index.md) | ![Santa Mama Antula (María Antonia de Paz y Figueroa)](docs/santos/santa-mama-antula/imagens/restaurada_4k.jpg) |
| [São Marcelino Champagnat](docs/santos/sao-marcelino-champagnat/index.md) | ![São Marcelino Champagnat](docs/santos/sao-marcelino-champagnat/imagens/restaurada_4k.jpg) |
| [São Marcos](docs/santos/sao-marcos/index.md) | ![São Marcos](docs/santos/sao-marcos/imagens/restaurada_4k.jpg) |
| [Santa Margarida Maria Alacoque](docs/santos/santa-margarida-maria-alacoque/index.md) | ![Santa Margarida Maria Alacoque](docs/santos/santa-margarida-maria-alacoque/imagens/restaurada_4k.jpg) |
| [Santa Maria Domingas Mazzarello](docs/santos/santa-maria-domingas-mazzarello/index.md) | ![Santa Maria Domingas Mazzarello](docs/santos/santa-maria-domingas-mazzarello/imagens/restaurada_colorida_4k.jpg) |
| [Santa Maria Goretti](docs/santos/santa-maria-goretti/index.md) | ![Santa Maria Goretti](docs/santos/santa-maria-goretti/imagens/restaurada_4k.jpg) |
| [Santa Maria Madalena](docs/santos/santa-maria-madalena/index.md) | ![Santa Maria Madalena](docs/santos/santa-maria-madalena/imagens/restaurada_4k.jpg) |
| [Santa Maria Troncatti](docs/santos/santa-maria-troncatti/index.md) | ![Santa Maria Troncatti](docs/santos/santa-maria-troncatti/imagens/restaurada_4k.jpg) |
| [Santa Marta](docs/santos/santa-marta/index.md) | ![Santa Marta](docs/santos/santa-marta/imagens/restaurada_4k.jpg) |
| [São Martinho de Lima](docs/santos/sao-martinho-de-lima/index.md) | ![São Martinho de Lima](docs/santos/sao-martinho-de-lima/imagens/restaurada_4k.jpg) |
| [São Martinho de Tours](docs/santos/sao-martinho-de-tours/index.md) | ![São Martinho de Tours](docs/santos/sao-martinho-de-tours/imagens/restaurada_4k.jpg) |
| [São Mateus](docs/santos/sao-mateus/index.md) | ![São Mateus](docs/santos/sao-mateus/imagens/restaurada_4k.jpg) |
| [São Matias](docs/santos/sao-matias/index.md) | ![São Matias](docs/santos/sao-matias/imagens/restaurada_4k.jpg) |
| [São Maximiliano Kolbe](docs/santos/sao-maximiliano-kolbe/index.md) | ![São Maximiliano Kolbe](docs/santos/sao-maximiliano-kolbe/imagens/restaurada_colorida_4k.jpg) |
| [Santa Mônica](docs/santos/santa-monica/index.md) | ![Santa Mônica](docs/santos/santa-monica/imagens/restaurada_4k.jpg) |
| [São Nicolau](docs/santos/sao-nicolau/index.md) | ![São Nicolau](docs/santos/sao-nicolau/imagens/restaurada_4k.jpg) |
| [São Norberto](docs/santos/sao-norberto/index.md) | ![São Norberto](docs/santos/sao-norberto/imagens/restaurada_4k.jpg) |
| [São Nuno de Santa Maria](docs/santos/sao-nuno-de-santa-maria/index.md) | ![São Nuno de Santa Maria](docs/santos/sao-nuno-de-santa-maria/imagens/restaurada_4k.jpg) |
| [São Oscar Romero](docs/santos/sao-oscar-romero/index.md) | ![São Oscar Romero](docs/santos/sao-oscar-romero/imagens/restaurada_4k.jpg) |
| [São Padre Pio de Pietrelcina](docs/santos/sao-padre-pio/index.md) | ![São Padre Pio de Pietrelcina](docs/santos/sao-padre-pio/imagens/restaurada_4k.jpg) |
| [São Pantaleão](docs/santos/sao-pantaleao/index.md) | ![São Pantaleão](docs/santos/sao-pantaleao/imagens/restaurada_4k.jpg) |
| [São Patrício](docs/santos/sao-patricio/index.md) | ![São Patrício](docs/santos/sao-patricio/imagens/restaurada_4k.jpg) |
| [Santa Paulina do Coração Agonizante de Jesus](docs/santos/santa-paulina/index.md) | ![Santa Paulina do Coração Agonizante de Jesus](docs/santos/santa-paulina/imagens/restaurada_colorida_4k.jpg) |
| [São Paulo](docs/santos/sao-paulo/index.md) | ![São Paulo](docs/santos/sao-paulo/imagens/restaurada_4k.jpg) |
| [São Paulo da Cruz](docs/santos/sao-paulo-da-cruz/index.md) | ![São Paulo da Cruz](docs/santos/sao-paulo-da-cruz/imagens/restaurada_4k.jpg) |
| [São Paulo VI](docs/santos/sao-paulo-vi/index.md) | ![São Paulo VI](docs/santos/sao-paulo-vi/imagens/restaurada_4k.jpg) |
| [São Pedro](docs/santos/sao-pedro/index.md) | ![São Pedro](docs/santos/sao-pedro/imagens/restaurada_4k.jpg) |
| [São Pedro Canísio](docs/santos/sao-pedro-canisio/index.md) | ![São Pedro Canísio](docs/santos/sao-pedro-canisio/imagens/restaurada_4k.jpg) |
| [São Pedro Claver](docs/santos/sao-pedro-claver/index.md) | ![São Pedro Claver](docs/santos/sao-pedro-claver/imagens/restaurada_4k.jpg) |
| [São Pedro Damião](docs/santos/sao-pedro-damiao/index.md) | ![São Pedro Damião](docs/santos/sao-pedro-damiao/imagens/restaurada_4k.jpg) |
| [São Pedro de Alcântara](docs/santos/sao-pedro-de-alcantara/index.md) | ![São Pedro de Alcântara](docs/santos/sao-pedro-de-alcantara/imagens/restaurada_4k.jpg) |
| [São Pedro Julião Eymard](docs/santos/sao-pedro-juliao-eymard/index.md) | ![São Pedro Julião Eymard](docs/santos/sao-pedro-juliao-eymard/imagens/restaurada_4k.jpg) |
| [São Pedro Nolasco](docs/santos/sao-pedro-nolasco/index.md) | ![São Pedro Nolasco](docs/santos/sao-pedro-nolasco/imagens/restaurada_4k.jpg) |
| [São Peregrino](docs/santos/sao-peregrino/index.md) | ![São Peregrino](docs/santos/sao-peregrino/imagens/restaurada_4k.jpg) |
| [São Pier Giorgio Frassati](docs/santos/pier-giorgio-frassati/index.md) | ![São Pier Giorgio Frassati](docs/santos/pier-giorgio-frassati/imagens/restaurada_colorida_4k.jpg) |
| [São Pio V](docs/santos/sao-pio-v/index.md) | ![São Pio V](docs/santos/sao-pio-v/imagens/restaurada_4k.jpg) |
| [São Pio X](docs/santos/sao-pio-x/index.md) | ![São Pio X](docs/santos/sao-pio-x/imagens/restaurada_colorida_4k.jpg) |
| [São Policarpo de Esmirna](docs/santos/sao-policarpo/index.md) | ![São Policarpo de Esmirna](docs/santos/sao-policarpo/imagens/restaurada_4k.jpg) |
| [Santa Rita de Cássia](docs/santos/santa-rita-de-cassia/index.md) | ![Santa Rita de Cássia](docs/santos/santa-rita-de-cassia/imagens/restaurada_4k.jpg) |
| [São Roberto Belarmino](docs/santos/sao-roberto-belarmino/index.md) | ![São Roberto Belarmino](docs/santos/sao-roberto-belarmino/imagens/restaurada_4k.jpg) |
| [São Roque](docs/santos/sao-roque/index.md) | ![São Roque](docs/santos/sao-roque/imagens/restaurada_4k.jpg) |
| [Santa Rosa de Lima](docs/santos/santa-rosa-de-lima/index.md) | ![Santa Rosa de Lima](docs/santos/santa-rosa-de-lima/imagens/restaurada_4k.jpg) |
| [São Sebastião](docs/santos/sao-sebastiao/index.md) | ![São Sebastião](docs/santos/sao-sebastiao/imagens/restaurada_4k.jpg) |
| [São Simão](docs/santos/sao-simao/index.md) | ![São Simão](docs/santos/sao-simao/imagens/restaurada_4k.jpg) |
| [São Tarcísio](docs/santos/sao-tarcisio/index.md) | ![São Tarcísio](docs/santos/sao-tarcisio/imagens/restaurada_4k.jpg) |
| [Santa Teresa Benedita da Cruz](docs/santos/santa-teresa-benedita-da-cruz/index.md) | ![Santa Teresa Benedita da Cruz](docs/santos/santa-teresa-benedita-da-cruz/imagens/restaurada_4k.jpg) |
| [Santa Teresa de Ávila](docs/santos/santa-teresa-de-avila/index.md) | ![Santa Teresa de Ávila](docs/santos/santa-teresa-de-avila/imagens/restaurada_4k.jpg) |
| [Santa Teresa de Calcutá](docs/santos/santa-teresa-de-calcuta/index.md) | ![Santa Teresa de Calcutá](docs/santos/santa-teresa-de-calcuta/imagens/restaurada_4k.jpg) |
| [Santa Teresa dos Andes](docs/santos/santa-teresa-dos-andes/index.md) | ![Santa Teresa dos Andes](docs/santos/santa-teresa-dos-andes/imagens/restaurada_4k.jpg) |
| [Santa Teresinha do Menino Jesus](docs/santos/santa-teresinha-do-menino-jesus/index.md) | ![Santa Teresinha do Menino Jesus](docs/santos/santa-teresinha-do-menino-jesus/imagens/restaurada_4k.jpg) |
| [São Tiago Maior](docs/santos/sao-tiago-maior/index.md) | ![São Tiago Maior](docs/santos/sao-tiago-maior/imagens/restaurada_4k.jpg) |
| [São Tiago Menor](docs/santos/sao-tiago-menor/index.md) | ![São Tiago Menor](docs/santos/sao-tiago-menor/imagens/restaurada_4k.jpg) |
| [São Tito Brandsma](docs/santos/sao-tito-brandsma/index.md) | ![São Tito Brandsma](docs/santos/sao-tito-brandsma/imagens/restaurada_colorida_4k.jpg) |
| [São Tomás Becket](docs/santos/sao-tomas-becket/index.md) | ![São Tomás Becket](docs/santos/sao-tomas-becket/imagens/restaurada_4k.jpg) |
| [São Tomás de Aquino](docs/santos/sao-tomas-de-aquino/index.md) | ![São Tomás de Aquino](docs/santos/sao-tomas-de-aquino/imagens/restaurada_4k.jpg) |
| [São Tomás de Vilanova](docs/santos/sao-tomas-de-vilanova/index.md) | ![São Tomás de Vilanova](docs/santos/sao-tomas-de-vilanova/imagens/restaurada_4k.jpg) |
| [São Tomás More](docs/santos/sao-tomas-more/index.md) | ![São Tomás More](docs/santos/sao-tomas-more/imagens/restaurada_4k.jpg) |
| [São Tomé](docs/santos/sao-tome/index.md) | ![São Tomé](docs/santos/sao-tome/imagens/restaurada_4k.jpg) |
| [São Valentim](docs/santos/sao-valentim/index.md) | ![São Valentim](docs/santos/sao-valentim/imagens/restaurada_4k.jpg) |
| [São Venceslau](docs/santos/sao-venceslau/index.md) | ![São Venceslau](docs/santos/sao-venceslau/imagens/restaurada_4k.jpg) |
| [Santa Verônica](docs/santos/santa-veronica/index.md) | ![Santa Verônica](docs/santos/santa-veronica/imagens/restaurada_4k.jpg) |
| [São Vicente de Paulo](docs/santos/sao-vicente-de-paulo/index.md) | ![São Vicente de Paulo](docs/santos/sao-vicente-de-paulo/imagens/restaurada_4k.jpg) |
| [São Vicente Ferrer](docs/santos/sao-vicente-ferrer/index.md) | ![São Vicente Ferrer](docs/santos/sao-vicente-ferrer/imagens/restaurada_4k.jpg) |
| [São Vicente Pallotti](docs/santos/sao-vicente-pallotti/index.md) | ![São Vicente Pallotti](docs/santos/sao-vicente-pallotti/imagens/restaurada_4k.jpg) |
| [Santa Zita](docs/santos/santa-zita/index.md) | ![Santa Zita](docs/santos/santa-zita/imagens/restaurada_4k.jpg) |
