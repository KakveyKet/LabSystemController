// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Lab010 from '@/views/Lab010.vue';
import ComputerDetail10 from '@/views/ComputerDetail010.vue';
const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/lab010',
    component: Lab010,
  },
  {
    path: "/lab010/:postId",
    component: ComputerDetail10
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
