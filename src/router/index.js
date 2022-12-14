import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home-view.vue';
import About from '../views/about-view.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
