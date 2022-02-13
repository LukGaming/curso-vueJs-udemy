<template>
    <div>
        <v-icon dark>mdi-plus</v-icon>

        <!--  -->
        <!--  -->
        <v-dialog v-model="dialog" width="700">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" dark fab small v-bind="attrs" v-on="on">
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </template>
            <CategoriaCrud :dialog="dialog" />
        </v-dialog>
    </div>
</template>

<script>
import eventBus from '../events/ProductCategory'
import criar_categoria from '../modules/produtos/criarCategoria'
import CategoriaCrud from '../views/CategoriaCrud.vue'
export default {
    props: {
        getAllCategoryes: Function,
        SnackBarOptions: Object,
        sucessMessage: String,
        dialog: Boolean
    },
    data() {
        return {
            nova_categoria: "",
            existe_categoria: false,
        }
    },
    components: {
        CategoriaCrud
    },
    methods: {
        ...criar_categoria,
    },

    created() {
    },
    mounted() {
        // adding eventBus listener
        eventBus.$on('categoria_criada', () => {
            this.dialog = false
        })
    },


}
</script>

<style lang="">

</style>
