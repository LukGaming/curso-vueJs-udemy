export default {
  async getImagesFromProduct () {
    var $imagens_produto = await this.$http.get(
      `api/imagens/produtos/${this.produto.id}`
    )
    this.imagens = $imagens_produto.data.imagens_produto
  }
}
