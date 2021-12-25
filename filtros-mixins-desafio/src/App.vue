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

	
  </div>
</template>

<script>
import FrasesMixin from './FrasesMixin'
export default {
  data() {
    return {
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
