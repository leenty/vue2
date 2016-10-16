import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  }
]

/* eslint-disable no-new */
export var router = new VueRouter({
  mode: 'history',
  routes
})

