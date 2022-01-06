<template lang="">
<div>
    <div class="d-flex align-center " style="min-height: 90vh">
        <v-container>
            <v-row no-gutters>
                <v-col align-self="center" class="borda-login container-color  px-10 py-10" outlined color="purple">
                    <div class="d-flex justify-center h2">
                        <div class="font-weight-medium">Página de Cadastro de usuário</div>
                    </div>
                    <div class="inputs mt-4">
                        <v-text-field label="Nome Completo" hide-details="auto" class="mt-4" v-model="nome"></v-text-field>
                        <div v-if="v$.nome.$error">
                            <v-alert border="left" color="red" type="error" dense>O nome deve conter entre 5 e 50 Caracteres</v-alert>
                        </div>
                        <v-text-field label="Email" hide-details="auto" class="mt-4" v-model="email"></v-text-field>
                        <div v-if="v$.email.$error">
                            <v-alert border="left" color="red" type="error" dense>Email invalido</v-alert>
                        </div>
                        <div v-if="email_existe == true">
                            <v-alert border="left" color="red" type="error" dense>Este Email já está sendo utilizado</v-alert>
                        </div>
                        <v-text-field label="Senha" type="password" class="mt-4" v-model="senha"></v-text-field>
                        <div v-if="v$.senha.$error">
                            <v-alert border="left" color="red" type="error" dense>A senha deve obter entre 8 e 16 caractéres</v-alert>
                        </div>
                        <v-text-field label="Confirmar senha" type="password" class="mt-4" v-model="senhaConfirm"></v-text-field>
                        <div v-if="ConfirmPassword">
                            <v-alert border="left" color="red" type="error" dense>As senhas não confirmam</v-alert>
                        </div>
                    </div>
                    <div class="d-flex justify-space-around mt-4">
                        <v-btn color="success" @click="cadastrar" :loading="loading">Logar</v-btn>
                        <router-link to="/register">
                            <v-btn color="primary">Criar uma conta</v-btn>
                        </router-link>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {
    required,
    maxLength,
    minLength,
    email

} from '@vuelidate/validators'
export default {
    setup() {

        return {
            v$: useVuelidate(),

        };
    },
    data() {
        return {
            loading: false,
            nome: "",
            email: "",
            senha: "",
            senhaConfirm: "",
            email_existe: false,
            ConfirmPassword: false
        }
    },
    created() {
        if (this.$session.exists()) {
            this.$router.push('/')
        }
    },
    methods: {
        async cadastrar() {

            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) {
                return isFormCorrect
            } else {
                if (this.senha == this.senhaConfirm) {
                    this.ConfirmPassword = false
                    this.$http.get(`usuarios?email=${this.email}`).then(res => {
                        if (res.data.length > 0) {
                            this.email_existe = true
                        } else {
                            this.email_existe = false
                            this.$http.post('usuarios', {
                                id: null,
                                nome: this.nome,
                                email: this.email,
                                senha: this.senha
                            }).then(res => {
                                console.log(res.data)
                                this.$session.start()
                                this.$session.set(
                                    'userId', res.data.id,
                                )
                                this.$session.set(
                                    'nome', this.nome,
                                )
                                this.$session.set(
                                    'email', this.email,
                                )
                                this.$router.push({
                                    path: '/',
                                    query: {
                                        register: 'true'
                                    }
                                })
                                return res
                            })
                        }
                    })
                } else {
                    this.ConfirmPassword = true

                    //Tudo ok pra poder enviar para o banco de dados

                }
            }

        }
    },
    validations() {
        return {
            nome: {
                required,
                maxLength: maxLength(50),
                minLengt: minLength(5)
            },
            email: {
                required,
                email
            },
            senha: {
                required,
                maxLength: maxLength(16),
                minLengt: minLength(8)
            }
        }
    }
}
</script>

<style lang="">

</style>

