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
    <transition :name="ChooseTypeOfAnimation" appear mode="out-in">
      <b-alert show v-if="ShowMessage === true" key="info"
        >Default Alert</b-alert
      >
      <b-alert show v-else variant="warning" key="warn">Default Alert</b-alert>
    </transition>
    <hr />

    <b-select v-model="ChooseTypeOfAnimation">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <b-button @click="exibir2 = !exibir2" class="mt-4"
      >Alternar Exibir Caixa</b-button
    >
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-Leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa mt-4 mb-4" v-if="exibir2"></div>
    </transition>
    <div class="m-4">
      <b-button class="m-4" @click="exibirAlertOrInfo = 'AlertComponent'"
        >Mostar Alert</b-button
      >
      <b-button class="m-4" @click="exibirAlertOrInfo = 'InfoComponent'"
        >Mostar Info</b-button
      >
      <transition name="fade" mode="out-in">
        <component :is="exibirAlertOrInfo"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import AlertComponent from "./alert.vue";
import InfoComponent from "./info.vue";
export default {
  data() {
    return {
      msg: "Olá mundo!",
      ShowMessage: true,
      ChooseTypeOfAnimation: "fade",
      exibir2: false,
      larguraBase: 0,
      exibirAlertOrInfo: "alert",
    };
  },
  components: {
    AlertComponent,
    InfoComponent,
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : +rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
      console.log("beforeEnter");
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    afterEnter() {
      console.log("After Enter");
    },
    enterCancelled() {
      console.log("Enter Canceled");
    },
    beforeLeave(el) {
      this.larguraBase = 200;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    afterLeave() {
      console.log("AfterLeave");
    },
    leaveCancelled() {
      console.log("Leave Cancelled");
    },
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
.caixa {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
