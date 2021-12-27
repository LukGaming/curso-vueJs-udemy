<template>
  <div id="app" class="container">
    <h1>Animações</h1>
    <b-button variant="primary" class="mb-4" @click="ShowMessage = !ShowMessage"
      >Mostrar Mensagem</b-button
    >
    <transition name="fade">
      <b-alert show v-if="ShowMessage">Default Alert</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Olá mundo!",
      ShowMessage: true,
    };
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
  font-size: 1.5rem;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

</style>
