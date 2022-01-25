<template >
    <div>
        <v-btn
            :class="{
                gold: gold,
                primary: primary,
                secondary: secondary,
                red: red,
                blue, blue,
                green: green,
                textLight: textLight
            
            }"
        >{{ nome }}</v-btn>
    </div>
</template>
<script>




export default {
    props: {
        nome: String,
        gold: {
            type: Boolean,
            default: false
        },
        primary: {
            type: Boolean,
            default: false
        },
        secondary: {
            type: Boolean,
            default: false
        },
        red: {
            type: Boolean,
            default: false
        },
        blue: {
            type: Boolean,
            default: false
        },
        green: {
            type: Boolean,
            default: false
        },
        textLight: {
            type: Boolean,
            default: false
        }

    }
}

</script>
<style >
.wrapper {
    text-align: center;
}

.gold {
    background: rgb(235, 199, 53);
    background: -moz-linear-gradient(
        top,
        rgba(235, 199, 53, 1) 0%,
        rgba(255, 232, 113, 1) 17%,
        rgba(186, 125, 29, 1) 72%,
        rgba(206, 157, 40, 1) 100%
    );
    background: -webkit-linear-gradient(
        top,
        rgba(235, 199, 53, 1) 0%,
        rgba(255, 232, 113, 1) 17%,
        rgba(186, 125, 29, 1) 72%,
        rgba(206, 157, 40, 1) 100%
    );
    background: linear-gradient(
        to bottom,
        rgba(235, 199, 53, 1) 0%,
        rgba(255, 232, 113, 1) 17%,
        rgba(186, 125, 29, 1) 72%,
        rgba(206, 157, 40, 1) 100%
    );
    box-shadow: inset 0 0 4px #fff;
    outline: none;
    border: 0;
    border-radius: 6px;
    overflow: hidden color #000;
    position: relative;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
    font-weight: bold;
    font-size: 15px;
    border: 1px solid #bd772a;
}
.textLight {
    color: white !important;
}
.gold:active {
    background: rgb(235, 199, 53);
    background: -moz-linear-gradient(
        bottom,
        rgba(235, 199, 53, 1) 0%,
        rgba(255, 232, 113, 1) 17%,
        rgba(186, 125, 29, 1) 72%,
        rgba(206, 157, 40, 1) 100%
    );
    background: -webkit-linear-gradient(
        bottom,
        rgba(235, 199, 53, 1) 0%,
        rgba(255, 232, 113, 1) 17%,
        rgba(186, 125, 29, 1) 72%,
        rgba(206, 157, 40, 1) 100%
    );
    background: linear-gradient(
        to top,
        rgba(235, 199, 53, 1) 0%,
        rgba(255, 232, 113, 1) 17%,
        rgba(186, 125, 29, 1) 72%,
        rgba(206, 157, 40, 1) 100%
    );
}
.gold:hover {
    background: -webkit-linear-gradient(
        bottom,
        rgb(245, 200, 23) 0%,
        rgb(233, 197, 18) 17%,
        rgb(223, 145, 21) 72%,
        rgb(240, 171, 12) 100%
    );
    background: linear-gradient(
        to top,
        rgb(236, 192, 13) 0%,
        rgb(233, 196, 10) 17%,
        rgb(236, 146, 0) 72%,
        rgb(231, 164, 7) 100%
    );
}
</style>