export default{
    async submit() {
        const isFormCorrect = await this.v$.$validate()
        if (!isFormCorrect) {
            return isFormCorrect
        } else {
            if (this.method == "create") {
                this.$http.get(`categorias?nome_categoria=${this.nome_categoria}`).then(res => {
                    if (res.data.length > 0) {
                        this.categoriaExists = true
                    } else {
                        this.categoriaExists = false
                        this.$http.post(`categorias`, ({
                            id: null,
                            nome_categoria: this.nome_categoria,
                            User_Id_Creator: 0, //Trocar depois para o Id da sessão

                        }))
                        this.v$.$reset()
                        this.snackbar = true
                        this.messageSnackBar = "Categoria Criada com sucesso!"
                        this.nome_categoria = ""
                    }

                })
            }
            if (this.method == "edit") {
                this.$http.get(`categorias?nome_categoria=${this.nome_categoria}`).then(res => {
                    if (res.data.length > 0) {
                        this.categoriaExists = true

                    } else {
                        this.categoriaExists = false
                        this.$http.patch(`categorias/${this.id}`, {
                            nome_categoria: this.nome_categoria
                        }).then(res => {
                            this.snackbar = true
                            this.messageSnackBar = "Categoria editada com sucesso!"
                            return res
                        })
                    }
                })
            }

            //Caso não exista, cria-la e enviar o id do usuário logado no momento junto!
        }
    },
}