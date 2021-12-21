<template >
  <div>
    <Table :pessoas="pessoas"/>
    <UsuarioDetalhe />
  </div>
</template>
<script>
import Table from "./components/Table";
import UsuarioDetalhe from "./components/UsuarioDetalhe";
export default {
  components: {
    Table,
    UsuarioDetalhe,
  },
  data() {
    return {
      pessoas: [
        {
          Id: 1,
          nome: "Paulo",
          Idade: "23",
        },
        {
          Id: 2,
          nome: "Maria",
          Idade: "59",
        },
        {
          Id: 3,
          nome: "Marquim",
          Idade: "28",
        },
        {
          Id: 4,
          nome: "Stella",
          Idade: "34",
        },
      ],
    };
  },
};
</script>
<style >
</style>