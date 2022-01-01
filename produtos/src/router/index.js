import Vue from 'vue'
import VueRouter from 'vue-router'
import Produtos from '../views/Produtos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Produtos
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
