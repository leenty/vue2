// import Home from './components/Home.vue'
// import Article from './components/Article.vue'
// import Demo from './components/Demo.vue'
// import DemoVuexState from './components/DemoVuexState.vue'

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
    children: [
      {
        name: 'vue2_1',
        path: '/article/vue2_1',
        meta: {
          title: 'vue2.0一起在懵逼的海洋里越陷越深（一）'
        },
        component: require('./md/articles/vue2-1.md')
      },
      {
        name: 'vue2_2',
        path: '/article/vue2_2',
        meta: {
          title: 'vue2.0一起在懵逼的海洋里越陷越深（二）'
        },
        component: require('./md/articles/vue2-2.md')
      },
      {
        name: 'vue2_3',
        path: '/article/vue2_3',
        meta: {
          title: 'vue2.0一起在懵逼的海洋里越陷越深（三）'
        },
        component: require('./md/articles/vue2-3.md')
      },
      {
        name: 'vue2_4',
        path: '/article/vue2_4',
        meta: {
          title: 'vue2.0一起在懵逼的海洋里越陷越深（四）'
        },
        component: require('./md/articles/vue2-4.md')
      },
      {
        name: 'vue2_5',
        path: '/article/vue2_5',
        meta: {
          title: 'vue2.0一起在懵逼的海洋里越陷越深（五）'
        },
        component: require('./md/articles/vue2-5.md')
      }
      // {
      //   name: 'vue2_6',
      //   path: '/article/vue2_6',
      //   meta: {
      //     title: 'vue2.0一起在懵逼的海洋里越陷越深（六）'
      //   },
      //   component: require('./md/articles/vue2-5.md')
      // }
    ]
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
        component: require('./components/DemoVuexState.vue')
      }
    ]
  }
]

export default routes
