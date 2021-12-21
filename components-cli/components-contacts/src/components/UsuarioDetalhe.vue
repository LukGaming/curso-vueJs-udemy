<template>
  <div class="app">
    <div class="detalhes">
      <div v-if="!pessoa" class="user-not-registered">Não há usuários</div>
      <div v-else>
       {{pessoa}}
      </div>
    </div>
  </div>
</template>
<script>
import barramento from "@/barramento.js";
export default {
  data() {
    return {
      pessoa: null,
    };
  },
  created() {
    barramento.onUsuarioSelecionado(pessoa => {
        console.log('teste')
    });
  },
};
</script>
<style >
.app {
  display: flex;
  justify-content: center;
  align-items: center;
}
.detalhes {
  margin-top: 20px;
  width: 500px;
  height: 500px;
  background-color: grey;
}
.user-not-registered {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  color: white;
  font-size: 3rem;
}
</style>