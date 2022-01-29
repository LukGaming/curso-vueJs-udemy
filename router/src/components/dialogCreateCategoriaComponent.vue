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

            <v-card>
                <CategoriaCrud />
                <!-- <v-container>
                    <v-text-field label="Nome da Categoria" v-model="nova_categoria"></v-text-field>
                    <v-alert
                        v-if="existe_categoria"
                        border="bottom"
                        color="pink darken-1"
                        dark
                    >Essa categoria já existe!</v-alert>
                </v-container>

                <v-spacer></v-spacer>
                <div class="d-flex justify-space-around">
                    <v-btn color="primary" class="my-6" @click="criar_categoria">Criar</v-btn>
                    <v-btn color="primary" class="my-6" text @click="dialog = false">Cancelar</v-btn>
                </div>-->
            </v-card>
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
        sucessMessage: String
    },
    data() {
        return {
            nova_categoria: "",
            existe_categoria: false,
            dialog: false
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
