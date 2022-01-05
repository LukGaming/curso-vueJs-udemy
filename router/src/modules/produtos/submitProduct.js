    export default{
        async submit() {
            if (this.method == "create") {
                console.log(this.categoria)
                const isFormCorrect = await this.v$.$validate()
                if (!isFormCorrect) {
                    return
                } else {
                    this.loading = true
                    this.$http.post('produtos', {
                        id: null,
                        nome: this.nome,
                        valor: this.valor,
                        descricao: this.descricao
                    }).then(res => {
                        setTimeout(() => {
                            this.v$.$reset()
                            this.resetForm();
                            this.loading = false
                                this.SnackBarOptions.snackbarMessage =  "Produto Criado com sucesso"
                                this.SnackBarOptions.snackbar = true
                              
                        }, 1000);
    
                        return res
                    })
                }
                return;
            }
            if (this.method == "edit") {
                const isFormCorrect = await this.v$.$validate()
                if (!isFormCorrect) {
                    return
                } else {
                    this.editarProduto()
                }
                return isFormCorrect;
            }
        }
} 
    
    
