import BaseAxios from 'Api/BaseAxios'
import ExampleServices from './ExampleService'

export default {
    setToken: function (token) {
        BaseAxios.defaults.headers.common['token'] = token
    },
    example: ExampleServices
}