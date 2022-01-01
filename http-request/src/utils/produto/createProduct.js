export default{
    submit() {
        for(let i=0; i<100; i++){
          this.$http
          .post("", {
            id: null,
            nome: this.nome,
            valor: this.valor,
            descricao: this.descricao,
          })
          .then(() => {
            this.nome = "";
            this.valor = "";
            this.descricao = "";
            this.produtoCriado = true;
            eventBus.$emit("AtualizarListaDeProdutos");
          });
          console.log("Adicionando Produto"+i)
        }
        
      },
      async submit_validation() {
        const result = await this.v$.$validate();
  
        if (!result) {
          // notify user form is invalid
  
          return;
        } else {
          this.submit();
          this.formBeingValidate = false;
        }
      },
}
export {submit, submit_validation}