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
    component: Home
  },
  {
    path: '/Produtos',
    component: Produtos
  },
  {
    path: '/Produtos/crud',
    component: ProdutosCrud
  }
]
})

