import Vue from 'vue'
import App from './App.vue'

import vPop from '../dist/vue-popjs'
// import vPop from './lib/index'
Vue.use(vPop)
new Vue({
  el: '#app',
  render: h => h(App)
})
