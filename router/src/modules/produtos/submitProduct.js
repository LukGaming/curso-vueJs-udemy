    export default{
        async submit() {
                
             
              
            
            if (this.method == "create") {
               
                const isFormCorrect = await this.v$.$validate()
                if (!isFormCorrect) {
                    return
                } else {
                    this.loading = true
                    for(let i=0; i< this.categorias.length; i++){
                        if(this.categorias[i].nome_categoria == this.select){
                            this.id_categoria = this.categorias[i].id
                        }
                    }
                    this.$http.post('produtos', {
                        id: null,
                        nome: this.nome,
                        valor: this.valor,
                        descricao: this.descricao,
                        id_user_criador: this.$session.get('userId'),
                        id_categoria: this.id_categoria
                        
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
    
    
