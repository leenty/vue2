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

console.log('\n %c leenty blog %c http://leenty.com \n\n', 'color: #fff; background: #1abc9c; padding:5px 0;border-radius: 5px 0 0 5px;', 'color: #34495e;background: #edeef0; padding:5px 0;border-radius: 0 5px 5px 0;text-decoration:none;')

