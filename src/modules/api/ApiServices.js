import BaseAxios from 'Api/BaseAxios'

//Services

const apiServices = {
    setToken: function(token) {
        BaseAxios.defaults.headers.common['token'] = token
    }
}

export default apiServices