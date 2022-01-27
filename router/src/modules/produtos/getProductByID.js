export default {
  async getProductByID () {
    var $produto = await this.$http.get(`api/produtos/${this.produto.id}`)
    this.produto.nome = $produto.data.nome
    this.produto.valor = $produto.data.valor
    this.produto.descricao = $produto.data.descricao
    var $categoria = await this.$http.get(
      `api/categorias/${$produto.data.id_categoria}`
    )
    this.select = $categoria.data.nome_categoria
    this.getImagesFromProduct()
    return
  }
}
