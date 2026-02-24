// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import TextToSpeech from '../components/TextToSpeech.vue'
import MiracleMap from '../components/MiracleMap.vue'
import SaintOfTheDay from '../components/SaintOfTheDay.vue'
import './style.css'

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (typeof window !== 'undefined') {
       import('leaflet/dist/leaflet.css');
    }
    app.component('TextToSpeech', TextToSpeech)
    app.component('MiracleMap', MiracleMap)
    app.component('SaintOfTheDay', SaintOfTheDay)
  }
}
