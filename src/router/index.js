import { createRouter, createWebHistory } from 'vue-router/auto'
import AboutPage from '@/pages/AboutPage.vue'
import PortfolioPage from '@/pages/PortfolioPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import ResumePage from '@/pages/ResumePage.vue'

const routes = [
  {
    path: '/',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/resume',
    name: 'ResumePage',
    component: ResumePage,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
