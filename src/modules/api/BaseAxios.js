import axios from 'axios'
import RestApiConstant from 'Constant/RestApiConstant'

export default new axios.create({
    baseURL: RestApiConstant.REST_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})