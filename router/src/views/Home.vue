<template>
<div>

    <div class="text-center">
        <SnackBarMessageComponent :SnackBarOptions="SnackBarOptions" />

    </div>
</div>
</template>

<script>
import SnackBarMessageComponent from '../utils/SnackBarMessageComponent.vue'
export default {
    components: {
        SnackBarMessageComponent
    },

    data() {
        return {
            SnackBarOptions: {
                snackbar: false,
                snackbarMessage: "",
            }

        }
    },
    created() {
        // if (!this.$session.exists()) {
        //     this.$router.push('/login')
        // }
        if (this.$route.query.loginSucess) {
            this.SnackBarOptions.snackbarMessage = "Login efetuado com sucesso!"
            this.SnackBarOptions.snackbar = true

        }
    },

};
</script>

<style scoped>

</style>
