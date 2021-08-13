import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import vuetify from '@/plugins/vuetify'
import examplestore from './store/examplestore'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    examplestore
  }
})

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
}).$mount('#app')
