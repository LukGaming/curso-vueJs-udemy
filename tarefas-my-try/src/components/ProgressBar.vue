<template >
<div>
  <div class="porcentagem">
      
    <p>{{ progresso }}%</p>
    <div class="divProgresso">
      <div class="bgProgresso bgProgressoNaoConcluido" :style="{ width: progresso + '%' }"></div>
    </div>
    
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      progresso: 0,
    };
  },
  methods: {
    incrementProgress() {
      this.progresso += 10;
      console.log(this.progresso);
    },
  },
};
</script>
<style >
.porcentagem {
  display: flex;
  flex-direction: row;
}
.porcentagem p {
  font-size: 3rem;
  margin-left: 30px;
  margin-right: 30px;
}
.divProgresso {
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  height: 50px;
  border: 5px solid green;
  width: 100%;
}
.bgProgresso {
  
  width: 10%;
  height: 100%;
}
.bgProgressoConcluido{
    background: #FDFC47;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24FE41, #FDFC47);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24FE41, #FDFC47); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.bgProgressoNaoConcluido{
    background: #eb3349; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f45c43,
    #eb3349
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f45c43,
    #eb3349
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>