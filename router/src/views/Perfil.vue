<template>
<div>
    <v-container>
        <div class="mt-10 d-flex justify-center display-1">
            Preenchimento de Perfil de Usuário
        </div>
        <div class="mt-16 mx-16">
            <v-text-field v-model="name" label="Nome Completo"></v-text-field>

            <!--Componente de Data -->
            <div>
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Data de nascimento" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" :active-picker.sync="activePicker" locale="pt-br" :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              " min="1950-01-01" @change="save"></v-date-picker>
                </v-menu>
            </div>
            <!--Componente de Data -->
            <vue-anka-cropper @cropper-saved="ImagemEditada" @cropper-error="erroSelectImage" @cropper-file-selected="cropperFileSelected" :options="{
            selectButtonLabel: 'Selecionar Imagem',
            dropareaMessage: 'Escolha uma foto para seu perfil',
            maxFileSize: 1000000,
          }"></vue-anka-cropper>
            <div v-if="erro_imagem">
                <v-alert type="info" class="mt-4" border="right" color="pink" dark>
                    A imagem deve obter no máximo 1 mb
                </v-alert>
            </div>
        </div>
        <!-- <img :src="cropperImgAfterEdit" alt="" /> -->
        <v-row v-if="cropperImgAfterEdit" class="d-flex justify-center mt-5">
            <v-col cols="2">
                <v-img :src="cropperImgAfterEdit" aspect-ratio="1" class="grey lighten-2">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
        <div class="d-flex justify-center mt-4">
            <v-btn depressed color="primary" @click="submit">
                Salvar
            </v-btn>
        </div>
    </v-container>
</div>
</template>

<script>
import vueAnkaCropper from "vue-anka-cropper";
export default {
    data() {
        return {
            name: "",
            activePicker: null,
            date: null,
            menu: false,
            cropperImgAfterEdit: "",
            erro_imagem: false,
        };
    },
    components: {
        vueAnkaCropper
    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.activePicker = "YEAR"));
        },
    },
    methods: {
        save(date) {
            this.$refs.menu.save(date);
        },
        ImagemEditada(event) {
            this.cropperImgAfterEdit = event.croppedImageURI;
        },
        erroSelectImage(event) {
            this.erro_imagem = true;
            return event;
        },
        cropperFileSelected() {
            this.erro_imagem = false;
        },
        submit() {
            console.log(this.name)
            console.log(this.cropperImgAfterEdit)
            console.log(this.date)
        }
    },
};
</script>

<style>

</style>
