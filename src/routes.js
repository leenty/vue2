import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Demo from './components/Demo.vue'

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
    component: Demo
  }
]

export default routes
