import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const title = 'leenty blog Demo'

Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  linkActiveClass: 'u-link--Active',
  // base: '/app/',
  routes
})

router.beforeEach((to, from, next) => {
  let titleStr = ''
  // to.matched.reverse().forEach((match, k) => {
  //   titleStr += `${k > 0 ? '- ' : ''}${match.meta.title} `
  // })
  // tips： 直接翻转数组会导致路由嵌套位置的翻转
  if (to.name !== 'Home') {
    for (let i = to.matched.length - 1; i >= 0; i--) {
      titleStr += `${to.matched[i].meta.title} - `
    }
  }
  titleStr += title
  document.title = titleStr
  next()
})

export default router
