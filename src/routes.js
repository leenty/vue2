import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Demo from './components/Demo.vue'
import DemoVuexState from './components/DemoVuexState.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Article',
    path: '/article',
    component: Article
  },
  {
    name: 'Demo',
    path: '/demo',
    component: Demo,
    children: [
      {
        name: 'DemoVuexState',
        path: '/vuex_state',
        component: DemoVuexState
      }
    ]
  }
]

export default routes
