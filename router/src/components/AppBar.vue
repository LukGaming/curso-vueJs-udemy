<template>
<div>
    <v-app App>
        <v-main>

            <v-card class="mx-auto overflow-hidden" style="min-height: 100vh;" absolute>
                <div>

                    <v-app-bar color="deep-purple" dark fixed>
                        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

                        <v-toolbar-title>Title</v-toolbar-title>
                    </v-app-bar>
                    <v-navigation-drawer v-model="drawer" fixed temporary>
                        <v-list>
                            <v-list-item class="px-2 d-flex justify-center">
                                <v-list-item-avatar>
                                    <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6 d-flex justify-center">
                                        {{userData.name}}
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="d-flex justify-center">{{userData.email}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        <v-divider></v-divider>
                        <v-list nav dense>
                            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                                <div v-for="(routerLink, index) in routerlinks" :key="index">
                                    <router-link :to="routerLink.Routerlink" style="text-decoration: none; color: inherit;" >
                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon>{{routerLink.icon}}</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-title>{{routerLink.nome}}</v-list-item-title>
                                        </v-list-item>
                                    </router-link>
                                </div>
                            </v-list-item-group>
                        </v-list>
                        <template v-slot:append>
                            <div class="pa-2 d-flex justify-center ">
                                <v-btn color="black" class="white--text" block @click="logout">
                                    Logout
                                </v-btn>
                            </div>
                        </template>

                    </v-navigation-drawer>
                </div>

                <transition appear enter-active-class="animate__animated animate__bounceInLeft animate__faster" leave-active-class="animate__animated animate__bounceOutRight animate__faster" mode="out-in">
                    <router-view class="mt-4">
                    </router-view>
                </transition>

            </v-card>

            <SnackBarMessageComponent :SnackBarOptions="SnackBarOptions" />
        </v-main>
    </v-app>
</div>
</template>

<script>

import logout from '../modules/session/logout'
import SnackBarMessageComponent from '../utils/SnackBarMessageComponent.vue'
export default {
    data: () => ({
        drawer: false,
        group: false,
        menuIsValid: true,
        SnackBarOptions: {
            snackbarMessage: "",
            snackbar: false
        },
        userData:{
            name: "",
            email: "",
        },
        routerlinks: [{
                nome: "Página inicial",
                icon: "mdi-home",
                Routerlink: "/"
            },
            {
                nome: "Produtos",
                icon: "mdi-view-dashboard",
                Routerlink: "/produtos"
            },
            {
                nome: "Categorias",
                icon: "mdi-view-dashboard",
                Routerlink: "/categorias"
            }
        ]

    }),
    methods: {
        ...logout,
        getUserData(){
            this.userData.name = localStorage.getItem('name');
            this.userData.email = localStorage.getItem('email');

        }
        
    },
    created() {
        this.getUserData()
        if (this.$route.name == 'login' || this.$route.name == 'register') {
            this.menuIsValid = false

        }
    },
    components: {
        SnackBarMessageComponent
    }
}
</script>

<style lang="">

</style>
