<template>
<div>
    <Home />

    <div>
        <v-container>
            <router-link to="/produtos/create">
                <v-btn elevation="2" color="primary" class="ml-4">Novo Produto</v-btn>
            </router-link>

            <h1 class="d-flex justify-center">visualizando Produtos</h1>

           <ShowProducts/>
        </v-container>
    </div>
</div>
</template>

<script>
import ShowProducts from '../components/ShowProducts.vue'
import Home from "./Home.vue";
export default {

    components: {
        Home,
        ShowProducts
    },
    data() {
        return {
            headers: [{

                    align: 'start',
                    sortable: false,
                    id: 'id',
                },
                {
                    text: 'Id do Produto',
                    value: 'id'
                },
                {
                    text: 'Nome',
                    value: 'nome'
                },
                {
                    text: 'Valor (R$)',
                    value: 'valor'
                },
                {
                    text: 'Ações',
                    value: 'Options'

                },
            ],
            desserts: [

            ],
        }
    },
    created() {
        this.$http("").then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                this.desserts.push({
                    id: res.data[i].id,
                    ...res.data[i],
                   
                })

            }
            return res
        });
    },
};
</script>
