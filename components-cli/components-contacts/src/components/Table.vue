<template >
  <div>
      <tr v-for="pessoa in pessoas" :key="pessoa" @click="setUsuarioSelecionado(pessoa)">
        <td>{{ pessoa.Id }}</td>
        <td>{{ pessoa.nome }}</td>
      </tr>
    <!-- <table>
      <tr>
        <th>Id</th>
        <th>Nome</th>
      </tr>
      <tr v-for="pessoa in pessoas" :key="pessoa" @click="setUsuarioSelecionado(pessoa)">
        <td>{{ pessoa.Id }}</td>
        <td>{{ pessoa.nome }}</td>
      </tr>
    </table> -->
  </div>
</template>
<script>
import barramento from '@/barramento.js';
export default {
    
  props: {pessoas: Array},
  methods: {
      setUsuarioSelecionado(pessoa){
          barramento.setUsuarioSelecionado(pessoa)
  }}
  
};
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>