//main
import Vue from "./modules/config/AppConfig"
import App from "./views/App.vue"
import router from "./modules/router"
import store from "./data/store"

//worker
import "./modules/config/registerServiceWorker"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
