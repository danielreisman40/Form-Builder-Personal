import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import AboutPage from '../views/About.vue'
import LoginPage from '../views/User/Login.vue'
import SignUpPage from '../views/User/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/user/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/user/signup',
      name: 'sign-up',
      component: SignUpPage,
    }

  ]
})

export default router
