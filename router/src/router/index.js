import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Produtos from '../views/Produtos.vue'
import ProdutosCrud from '../views/ProdutosCrud.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Produtos',
    name: 'Produtos',
    component: Produtos
  },
  {
    path: '/Produtos/create',
    name: 'produto/create',
    component: ProdutosCrud
  }
]
})

