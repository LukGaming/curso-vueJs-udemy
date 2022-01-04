<template>
<div class="mt-16">
    <v-container>
        <div class="d-flex justify-center">
            <h1 class="mb-2 mt-16">
                Criando uma nova Categoria
            </h1>
        </div>
        <v-snackbar v-model="snackbar" top right class="mt-16" color="success">
            {{messageSnackBar}}
            <template v-slot:action="{ attrs }">
                <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
                    <div> Fechar</div>
                </v-btn>
            </template>
        </v-snackbar>
        <v-form ref="form" centralized>

            <div v-if="method == 'edit' || method == 'show' " class="my-8">
                <CriadorCategoriaComponent :usuarioCriador="usuarioCriador" />
            </div>

            <v-text-field v-model="nome_categoria" label="Nome da Categoria" :disabled="inputsDisabled"></v-text-field>
            <div class="input-errors" v-if="v$.nome_categoria.$error ">
                <v-alert border="bottom" color="pink darken-1" dark>
                    O nome da categoria deve obter entre 3 e 20 Caractéres
                </v-alert>
            </div>
            <div v-if="categoriaExists">
                <v-alert border="bottom" color="pink darken-1" dark>
                    Esta categoria já existe
                </v-alert>
            </div>
            <div v-if="method == 'create'">
                <v-btn color="warning" @click="submit">
                    Cadastrar Categoria
                </v-btn>
            </div>
            <div v-if="method == 'edit'" class="d-flex justify-space-around row">
                <v-btn color="success" @click="submit">
                    Editar Categoria
                </v-btn>
                <v-btn color="warning" @click="deletCategory">
                    Excluir Categoria
                </v-btn>
            </div>
        </v-form>
    </v-container>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {
    required,
    minLength,
    maxLength
} from '@vuelidate/validators'
import CriadorCategoriaComponent from '../components/CriadorCategoriaComponent.vue'
export default {
    data() {
        return {
            id: null,
            snackbar: false,
            nome_categoria: "",
            categoriaExists: false,
            method: "create",
            messageSnackBar: "",
            inputsDisabled: false,
            usuarioCriador: {
                nameUserCreatorOfCategoria: "",
                idUserCreatorOfCategoria: 0
            }

        }
    },
    components: {
        CriadorCategoriaComponent
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    created() {

        if (this.$route.name == "categoria/create") {
            this.method = "create"
        }
        if (this.$route.name == "categoria/edit") {
            this.method = "edit"
            this.id = this.$route.params.id
            this.getCategoryByid();
        }
        if (this.$route.name == "categoria/show") {
            this.method = "show"
            this.inputsDisabled = true
            this.id = this.$route.params.id
            this.getCategoryByid();
        }

    },
    methods: {
        async submit() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) {
                return isFormCorrect
            } else {
                if (this.method == "create") {
                    this.$http.get(`categorias?nome_categoria=${this.nome_categoria}`).then(res => {
                        if (res.data.length > 0) {
                            this.categoriaExists = true
                        } else {
                            this.categoriaExists = false
                            this.$http.post(`categorias`, ({
                                id: null,
                                nome_categoria: this.nome_categoria,
                                User_Id_Creator: 0, //Trocar depois para o Id da sessão

                            }))
                            this.v$.$reset()
                            this.snackbar = true
                            this.messageSnackBar = "Categoria Criada com sucesso!"
                            this.nome_categoria = ""
                        }

                    })
                }
                if (this.method == "edit") {
                    this.$http.get(`categorias?nome_categoria=${this.nome_categoria}`).then(res => {
                        if (res.data.length > 0) {
                            this.categoriaExists = true

                        } else {
                            this.categoriaExists = false
                            this.$http.patch(`categorias/${this.id}`, {
                                nome_categoria: this.nome_categoria
                            }).then(res => {
                                this.snackbar = true
                                this.messageSnackBar = "Categoria editada com sucesso!"
                                return res
                            })
                        }
                    })
                }

                //Caso não exista, cria-la e enviar o id do usuário logado no momento junto!
            }
        },
        deletCategory() {
            this.$http.delete(`categorias/${this.id}`).then(res => {
                this.$router.push({
                    path: '/categorias',
                    query: {
                        deleted: 'true'
                    }
                })
                return res
            })
        },
        getCategoryByid() {
            this.$http.get(`categorias?id=${this.id}`).then(res => {
                if (res.data.length > 0) {
                    this.nome_categoria = res.data[0].nome_categoria
                    this.$http.get(`usuarios/${res.data[0].User_Id_Creator}`).then(res => {
                        this.usuarioCriador.nameUserCreatorOfCategoria = res.data.nome
                        this.usuarioCriador.idUserCreatorOfCategoria = res.data.nome.id
                        return res
                    })
                } else {
                    //Mostrar que categoria nao foi encontrada de alguma forma
                }
            })
        }
    },
    validations() {
        return {
            nome_categoria: {
                required,
                minLength: minLength(3),
                maxLength: maxLength(20),
            }
        }
    }
}
</script>

<style>
[centralized] {
    margin-left: 15%;
    margin-right: 15%;
}
</style>
