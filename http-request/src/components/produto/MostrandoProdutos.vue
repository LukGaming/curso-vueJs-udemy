<template >
  <div class="container">
    <div></div>
    <v-btn color="primary" elevation="2" dark class="btn-primary"
      ><router-link to="/produtos/create">Novo Produto </router-link>
    </v-btn>

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
                <v-btn depressed color="success" class="space-buttons">
                  <router-link :to="{ path: `/produtos/${produto.id}/delete` }"
                    ><v-icon left depressed> mdi-pencil </v-icon>
                    Excluir</router-link
                  >
                </v-btn>
              </v-row>
            </td>
          </tr>
          <div class="itens-per-page">
            <v-select
              :items="items"
              label="Itens Por Página"
              dark
              v-model="itensPerPage"
            >
            </v-select>
          </div>
        </tbody>
      </template>
    </v-simple-table>

    <div class="text-center">
      <v-pagination v-model="page" :length="4" circle dark></v-pagination>
    </div>
  </div>
</template>
<script>
import eventBus from "../eventBus";
import Dialog1 from "../Dialog1.vue";
export default {
  data() {
    return {
      mensagem: "",
      produtos: [],
      page: 1,
      items: [5, 10, 15, 20, 50, 100],
      itensPerPage: 10,
    };
  },
  components: {
    Dialog1,
  },
  watch: {
    itensPerPage() {
      this.atualizaListadeProdutos();
    },
    page() {},
  },
  mounted() {
    eventBus.$on("AtualizarListaDeProdutos", () => {
      this.atualizaListadeProdutos();
    });
    if (this.$route.params) {
      console.log(this.$route.params.mensagem);
    }
  },

  methods: {
    atualizaListadeProdutos() {
      this.$http.get(`?_start=0&_end=${this.itensPerPage}`).then((res) => {
        if (res.data) {
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
.itens-per-page {
  display: flex;
  flex-direction: row;
  float: right;
  background-color: #1e1e1e;
}
.btn-primary {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: white;
}
.btn-primary:hover {
  text-decoration: none;
  color: white;
}
</style>