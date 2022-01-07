import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.common['Access-Control-Allow-Origin'] = true,
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})