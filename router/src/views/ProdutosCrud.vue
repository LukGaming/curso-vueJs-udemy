<template>
  <div>
    <Home />
      <ProductCrud :method="method"/>
  </div>
</template>
<script>
import Home from "./Home.vue";
import ProductCrud from '../components/productCrud.vue'
export default {
  data() {
    return {
      method: "create",
    };
  },
  components: {
    Home,
    ProductCrud
  },
  created() {
    if (this.$route.name == "produto/create") {
      //Em caso da rota ser Create, aparecer os inputs vazios
      this.method = "create";
    }
  },
};
</script>