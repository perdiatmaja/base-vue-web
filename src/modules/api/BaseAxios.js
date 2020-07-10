import axios from 'axios'
import RestApiConstant from 'Constant/RestApiConstant'

export default new axios.create({
    baseURL: RestApiConstant.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})