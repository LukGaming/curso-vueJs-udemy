<template >
  <div>
    <v-simple-table dark class="mt-10">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id do Produto</th>
            <th class="text-left">Nome do Produto</th>
            <th class="text-left">Valor do Produto</th>
            <th class="text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(produto, i) in produtos" :key="i">
            <td class="text-right">{{ produto.id }}</td>
            <td>{{ produto.nome }}</td>
            <td>{{ produto.valor }}</td>
            <td>
              <v-row align="center" justify="space-around">
                <div data-app><Dialog1 :produto="produto" /></div>

                <v-btn
                  tile
                  color="success"
                  class="space-buttons"
                  @click="excluirProduto(produto.id)"
                >
                  <v-icon left> mdi-pencil </v-icon>
                  Excluir
                </v-btn>
              </v-row>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import eventBus from "./eventBus";
import Dialog1 from "./Dialog1.vue";
export default {
  data() {
    return {
      produtos: [],
    };
  },
  components: {
    Dialog1,
  },
  mounted() {
    eventBus.$on("AtualizarListaDeProdutos", () => {
      this.atualizaListadeProdutos();
    });
  },
  methods: {
    atualizaListadeProdutos() {
      this.$http.get().then((res) => {
        if (res.data) {
          console.log(res.data[0].id);
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
    excluirProduto(produto) {
      if (confirm(`Deseja  excluir o produto ${produto}?`)) {
        this.$http.delete(`/${produto}`).then(() => {
          this.atualizaListadeProdutos();
        });
      }
    },
  },
  created() {
    this.atualizaListadeProdutos();
  },
};
</script>
<style>
.space-buttons {
  margin: 10px;
}
</style>