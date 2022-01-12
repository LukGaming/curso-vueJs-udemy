export default {
    getAllCategoryes() {
        this.$http.get(`api/categorias`).then(res => {
            for (let i = 0; i < res.data.length; i++) {
                //Mostrando as categorias
                    this.nome_categorias.push(res.data[i].nome_categoria)
            }
            this.categorias = res.data
        })
    }
}