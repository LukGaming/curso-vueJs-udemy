<template lang="">
<div>
    <v-app-bar color="orange" elevation="4" class="mb-4">
        <router-link to="/" exact class="mr-8">
            <v-icon large>mdi-home</v-icon>
        </router-link>
        <router-link to="/produtos" exact class="mr-4  " active-class="teste" style="text-decoration: none">
            <div class="btn-menu">Produtos</div>
        </router-link>
        <router-link to="/produtos/crud" exact class="mr-4 " active-class="teste" style="text-decoration: none">
            <div class="btn-menu">Produtos Crud</div>
        </router-link>

    </v-app-bar>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        this.nomeRota = this.$route.name;
    },
};
</script>

<style>
.btn-menu {
    margin: 10px;
    font-size: 1.2rem;
    border-radius: 5px;
    text-decoration: none;
    color: white;
}

.teste {
    border-radius: 5px;
    background-color: #1867c0;
    text-decoration: none;
}
</style>
