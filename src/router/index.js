import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import LearningMap from '../pages/LearningMap.vue'
import Articles from '../pages/Articles.vue'
import About from '../pages/About.vue'

import ArticleDetail from '../pages/ArticleDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/learningmap', component: LearningMap },
  { path: '/articles', component: Articles },
  { path: '/articles/:id', component: ArticleDetail },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
