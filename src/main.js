import Vue from "vue"
import App from "./App.vue"

import mButton from "./components/mButton.vue"
import mButtonGroup from "./components/mButtonGroup.vue"

import mIcon from "./components/mIcon.vue"

Vue.component('m-button', mButton)
Vue.component('m-button-group', mButtonGroup)
Vue.component('m-icon', mIcon)

new Vue({
    el: "#app",
    render: h => h(App)
})