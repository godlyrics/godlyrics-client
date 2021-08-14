import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Adim from '../pages/Admin'
import NotFoundPage from '../pages/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '*',
      name: '404 page',
      component: NotFoundPage
    }
  ]
})
