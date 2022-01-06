export default{
    editarProduto() {
        this.loading = true;
        this.$http.patch(`produtos/${this.id}`, {
            nome: this.nome,
            valor: this.valor,
            descricao: this.descricao
        }).then(res => {
            this.v$.$reset()
            setTimeout(() => {
                this.SnackBarOptions.snackbar = true;
                 this.SnackBarOptions.snackbarMessage= "Produto Editado com sucesso";
                 this.loading = false;
            }, 1000);
            return res
        })
    },
}