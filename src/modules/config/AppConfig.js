import Vue from "vue"
import ApiServices from 'Api/ApiServices'
import GloablMethods from 'Plugin/GlobalMethods'

Vue.config.productionTip = false
Vue.prototype.$apiServices = ApiServices

Vue.mixin({
    methods: GloablMethods
})

export default Vue