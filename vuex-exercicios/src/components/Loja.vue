<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  methods: {
    ...mapActions(["adicionarProduto"]),
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;
      // this.$store.commit("adicionarProduto", produto);
      this.adicionarProduto(produto);
    },
  },
  computed: {
    quantidade: {
      get() {
        return this.$store.getters.quantidade;
      },
      set(value) {
        this.$store.commit("setQuantidade", value);
      },
    },
    preco: {
       get() {
        return this.$store.getters.preco;
      },
      set(value) {
        this.$store.commit("setPreco", value);
      },
    }
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
