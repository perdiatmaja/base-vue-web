import Vue from "vue"
import Router from "vue-router"
import MainRouter from "./MainRouter"
import EnvConstant from "Constant/EnvConstant"

Vue.use(Router)

let routes = []

MainRouter.forEach(function (item) {
  routes.push(item)
})

export default new Router({
  mode: EnvConstant.routerMode,
  base: EnvConstant.baseURL,
  routes: routes
})
