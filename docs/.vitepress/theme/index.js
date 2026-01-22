// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import TextToSpeech from '../components/TextToSpeech.vue'
import MiracleMap from '../components/MiracleMap.vue'
import SaintOfTheDay from '../components/SaintOfTheDay.vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TextToSpeech', TextToSpeech)
    app.component('MiracleMap', MiracleMap)
    app.component('SaintOfTheDay', SaintOfTheDay)
  }
}
