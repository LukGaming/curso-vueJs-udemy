export default{
    getProductByID() {
        this.$http.get(`produtos/${this.id}`, {}).then(res => {
            this.nome = res.data.nome;
            this.valor = res.data.valor,
                this.descricao = res.data.descricao
        })
    },
}