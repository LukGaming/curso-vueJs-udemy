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
    path: '/produtos',
    name: 'produtos',
    component: Produtos
  },
  {
    path: '/produtos/create',
    name: 'produto/create',
    component: ProdutosCrud
  },{
    path: '/produtos/:id/edit',
    name: 'produto/edit',
    component: ProdutosCrud
  }
]
})

