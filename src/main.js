import Vue from 'vue'
import App from './App.vue'

import vPop from '../dist/vue-pop'
Vue.use(vPop)
new Vue({
  el: '#app',
  render: h => h(App)
})
