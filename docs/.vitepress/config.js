export default {
  title: 'Santos e Beatos da Igreja Católica',
  description: 'Histórias e conteúdo sobre santos e beatos.',
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Beatos', link: '/beatos/' },
      { text: 'Santos', link: '/santos/' }
    ],
    sidebar: {
      '/beatos/': [
        {
          text: 'Beatos',
          items: [
            { text: 'Alexandrina de Balasar', link: '/beatos/alexandrina-de-balasar/' },
            { text: 'Beata Benigna', link: '/beatos/beata-benigna/' },
            { text: 'Beata Chiara Luce Badano', link: '/beatos/beata-chiara-luce-badano/' },
            { text: 'Beata Isabel Cristina', link: '/beatos/beata-isabel-cristina/' },
            { text: 'Beato Carlo Acutis', link: '/beatos/carlo-acutis/' },
            { text: 'Beato Pier Giorgio Frassati', link: '/beatos/pier-giorgio-frassati/' },
            { text: 'Nhá Chica', link: '/beatos/nha-chica/' },
            { text: 'Padre Donizetti', link: '/beatos/padre-donizetti/' },
            { text: 'Padre Victor', link: '/beatos/padre-victor/' }
          ]
        }
      ],
      '/santos/': [
        {
          text: 'Santos',
          items: [
            { text: 'Santa Rita de Cássia', link: '/santos/santa-rita-de-cassia/' },
            { text: 'Santa Teresinha do Menino Jesus', link: '/santos/santa-teresinha-do-menino-jesus/' },
            { text: 'Santo Antônio de Pádua', link: '/santos/santo-antonio/' },
            { text: 'São Filipe Neri', link: '/santos/sao-filipe-neri/' },
            { text: 'São Francisco de Assis', link: '/santos/sao-francisco-de-assis/' },
            { text: 'São João Bosco', link: '/santos/sao-joao-bosco/' },
            { text: 'São Jorge', link: '/santos/sao-jorge/' },
            { text: 'São Judas Tadeu', link: '/santos/sao-judas-tadeu/' },
            { text: 'São Maximiliano Kolbe', link: '/santos/sao-maximiliano-kolbe/' },
            { text: 'São Padre Pio', link: '/santos/sao-padre-pio/' }
          ]
        }
      ]
    }
  }
}
