import Follows from '@/views/Follows.vue'
import Home from '@/views/Home.vue'
import Registration from '@/views/Registration.vue'
import Trends from '@/views/Trends.vue'
import History from '@/views/History.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/auth', component: Registration
    },
    {
      path: '/trends', component: Trends
    },
    {
      path: '/follows', component: Follows
    },
    {
      path: '/history', component: History
    }
  ],
})

export default router
