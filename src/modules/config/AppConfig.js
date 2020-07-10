import Vue from "vue"
import ApiServices from 'Api/ApiServices'

Vue.config.productionTip = false
Vue.prototype.$apiServices = ApiServices

export default Vue