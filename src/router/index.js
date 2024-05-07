import { createRouter, createWebHistory } from "vue-router"
import quizesView from '../views/QuizesView.vue'
import quizView from '../views/QuizView.vue'

const routes = [
  {
    path: '/',
    component: quizesView,
    name: 'quizes',
  },
  {
    path: '/quiz/:id',
    name: 'quiz',
    component: quizView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;