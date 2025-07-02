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
            { text: 'Padre Donizetti', link: '/beatos/padre-donizetti' },
            { text: 'Alexandrina de Balasar', link: '/beatos/alexandrina-de-balasar' },
            { text: 'Carlo Acutis', link: '/beatos/carlo-acutis' }
          ]
        }
      ],
      '/santos/': [
        {
          text: 'Santos',
          items: [
            { text: 'São Francisco de Assis', link: '/santos/sao-francisco-de-assis' },
            { text: 'Santa Teresinha do Menino Jesus', link: '/santos/santa-teresinha-do-menino-jesus' }
          ]
        }
      ]
    }
  }
}