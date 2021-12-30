<template >
  <div class="margin-tb">
    <v-alert
      dismissible
      v-if="produtoCriado"
      color="primary "
      class="produto-criado"
      type="success"
      >Produto Criado com sucesso</v-alert
    >
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

      <v-btn @click="submit_validation" depressed dark>
        Cadastrar Produto
      </v-btn>
    </v-form>
  </div>
</template>
<script>
import eventBus from "./eventBus";
import useVuelidate from "@vuelidate/core";
import { minLength, required, maxLength } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data: () => ({
    produtoCriado: false,
    valid: true,
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
    submit() {
    
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