import axios from 'axios'
import RestApiConstant from 'Constant/RestApiConstant'
import Store from 'Store'
import GloablMethods from 'Plugin/GlobalMethods'
import Log from '../../utils/Log'
import ErrorResponse from '../../data/constant/ErrorResponse'

const HTTP_OK = 200
export const SUCCESS_CODE = 1000

const headers = {
    'Content-Type': 'application/json'
}

let userInfo = Store.state.userInfo

if (userInfo != null) {
    headers.token = userInfo.token
}

const handler = {
    succes: (result) => {
        Log.d(result)

        if (result.status === HTTP_OK) {
            if (
                result.data.code >= ErrorResponse.INVALID_TOKEN &&
                result.data.code < ErrorResponse.ANOTHER_ERROR
            ) {
                GloablMethods.showModal(
                    'Authorization Failed',
                    result.data.message,
                    result.data.code
                )
            }

            return result.data
        } else {
            return {
                resultStatus: ErrorResponse.GENERAL_ERROR,
                result: null,
                memo: 'System Busy'
            }
        }
    },
    error: (error) => {
        Log.d(error)

        return {
            resultStatus: ErrorResponse.GENERAL_ERROR,
            result: null,
            memo: 'System Busy'
        }
    }
}

const BaseAxios = new axios.create({
    baseURL: RestApiConstant.REST_API_URL,
    headers: headers
})

BaseAxios.interceptors.response.use(handler.succes, handler.error)

export default BaseAxios