<template >
    <div>
        <v-simple-table dark class="mt-10">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id do Produto</th>
            <th class="text-left">Nome do Produto</th>
            <th class="text-left">Valor do Produto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(produto, i) in produtos" :key="i">
            <td>{{ produto.id }}</td>
            <td>{{ produto.nome }}</td>
            <td>{{ produto.valor }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  
    </div>
</template>
<script>
export default {
    data() {
    return {
      produtos: [],
    };
  },
  created() {
    this.$http.get().then((res) => {
      if (res.data) {
        console.log("temos resposta");
        var array = [];
        for (let i = 0; i < res.data.length; i++) {
          array.push({
            id: res.data[i].id,
            nome: res.data[i].nome,
            valor: res.data[i].valor,
            descricao: res.data[i].descricao,
          });
        }
        this.produtos = array;
      }
    });
  },
};
</script>
<style lang="">
</style>