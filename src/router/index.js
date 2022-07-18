import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },  
  {
    path: '/usuariomanutencao',
    name: 'usuariomanutencao',
    component: () => import('../views/UsuarioManutencaoView.vue')
  },
  {
    path: '/usuarioCadastro',
    name: 'usuarioCadastro',
    component: () => import('../views/UsuarioCadastroView.vue')
  },
  {
    path: '/objetomanutencao',
    name: 'objetomanutencao',
    component: () => import('../views/ObjetoManutencaoView.vue')
  },
  {
    path: '/objetoCadastro',
    name: 'objetoCadastro',
    component: () => import('../views/ObjetoCadastroView.vue')
  },
  {
    path: '/imovelmanutencao',
    name: 'imovelmanutencao',
    component: () => import('../views/ImovelManutencaoView.vue')
  },
  {
    path: '/imovelCadastro',
    name: 'imovelCadastro',
    component: () => import('../views/ImovelCadastroView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
