export default{
    criar_categoria() {
        //Verificando se já existe uma categoria com este nome
        this.$http.get(`categorias?nome_categoria=${this.nova_categoria}`).then(res => {
            if (res.data.length > 0) {
                this.existe_categoria = true
            } else {
                this.existe_categoria = false
                this.$http.post(`categorias`, {
                    id: null,
                    nome_categoria: this.nova_categoria,
                    User_Id_Creator: 0
                }).then(res => {
                    
                    console.log("Categoria criada com sucesso!")
                    this.dialog = false;
                    this.snackbar = true
                    this.getAllCategoryes()
                    return res
                })

            }

        })
    }
}