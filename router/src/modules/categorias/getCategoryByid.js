export default {
    getCategoryByid() {
        this.$http.get(`api/categorias/${this.id}`).then(res => {
            this.nome_categoria = res.data.nome_categoria
            this.$http.get(`api/user/${res.data.user_id}`).then(res => {
                this.usuarioCriador.nameUserCreatorOfCategoria = res.data.name
            })
        })

    }
}
