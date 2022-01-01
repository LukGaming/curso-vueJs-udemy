<template>
  <div class="margin-tb container">
    <div v-if="method == 0 &&  this.erroConsulta == 0"><h2>Criando produtos!</h2></div>
    <div v-if="method == 1 &&  this.erroConsulta == 0"><h2>Editando Produto!</h2></div>
    <div v-if="method == 2 &&  this.erroConsulta == 0"><h2>Visualizando Produto!</h2></div>
    <div v-if="method == 3 &&  this.erroConsulta == 0"><h2>Editando Produto!</h2></div>

    <hr />
    <div v-if="erroConsulta == 404">Produto não encontrado</div>
    <v-alert
      dismissible
      v-if="produtoCriado"
      color="primary "
      class="produto-criado"
      type="success"
      >Produto Criado com sucesso</v-alert
    >
    <div v-if="this.erroConsulta == 0">
    <v-form ref="form" lazy-validation>
      <v-text-field
        v-model="nome"
        label="Nome do Produto"
        required
      ></v-text-field>
      <div
        v-if="v$.nome.$error && formBeingValidate"
        style="font-size: 1rem; color: red"
      >
        O nome deve ter entre 5 e 100 caracteres
      </div>
      <v-text-field
        v-model="valor"
        label="Valor do Produto"
        type="number"
      ></v-text-field>
      <div
        v-if="v$.valor.$error && formBeingValidate"
        style="font-size: 1rem; color: red"
      >
        O valor não pode ficar vazio
      </div>
      <v-textarea label="Descrição do Produto" v-model="descricao"></v-textarea>
      <div v-if="formBeingValidate">
        <div v-if="v$.descricao.$error" style="font-size: 1rem; color: red">
          A descrição deve ter entre 50 e 2000 Caracteres
        </div>
      </div>
      <div v-if="method == 0">
        <v-btn @click="submit_validation" depressed dark>
          Cadastrar Produto
        </v-btn>
      </div>
      <div v-if="method == 1">
        <v-btn depressed dark> Atualizar Produto </v-btn>
        <v-btn depressed dark @click="Excluir_Produto(id)"> Excluir Produto </v-btn>
      </div>
    </v-form>
    </div>
  </div>
</template>
<script>
import eventBus from "../components/eventBus";
import useVuelidate from "@vuelidate/core";
import { minLength, required, maxLength } from "@vuelidate/validators";
import  submit from '../utils/produto/createProduct'
import Excluir_Produto from '../utils/produto/deleteProduct'
import showProductById from '../utils/produto/showProductById'
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  mounted() {
    if (this.$route.params.id && this.$route.params.id != "create") {
      //Mostrando detalhes do produto
      this.method = 2;
      this.showProductById();
    }
    if (this.$route.params.funcao == "delete" || this.$route.params.funcao == "edit") {
      //Mostrando detalhes do produto
      this.showProductById();
      this.method = 1;
    }
  },
  data: () => ({
   
    erroConsulta: 0,
    method: 0,
    produtoCriado: false,
    valid: true,
     id: null,
    nome: "",
    valor: null,
    descricao: "",
    formBeingValidate: true,
  }),
  validations() {
    return {
      nome: { required, minLenghth: minLength(5), maxLength: maxLength(100) },
      valor: { required },
      descricao: {
        required,
        minLenghth: minLength(20),
        maxLength: maxLength(2000),
      },
    };
  },
  methods: {
    submit, 
    Excluir_Produto,
    showProductById
    
    
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
.produto-criado {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
</style>