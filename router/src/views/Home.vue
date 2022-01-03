<template>
<div>

    <div class="text-center">

        <v-snackbar v-model="snackbar" :color="colorSnackBar" top right class="mt-16">
            {{ Message }}

            <template>
                <v-btn :color="colorButtonSnackBar" @click="snackbar = false" class="ml-4">
                    fechar
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</div>
</template>

<script>
export default {
    components: {

    },

    created() {
        if (this.$route.query.register) {
            this.Message = "Registro efetuado com sucesso!"
            this.snackbar = true
        }
    },
    data() {
        return {
            colorSnackBar: "success",
            snackbar: false,
            Message: "",
            colorButtonSnackBar: "primary"
        }
    },

};
</script>

<style scoped>

</style>
