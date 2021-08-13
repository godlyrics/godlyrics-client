import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import i18n from './plugins/i18n'
import vuetify from '@/plugins/vuetify'
import examplestore from './store/examplestore'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    examplestore
  }
})

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
}).$mount('#app')
