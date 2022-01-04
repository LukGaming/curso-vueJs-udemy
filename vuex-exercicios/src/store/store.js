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
       
        quantidade: state => {
            return state.quantidade;
        },
        preco: state =>{
            return state.preco
        }
    }
})