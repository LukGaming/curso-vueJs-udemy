<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel">
        <div class="cabecalho">Formulário</div>
        <div class="form-input">
          <label for="nome">Nome: </label>
          <input type="text" name="nome" v-model="nome" />
        </div>
        <div class="form-input">
          <label for="sobrenome">Sobrenome: </label>
          <input type="text" name="sobrenome" v-model="sobrenome" />
        </div>
        <div class="form-input">
          <label for="email">Email: </label>
          <input type="email" name="email" v-model="email" />
        </div>
        <div class="form-input">
          <label for="senha">Senha: </label>
          <input type="password" name="senha" v-model="senha" />
        </div>
        <div class="form-input">
          <label for="armazenar">Armazenar Dados?</label>
          <input type="checkbox" name="armazenar" v-model="armazenar" />
        </div>
        <div class="submitForm">
          <button class="btnSubmitForm" @click.prevent="formSend = true">
            Enviar
          </button>
        </div>
      </form>
      <div class="painel" v-if="formSend">
        <div class="cabecalho">Resultado</div>
        <div class="form-input">
          <div>Nome: {{ nome }}</div>
        </div>
        <div class="form-input">
          <div>Sobrenome: {{ sobrenome }}</div>
        </div>
        <div class="form-input">
          <div>email: {{ email }}</div>
        </div>
        <div class="form-input">
          <div>senha: {{ senha }}</div>
        </div>
        <div class="form-input">
          <div>
             <nomeSobrenome :nome="nome" :sobrenome="sobrenome" />
          </div>
        </div>
		<div class="form-input">
          <div>
            Manter Conectado? {{armazenar}}
          </div>
        </div>
		<button class="btnSubmitForm" @click.prevent="formSend = false">
            Fechar Resultado
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import nomeSobrenome from "./components/nomeSobrenome.vue";
import Rotulo from "./components/Rotulo.vue";

export default {
  name: "app",
  components: { Rotulo, nomeSobrenome },

  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      sobrenome: "",
      armazenar: false,
      formSend: false,
    };
  },
};
</script>

<style >
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

 button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
.submitForm {
  display: flex;
  justify-content: center;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
.form-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
}
.form-input label {
  font-size: 1.5rem;
}
.form-input input {
  width: 50%;
  height: 30px;
  font-size: 1.3rem;
}
.form-input input[type="checkbox"] {
  width: 20px;
}
</style>
