import Vue from 'vue'
import App from './App.vue'
import Router from '@/router/Router'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
}).$mount('#app')
