var vm = new Vue({
    el: '.app',
    data: {
        playerLife: '10',
        monsterLife: '10'
    },
    methods: {},
    computed: {
        hasResult() {
            console.log("teste");
            return this.playerLife == 0 || this.monsterLife == 0
            
        }
    },
    watch: ''
})