<template>
<div>
    <div class="d-flex">
        <v-select v-model="select" :items="categorias" label="Categoria"></v-select>
        <v-icon dark>
            mdi-plus
        </v-icon>

        <!--  -->
        <!--  -->
        <v-dialog v-model="dialog" width="700">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" dark fab small v-bind="attrs" v-on="on">
                    <v-icon dark>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5 grey lighten-2 d-flex justify-center">
                    Criando nova Categoria
                </v-card-title>

                <v-container>
                    <v-text-field label="Nome da Categoria" v-model="nova_categoria"></v-text-field>
                    <v-alert v-if="existe_categoria" border="bottom" color="pink darken-1" dark>Essa categoria já existe!</v-alert>
                </v-container>

                <v-spacer></v-spacer>
                <div class="d-flex justify-space-around">
                    <v-btn color="primary" class="my-6" @click="criar_categoria">
                        Criar
                    </v-btn>
                    <v-btn color="primary" class="my-6" text @click="dialog = false">
                        Cancelar
                    </v-btn>

                </div>

            </v-card>
        </v-dialog>

    </div>
</div>
</template>

<script>
import criar_categoria from '../modules/produtos/criarCategoria'
export default {
    props: {
        categorias: Array,
        select: Boolean,
        dialog: Boolean,
        getAllCategoryes: Function,
        snackbar: Boolean,
        sucessMessage: String
    },
    data() {
        return {
            nova_categoria: "",
            existe_categoria: false
        }
    },
    methods: {
        ...criar_categoria
    }
}
</script>

<style lang="">

</style>
