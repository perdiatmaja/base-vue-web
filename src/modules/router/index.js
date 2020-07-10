import Vue from "vue"
import Router from "vue-router"
import MainRouter from "./MainRouter"

Vue.use(Router)

let routes = []

MainRouter.forEach(function (item) {
  routes.push(item)
})

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
})
