<template >
  <div>
    <div>AAA</div>
    <v-stage ref="stage" :config="stageSize" __useStrictMode>
      <v-layer ref="layer" :config="moviment" __useStrictMode>
        <v-image
          __useStrictMode
          @dragmove="handleDragStart($event)"
          :config="imageConfig"
          @dragend="handleDragEnd($event)"
        />
      </v-layer>
    </v-stage>
  </div>
</template>
<script>
const width = window.innerWidth - (window.innerWidth / 10);
const height = window.innerHeight - (window.innerHeight / 10);


export default {
  data() {
    return {
      textNode: null,
      limitRight: window.innerWidth - (window.innerWidth / 5),
      limitLeft: window.innerWidth / 10,
      limitDown: window.innerHeight - (window.innerHeight / 10),
      limitTop: (window.innerHeight / 20),
      stageSize: {
        width: width,
        height: height
      },
      speed: 50,
      isDragging: null,
      image: null,
      imageConfig:
      {
        width: 50,
        height: 75,
        image: this.image,
        draggable: true,
      },
      imageConfig2:
      {
        x: 50,
        y: 0,
        width: 50,
        height: 75,
        image: this.image,
        draggable: true,
      },
      imageConfig3:
      {
        x: 100,
        y: 0,
        width: 50,
        height: 75,
        image: this.image,
        draggable: true,
      },
      moviment: {
        x: null,
        y: null
      }
    };
  },
  watch: {
    isDragging(val) {
      console.log(val)
    }
  },
  mounted() {
    this.textNode = this.$refs.layer.getNode();
  },
  created() {
    this.moviment.x = this.limitLeft + 150;
    this.moviment.y = this.limitTop + 10;

    window.addEventListener('keydown', (e) => {//Usando teclado
      if (e.key == 'ArrowRight') {//Para andar para direita, eu tenho que estar em um limite menor que  o tamanho total da tela
        console.log(this.textNode.x())
        console.log(this.limitRight)
        if (this.textNode.x() < this.limitRight) {

          this.textNode.x(this.textNode.x() + this.speed)
        }
      }
      if (e.key == 'ArrowLeft') {
        if (this.textNode.x() >= this.limitLeft) {//Para andar para esquerda, eu tenho  que estar em um limite maior que o da esquerda
          this.textNode.x(this.textNode.x() - this.speed)
        }
      }
      if (e.key == 'ArrowDown') {
        //Para andar para baixo, eu tenho que estar com o limite menor que a altura total
        console.log(this.textNode.y())
        if (this.textNode.y() < this.limitDown - (this.limitDown / 5)) {
          this.textNode.y(this.textNode.y() + this.speed)
        }
      }

      if (e.key == 'ArrowUp') {
        //Para andar para cima, eu preciso estar maior do que o limite para cima
        console.log("Posicao Y: " + this.textNode.y())
        if (this.textNode.y() > this.limitTop) {
          this.textNode.y(this.textNode.y() - this.speed)
        }
      }
    });
    const image = new window.Image();
    image.src = "https://img1.gratispng.com/20180314/pkq/kisspng-space-shuttle-free-content-spacecraft-clip-art-circulation-cliparts-5aa9e586ee7631.6942205015210837829768.jpg";
    image.onload = () => {
      this.image = image;
      this.imageConfig.image = image
    };
  },
  methods: {
    handleDragEnd(event) {
      console.log("chegando aqui")

      return event

    },
    clickTest(event) {
      // console.log(event)
      return event
    },
    handleDragStart(event) {

      if (this.textNode.absolutePosition().x > this.limitRight) {
        this.textNode.stopDrag()
        this.textNode.x(150)

      }

      if (this.textNode.absolutePosition().x < this.limitLeft) {

        this.textNode.stopDrag()
      }

      this.textNode.x(event.evt.layerX)
      this.textNode.y(event.evt.layerY)
    }
  }
};

</script>
<style>
</style>