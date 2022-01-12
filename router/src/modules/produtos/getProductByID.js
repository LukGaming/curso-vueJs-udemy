export default{
    
    getProductByID() {
        console.log(this.nome_categorias)
        this.$http.get(`api/produtos/${this.id}`, {}).then(res => {
            this.nome = res.data.nome;
            this.valor = res.data.valor,
            this.descricao = res.data.descricao
            
            console.log(this.select)
        })
    },
}