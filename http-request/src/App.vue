<template>
  <div id="app">
    <Appbar />
    <Produtos />
    <Footer />
    
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Appbar from "./components/Appbar.vue";
import Produtos from "./components/Produtos.vue";

export default {
  name: "App",
 
  components: {
    Footer,
    Appbar,
    Produtos,
  },
};
</script>

<style>
</style>
