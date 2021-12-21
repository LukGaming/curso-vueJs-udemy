import Vue from 'vue'
import mitt from 'mitt'
const emitter = mitt()

export default {
    methods: {
        setUsuarioSelecionado(usuario) {
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback) {
            this.$on('usuarioSelecionado', callback)
        }
    }
}