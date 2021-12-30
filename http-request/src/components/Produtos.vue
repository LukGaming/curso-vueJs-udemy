<template >
  <div>
    <Appbar />
    <MostrandoProdutos />
    <Footer />
    
  </div>
</template>
<script>
import MostrandoProdutos from "./produto/MostrandoProdutos.vue";
import Appbar from './Appbar.vue'
import Footer from './Footer.vue';
export default {
  data() {
    return {
      produtos: [],
    };
  },
  components: {
    MostrandoProdutos,
    Appbar,
    Footer
  },
};
    
</script>
<style >
.mt-10 {
  margin-top: 10px;
}
</style>