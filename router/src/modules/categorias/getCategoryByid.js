export default{
    getCategoryByid() {
        this.$http.get(`categorias?id=${this.id}`).then(res => {
            if (res.data.length > 0) {
                this.nome_categoria = res.data[0].nome_categoria
                this.$http.get(`usuarios/${res.data[0].User_Id_Creator}`).then(res => {
                    this.usuarioCriador.nameUserCreatorOfCategoria = res.data.nome
                    this.usuarioCriador.idUserCreatorOfCategoria = res.data.nome.id
                    return res
                })
            } else {
                //Mostrar que categoria nao foi encontrada de alguma forma
            }
        })
    }
}