<template lang="">
    <div>
        <Appbar />
    <CriandoProdutos />
    <Footer />
    </div>
</template>
<script>
import CriandoProdutos from "./produto/CriandoProdutos.vue";
import Appbar from "./Appbar.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    CriandoProdutos,
    Footer,
    Appbar,
  },
};
</script>
<style lang="">
</style>