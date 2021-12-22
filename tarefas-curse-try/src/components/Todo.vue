<template>
  <div>
    <div class="inputTodo">
      <input type="text" v-model="newTodoName" />
      <button class="buttonTodo" @click="newTodo">Adicionar Itens</button>
    </div>
    <div v-if="tasks" class="todos">
      <div v-for="(task, i) in tasks" :key="i">
        <div
          class="todo"
          :class="stateClass(task.pending)"
          @click="Todofeito(i)"
        >
          <div class="remover">
            <button @click="removeTodo(i)">x</button>
          </div>
          {{ task.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodoName: "",
      tasks: [],
      done: 0,
      pending: 0,
    };
  },
  methods: {
    newTodo() {
      if (this.newTodoName) {
        this.tasks.push({ name: this.newTodoName, pending: true });
        this.newTodoName = "";
      }
    },
    removeTodo(todo) {
      this.tasks.pop(todo);
    },
    Todofeito(todo) {
      if (this.tasks[todo].pending) {
        this.tasks[todo].pending = false;
      } else {
        this.tasks[todo].pending = true;
      }
      
     
     
    },
    stateClass(todo) {
      return {
        pending: todo,
        done: !todo,
      };
    },
  },
};
</script>

<style >
.inputTodo {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.inputTodo input {
  width: 40%;
  height: 40px;
  font-size: 3rem;
}
.inputTodo button {
  background: #485563; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #29323c,
    #485563
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #29323c,
    #485563
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 10px;
  height: 50px;
  font-size: 2rem;
  margin: 10px;
}
.todos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.todo {
  margin: 10px;
  font-size: 2rem;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  min-width: 150px;
  height: 100px;
  cursor: pointer;
  user-select: none;
}
.remover {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 5px;
  width: 100%;
}
.remover button {
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #e74c3c,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #e74c3c,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.pending {
  background-color: red;
}
.done {
  background-color: green;
}
</style>