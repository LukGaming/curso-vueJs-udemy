<template lang="">
<div >
  
</div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            group: false
        };
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
