import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/element.js'
import './assets/css/base.css'
import components from './components'
import './axios'
import MyPlugin from './plugins/plugin'

Vue.config.productionTip = false

/* eslint-disable no-extend-native */
Array.prototype.remove = function (val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}

Vue.use(MyPlugin)

Object.keys(components).forEach(key => {
  Vue.component(components[key].name, components[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
