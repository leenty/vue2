// import Home from './components/Home.vue'
// import Article from './components/Article.vue'
// import Demo from './components/Demo.vue'
// import DemoVuexState from './components/DemoVuexState.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: require('./components/Home.vue')
  },
  {
    name: 'Article',
    path: '/article',
    component: require('./components/Article.vue')
  },
  {
    name: 'Demo',
    path: '/demo',
    component: require('./components/Demo.vue'),
    children: [
      {
        name: 'DemoVuexState',
        path: 'vuex_state',
        component: require('./components/DemoVuexState.vue')
      }
    ]
  }
]

export default routes
