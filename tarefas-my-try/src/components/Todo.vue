<template>
  <div>
    <div class="inputTodo">
      <input type="text" v-model="newTodoName" v-on:keyup.enter="newTodo" />
      <button class="buttonTodo" @click="newTodo">Adicionar Itens</button>
    </div>
    <div v-if="tasks" class="todos">
      <div v-for="(task, i) in tasks" :key="i">
        <div
          class="todo"
          :class="stateClass(task.pending)"
          @click.stop="Todofeito(task)"
        >
          <div class="remover">
            <button @click.stop="removeTodo(i)">x</button>
          </div>
          {{ task.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import eventBus from "./eventBus";

export default {
  data() {
    return {
      newTodoName: "",
      tasks: [],
    };
  },
  methods: {
    newTodo() {
      if (this.newTodoName) {
        this.tasks.push({ name: this.newTodoName, pending: true });
        this.newTodoName = "";
        this.atualizaDone();
      }
    },
    removeTodo(todo) {
      this.tasks.splice(todo, 1);
      this.atualizaDone();
    },
    Todofeito(todo) {
      todo.pending = !todo.pending;
      this.atualizaDone();
      console.log("Todo Feito");
    },
    atualizaDone() {
      let done = 0;
      this.tasks.forEach((element) => {
        if (element.pending == false) {
          done++;
        }
      });
      eventBus.$emit("progressbar", this.tasks, done);
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.todo {
  position: relative;
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
  padding-right: 5px;
  width: 100%;
}
.remover button {
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  border-radius: 50%;
  color: black;
  font-size: 1.2rem;
}
.pending {
  background-color: red;
}
.done {
  background-color: green;
}
.changeTodoStyle {
  height: 100%;
}
</style>