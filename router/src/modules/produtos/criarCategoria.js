export default {
    criar_categoria() {
        this.$http.post(`api/categorias`, {
            id: null,
            nome_categoria: this.nova_categoria,
            // User_Id_Creator: this.$session.get('userId')
        }).then(res => {
            this.existe_categoria = false
            this.dialog = false;
            this.SnackBarOptions.snackbarMessage = "Categoria Criada com sucesso"
            this.SnackBarOptions.snackbar = true
            this.nova_categoria = ""
            this.getAllCategoryes()
            return res;
        }).catch(error => {
            this.existe_categoria = true
            return error
        })


    }
}