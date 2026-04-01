import DefaultTheme from 'vitepress/theme'
import FeatureIndexTable from './components/FeatureIndexTable.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('FeatureIndexTable', FeatureIndexTable)
  },
}
