var vm = new Vue({
    el: '.app',
    data: {
        running: false,
        playerLife: '10',
        monsterLife: '10'
    },
    methods: {
        startGame(){
            this.running = true,
            this.playerLife = '100',
            this.monsterLife = '100'
        },
        attack(especial){
            
            Min = 5;
            Max = 10;
            console.log(this.randomNumber(Min, Max));
        },
        randomNumber(Min, Max){
            const value = Math.random() * (Min - Max) + Min;
            return Math.round(value);
        }
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    watch: ''
})