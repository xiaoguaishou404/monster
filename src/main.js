import Vue from "vue"
import App from "./App.vue"

import mButton from "./mButton.vue"
import mIcon from "./mIcon.vue"

Vue.component('m-button', mButton)
Vue.component('m-icon', mIcon)

new Vue({
    el: "#app",
    render: h => h(App)
})