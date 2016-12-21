// import Home from './components/Home.vue'
// import Article from './components/Article.vue'
// import Demo from './components/Demo.vue'
// import DemoVuexState from './components/DemoVuexState.vue'

import articles from './articlesRoutes.js'

const routes = [
  {
    name: 'Home',
    path: '/',
    meta: {
      title: 'home'
    },
    component: require('./components/Home.vue')
  },
  {
    name: 'Article',
    path: '/article',
    meta: {
      title: 'article'
    },
    component: require('./components/Article.vue'),
    children: articles
  },
  {
    name: 'Demo',
    path: '/demo',
    meta: {
      title: 'demo'
    },
    component: require('./components/Demo.vue'),
    children: [
      {
        name: 'DemoVuexState',
        path: 'vuex_state',
        meta: {
          title: 'vuex演示'
        },
        component: require('./components/demo/DemoVuexState.vue')
      },
      {
        name: 'FlexGrid',
        path: 'flexgrid',
        meta: {
          title: 'flexGrid'
        },
        component: require('./components/demo/FlexGrid.vue')
      }
    ]
  }
]

export default routes
