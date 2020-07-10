const env = process.env

export default {
    name : env.NODE_ENV,
    baseUrl: env.BASE_URL,
    restApiUrl: env.VUE_APP_REST_API,
    appTitle: env.VUE_APP_TITTLE,
    appAuthor: env.VUE_APP_AUTHOR,
    routerMode: env.VUE_APP_ROUTER_MODE
}