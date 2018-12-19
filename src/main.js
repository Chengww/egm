import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import './assets/css/base.css'
import components from './components'

Vue.config.productionTip = false

Object.keys(components).forEach(key => {
  Vue.component(components[key].name, components[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
