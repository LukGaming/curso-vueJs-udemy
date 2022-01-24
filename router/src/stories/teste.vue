<template >
    <div>
        <button :class="{ primary: Primary, large: Large }">{{ nome }}</button>
    </div>
</template>
<script>


export default {
    props: {
        nome: String,
        Primary: Boolean,
        Large: Boolean
    }
}
</script>
<style >
</style>