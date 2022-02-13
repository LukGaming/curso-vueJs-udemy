import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins/axios.js'
import './plugins/filters.js'
import './plugins/session.js'
import 'animate.css'
import './plugins/money.js'
import './utils/button_gold.css'
import '../node_modules/vue-anka-cropper/dist/VueAnkaCropper.css'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
Vue.config.productionTip = false
Vue.config.ignoredElements = [/ion-\w*/]

defineIonPhaser(window)

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faRocket, faShuttleSpace, faFluxCapacitor } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faRocket)
// library.add(faShuttleSpace)
// library.add(faFluxCapacitor)

// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
