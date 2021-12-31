<template lang="">
<div>
    <div class="d-flex column justify-center ">
        <h1 v-if="method == 'create'">Criando um novo Produto</h1>
    </div>
    <div>
        <v-snackbar v-model="snackbar" :multi-line="multiLine" color="success" top right class="message">
            {{sucessMessage}}

            <template v-slot:action="{ attrs }">
                <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
                    fechar
                </v-btn>
            </template>
        </v-snackbar>

        <v-form ref="form" lazy-validation class="mx-16">
            <v-text-field v-model="nome" label="Name">
            </v-text-field>
            <div v-if="v$.nome.$error">
                <v-alert color="red" type="warning" dense>
                    O campo de <strong>Nome</strong> deve conter entre 3 e 50 caracteres
                </v-alert>
            </div>

            <v-text-field  v-model="valor"  label="Valor" type="number" prefix="R$"></v-text-field>
            
            <div v-if="v$.valor.$error">
                <v-alert color="red" type="warning" dense>Campo de <strong>Valor</strong> não pode ficar vazio</v-alert>
            </div>
            <v-textarea v-model="descricao" label="Descricao"></v-textarea>
            <div v-if="v$.descricao.$error">
                <v-alert color="red" type="warning" dense>Campo de <strong>Descricao</strong> deve conter entre 20 e 2000 Caracteres</v-alert>
            </div>
            <v-btn color="primary" @click="submit" class="mt-10">
                Cadastrar Produto
            </v-btn>

        </v-form>
    </div>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {
    useCurrencyInput
} from 'vue-currency-input'
import {
    required,
    maxLength,
    minLength,
    helpers,
    numeric
} from '@vuelidate/validators'
export default {

    setup(props) {
        const {
            inputRef
        } = useCurrencyInput(props.options)
        return {
            v$: useVuelidate(),
            inputRef
        };
    },
    data() {
        return {
            error: "",
            id: null,
            nome: null,
            valor: "",
            descricao: "",
            sucessMessage: "",
            snackbar: false,
            multiLine: true,
        };
    },
    props: {
        method: String,
        options: Object
    },
    created() {},
    methods: {
        async submit() {

            if (this.method == "create") {
                const isFormCorrect = await this.v$.$validate()
                if (!isFormCorrect) {

                    return
                } else {
                    this.$http.post('', {
                        id: null,
                        nome: this.nome,
                        valor: this.valor,
                        descricao: this.descricao
                    }).then(res => {
                        this.v$.$reset()
                        this.nome = ""
                        this.valor = ""
                        this.descricao = ""
                        this.sucessMessage = "Produto Criado com sucesso";
                        this.snackbar = true
                        return res
                    })

                }
                return;
            }
        },
    },
    validations() {
        return {
            nome: {
                required: helpers.withMessage("O campo de <strong>Nome</strong> não pode ficar vazio", required),
                minLength: minLength(3),
                maxLength: maxLength(100)

            },
            valor: {
                required,
                numeric
            },
            descricao: {
                required,
                minLength: minLength(20),
                maxLength: maxLength(2000)
            },
        };
    },
};
</script>

<style>
.message {
    margin-top: 60px;
}
</style>
