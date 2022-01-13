import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        produtos: [
           
        ],
        quantidade: 0,
        preco: 0,
    },
    getters: {
        valorTotal(state){
           return  state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
        produtos(state){
            return state.produtos
        }
    },
    mutations:{
        adicionarProduto(state, payload){
            state.produtos.push(payload)
        }
    }
})