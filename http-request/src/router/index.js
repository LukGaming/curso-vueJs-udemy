import Vue from 'vue'
import VueRouter from 'vue-router'
import ListProducts from '../components/Produtos.vue'
import crudProducts from '../components/crudProducts'
Vue.use(VueRouter)

const routes = [
  {
    path: '/produtos',
    component: ListProducts,
  },
  {
    path: '/produtos/:id',

    component: crudProducts
  },
  {
    path: '/produtos/:id/:funcao',
    component: crudProducts
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
