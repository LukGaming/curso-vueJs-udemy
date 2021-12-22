<template>
  <div id="app">
    <h1>Tarefas</h1>

    <ProgressBar />
     <Todo />

  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import Todo from "./components/Todo";
export default {
  components: { ProgressBar, Todo },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app h1 {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
