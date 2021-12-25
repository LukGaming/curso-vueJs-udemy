<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ "ola mundo tudo bem?" | SwitchSpaceByVirgule }}</p>

    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
    <p>{{ "tamanho da palavra" | countingWordsAndAddVirgule }}</p>
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ fraseComVirgulas }}</p>
    <p>{{ contandoPalavrasELetras }}</p>
    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
    <!-- Complementares -->
    <!-- Fazer máscara para CPF -->
    <label for="cpf">Cpf: </label>
    <input
      type="text"
      id="cpf"
      v-model="cpf"
      placeholder="000.000.000-00"
      maxlength="14"
     
    />
  </div>
</template>

<script>
import FrasesMixin from "./FrasesMixin";
export default {
  data() {
    return {
      cpf: "",
      palavra1: "ola mundo tudo bem?",
      palavra2: "tamanho da palavra",
    };
  },
  mixins: [FrasesMixin],
  filters: {
    SwitchSpaceByVirgule: function (value) {
      return value.replace(/\s/g, ",");
    },
  },
  watch: {
    cpf() {
      if (this.cpf.length == 3 || this.cpf.length == 7) {
        this.cpf += ".";
      }
      if(this.cpf.length == 11){
        if(this.cpf.indexOf('-')){
          let cpf = this.cpf.split('-');
          console.log(cpf)
        }
        this.cpf += "-";
      }
      console.log(this.cpf);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
