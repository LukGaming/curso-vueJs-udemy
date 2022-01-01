export default{
    showProductById() {
        var productId = this.$route.params.id;
        this.$http.get(`/${productId}`).then((res) => {
          this.id = res.data.id;
          (this.nome = res.data.nome),
            (this.valor = res.data.valor),
            (this.descricao = res.data.descricao);
        }).catch((res)=>{
          this.erroConsulta = res.toJSON().status
        });
      },
}
export {showProductById}