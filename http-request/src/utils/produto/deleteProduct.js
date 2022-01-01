export default{
    Excluir_Produto(id){
      
        this.$http.delete(`/${id}`).then(() =>{
          
        })
        this.$router.push({ path: '/produtos', params: { mensagem: "deleted" }});
      },
}
export{
  Excluir_Produto
}