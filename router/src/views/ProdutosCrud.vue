<template>
  <div>
   
    <v-container>
      Estamos em produtos
      <ProductCrud :method="method"/>
      </v-container>
  </div>
</template>
<script>
import ProductCrud from '../components/productCrud.vue'
export default {
  data() {
    return {
      method: "create",
    };
  },
  components: {
    ProductCrud
  },
  created() {
    
    if (this.$route.name == "produto/create") {
      //Em caso da rota ser Create, aparecer os inputs vazios
      this.method = "create";
    }
    if(this.$route.name == "produto/edit"){
      this.method = "edit";
    }
    

  },
};
</script>