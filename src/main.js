// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './route'

import App from './App'

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  render: h => h(App)
}).$mount('#app')
