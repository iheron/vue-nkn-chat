import NknChat from './nkn-chat'
import vuetify from './plugins/vuetify'
import './plugins/cookies'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)


const components = [
  NknChat
]

const install = function (Vue) {
  if (install.installed) return
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  Vue.component('font-awesome-layers', FontAwesomeLayers)
  Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
  Vue.use(vuetify)
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  NknChat
}
