<template>
  <div>
    <div class="text-center mt-16">
      <SnackBarMessageComponent :SnackBarOptions="SnackBarOptions" />
      <input type="file" enctype="multipart/form-data" ref="file" />
      <button @click="uploadFiles">Enviar</button>
      <div v-if="image_uploaded">
          <img :src="path_image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import SnackBarMessageComponent from "../utils/SnackBarMessageComponent.vue";
export default {
  components: {
    SnackBarMessageComponent,
  },

  data() {
    return {
      SnackBarOptions: {
        snackbar: false,
        snackbarMessage: "",
      },
      images: [],
      image_uploaded: false,
      path_image: ""
    };
  },
  methods: {
    uploadFiles() {
      this.images = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append("file", this.images);
      this.$http.post("api/files", formData).then((res) => {
        this.path_image = "http://localhost:8000/"+res.data.imagem
        this.image_uploaded = true
      });
    },
  },
  created() {
    if (this.$route.query.register) {
      this.SnackBarOptions.snackbarMessage = "Cadastro efetuado com sucesso!";
      this.SnackBarOptions.snackbar = true;
    }

    if (this.$route.query.loginSucess) {
      this.SnackBarOptions.snackbarMessage = "Login efetuado com sucesso!";
      this.SnackBarOptions.snackbar = true;
    }
  },
};
</script>

<style scoped>
</style>
