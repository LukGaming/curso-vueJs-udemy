<template>
  
    <div class="citacao">
      <slot name="autor"></slot>
      <slot name="texto"></slot>
      <slot name="fonte"></slot>
    </div>
  
</template>

<script>
export default {};
</script>

<style scoped>
.citacao {
  margin: 20px;
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  min-width: 450px;
  max-width: 450px;
  min-height: 450px;
  max-height: 450px;
}
h6 {
  float: right;
}
p {
  text-align: justify;
}
h1 {
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
div .citacao {
  background: #f79d00; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(8, 80, 120),
    #64f38c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgb(8, 80, 120),
    #64f38c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
