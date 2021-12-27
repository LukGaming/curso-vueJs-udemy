<template>
  <div id="app" class="container">
    <h1>Animações</h1>
    <b-button variant="primary" class="mb-4" @click="ShowMessage = !ShowMessage"
      >Mostrar Mensagem</b-button
    >
    <!-- <transition name="fade" appear>
      <b-alert show v-if="ShowMessage">Default Alert</b-alert>
    </transition>
    <transition name="slide" appear="">
      <b-alert show v-if="ShowMessage">Default Alert</b-alert>
    </transition>
	<transition enter-active-class="animated bounce" leave-active-class="animated shakeX">
      <b-alert show v-if="ShowMessage">Default Alert</b-alert>
    </transition> -->
	<transition :name="ChooseTypeOfAnimation" appear>
      <b-alert show v-if="ShowMessage">Default Alert</b-alert>
    </transition>
	<hr>
	<b-select v-model="ChooseTypeOfAnimation">
		<option value="fade">Fade</option>
		<option value="slide">Slide</option>
	</b-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Olá mundo!",
      ShowMessage: true,
	  ChooseTypeOfAnimation: 'fade'
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
@keyframes slide-in {
  from {
    transform: translateX(4000px);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(4000px);
  }
  to {
    transform: translateX(0);
  }
}

.slide-enter-active {
  animation: slide-in 1s ease;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-out 1s ease;
  transition: opacity 1s;
}
.slide-enter,
.slide-leave {
  transform: opacity 2s;
}
</style>
