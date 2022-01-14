
export default {
    getCategoryByid() {
        this.$http.get(`api/categorias/${this.id}`).then(res => {
            this.nome_categoria = res.data.nome_categoria //this.get_user_data(res.data.user_id)
            console.log(this.get_user_data(res.data.user_id))
            // this.$http.get(`api/user/${res.data.user_id}`).then(res => {
            //     this.usuarioCriador.nameUserCreatorOfCategoria = res.data.name
            //     this.usuarioCriador.idUserCreatorOfCategoria = res.data.id
            //     return res.data;
            // }).catch(error => {
            //     return error;
            // })
        })

    }
}
