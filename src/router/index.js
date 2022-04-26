import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstablecimientosView from '../views/EstablecimientosView.vue'
import CreateEstablecimiento from '../views/CreateEstablecimiento.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/establecimientos',
    name: 'EstablecimientosView',
    component: EstablecimientosView

  },
  {
    path: '/establecimientos/create',
    name: 'CreateEstablecimiento',
    component: CreateEstablecimiento

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
