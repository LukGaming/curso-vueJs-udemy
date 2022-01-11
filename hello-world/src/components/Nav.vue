<template>
<div>
    <v-card class="mx-auto overflow-hidden" height="100">
        <v-app-bar color="deep-purple" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Title</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer dark v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon red>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </v-card>
    <v-row align="center" justify="space-around">
        <v-btn color="error"> Primary </v-btn>
    </v-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            group: null,
        };
    },
};
</script>

<style >
</style>
