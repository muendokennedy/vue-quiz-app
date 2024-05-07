import { createRouter, createWebHistory } from "vue-router"
import quizesView from '../views/QuizesView.vue'

const routes = [
  {
    path: '/',
    component: quizesView,
    name: 'quizes',
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;