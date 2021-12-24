<template lang="">
 
       <div>Nome Completo: {{nome + sobrenome}}</div>
   
</template>
<script>
export default {
    props: {
        nome: String,
        sobrenome: String
    }
}
</script>
<style lang="">
    
</style>