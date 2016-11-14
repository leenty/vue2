import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Article from './components/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/article',
    component: Article
  }
]

/* eslint-disable no-new */
const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  linkActiveClass: 'u-link--active',
  // base: '/app/',
  routes
})

export default router

