import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Adim from '../pages/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Adim',
      component: Adim
    }
  ]
})
