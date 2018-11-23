import Vue from "vue"
import App from "./App.vue"
import { store } from "./store"
Vue.config.productionTip = false

/* eslint-disable no-new */
export default function setVueApp() {
  const vm = new Vue({
    el: "#app",
    store,
    template: "<App/>",
    components: { App }
  })
}

setVueApp()
