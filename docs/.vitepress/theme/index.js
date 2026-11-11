// docs/.vitepress/theme/index.js
import { defineAsyncComponent } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import TextToSpeech from '../components/TextToSpeech.vue'
import MiracleMap from '../components/MiracleMap.vue'
import SaintOfTheDay from '../components/SaintOfTheDay.vue'
import HomePage from '../components/home/HomePage.vue'
import PageHeader from '../components/PageHeader.vue'
import './style.css'

// Componentes pesados (grafo, mapa-múndi, catálogo) só carregam nas páginas que os usam.
const lazy = (carregar) => defineAsyncComponent(carregar)

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
      import('leaflet/dist/leaflet.css')
    }
    app.component('TextToSpeech', TextToSpeech)
    app.component('MiracleMap', MiracleMap)
    app.component('SaintOfTheDay', SaintOfTheDay)
    app.component('HomePage', HomePage)
    app.component('PageHeader', PageHeader)
    app.component('SaintsGraph', lazy(() => import('../components/SaintsGraph.vue')))
    app.component('SaintsExplorer', lazy(() => import('../components/SaintsExplorer.vue')))
    app.component('FeastCalendar', lazy(() => import('../components/FeastCalendar.vue')))
    app.component('WorldMap', lazy(() => import('../components/WorldMap.vue')))
  }
}
