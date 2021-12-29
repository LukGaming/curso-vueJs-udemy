<template >
  <div class="margin-tb">
    <v-alert dismissible v-if="produtoCriado" color="primary " class="produto-criado" type="success" >Produto Criado com sucesso</v-alert>
     
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="nome"
        label="Nome do Produto"
        required
      ></v-text-field>

      <v-text-field
        v-model="valor"
        label="Valor do Produto"
        type="number"
      ></v-text-field>
      <v-textarea label="Descrição do Produto" v-model="descricao"></v-textarea>

      <v-btn @click="submit" depressed dark> Cadastrar Produto </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
      produtoCriado: false,
    valid: true,
    nome: "",
    valor: 0,
    descricao: "",
  }),

  methods: {
    submit() {
      if (this.nome && this.valor && this.descricao) {
        this.$http
          .post("", {
            id: null,
            nome: this.nome,
            valor: this.valor,
            descricao: this.descricao,
          })
          .then((res) => {
            console.log(res);
            this.nome = "";
            this.valor = "";
            this.descricao = "";
            this.produtoCriado = true;
          });
      }
    },
  },
};
</script>
<style >
.margin-tb {
  font-size: 2rem;
  margin-top: 10px;
  margin-bottom: 50px;
}
.btn-submit {
  background-color: red;
}
.produto-criado{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    
}
</style>