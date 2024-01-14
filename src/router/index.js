// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Lab010 from '@/views/Lab010.vue';
import ComputerDetail10 from '@/views/ComputerDetail010.vue';
import Lab011 from '@/views/Lab011.vue';
import Repairing from '@/views/Repairing.vue';
import AdminDashBord from '@/views/AdminDashBord.vue';
import Login from '@/Auth/Login.vue';
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/lab010',
    component: Lab010,
  },
  {
    path: '/lab011',
    component: Lab011,
  },
  {
    path: '/repairing',
    component: Repairing,
  },
  {
    path: '/lab10/:id',
    component: ComputerDetail10,
  },
  {
    path: '/admin',
    component: AdminDashBord,
  },
  {
    path: '/',
    component: Login,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
