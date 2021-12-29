<template >
  <div class="container">
    <CriandoProdutos />
    <MostrandoProdutos />
    
  </div>
</template>
<script>
import MostrandoProdutos from "./MostrandoProdutos.vue";
import CriandoProdutos from "./CriandoProdutos.vue";

export default {
  data() {
    return {
      produtos: [],
    };
  },
  components: {
    MostrandoProdutos,
    CriandoProdutos,
  },
};
</script>
<style >
.mt-10 {
  margin-top: 10px;
}
</style>