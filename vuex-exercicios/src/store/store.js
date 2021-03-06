import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        produtos: [
           
        ],
        quantidade: 2,
        preco: 39.99,
    },
    getters: {
        valorTotal(state){
           return  state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
        produtos(state){
            return state.produtos
        },
        quantidade(state){
            return state.quantidade
        },
        preco(state){
            return state.preco
        }
    },
    mutations:{
        adicionarProduto(state, payload){
            state.produtos.push(payload)
        },
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state,payload){
            state.preco = payload
        }
    },
    actions: {
        adicionarProduto({commit}, payload){
            setTimeout(() => {
                commit('adicionarProduto', payload)
            }, 1000);
        }
    }
})