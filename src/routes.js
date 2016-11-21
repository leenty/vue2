import Home from './components/Home.vue'
import Article from './components/Article.vue'

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
  }
]

export default routes
