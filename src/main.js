// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import promise from 'es6-promise'
import Vue from 'vue'
import router from './router'
import store from './store'

import App from './App.vue'
import AlloyFingerVue from './services/alloy_finger'
Vue.use(AlloyFingerVue)

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  store,
  render: h => h(App)
}).$mount('.app')
