export default{
    
    getProductByID() {
        this.select = "Teste"
        console.log(this.nome_categorias)
        this.$http.get(`produtos/${this.id}`, {}).then(res => {
            console.log(res.data.id_categoria)
            this.nome = res.data.nome;
            this.valor = res.data.valor,
            this.descricao = res.data.descricao
            
            console.log(this.select)
        })
    },
}