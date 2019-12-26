import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import nknChat from '../packages'

Vue.config.productionTip = false
Vue.use(nknChat)
new Vue({
  render: h => h(App)
}).$mount('#app')
