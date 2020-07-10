import RestApiConstant from 'Constant/RestApiConstant'
import BaseAxios from 'Api/BaseAxios'

export default {
    post: (param) => {
        return BaseAxios.post(RestApiConstant.EXAMPLE.TEST, param)
    }
}