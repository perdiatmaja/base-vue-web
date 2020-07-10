import store from 'Store'

export default {
    showLoading() {
        store.commit('setLoading', true)
    },
    dissmissLoading() {
        store.commit('setLoading', false)
    },
    setUserInfo(val) {
        store.commit('setUserInfo', val)
    },
    isShowLoading() {
        return store.state.loading
    },
    goTo(route) {
        let path = this.$router.currentRoute.fullPath
        if (route !== path) {
          this.$router.push(route)
        }
    },
    getPath() {
        return this.$router.currentRoute.fullPath
    },
    getParams() {
        return this.$route.params
    },
    getUserInfo() {
        return store.state.userInfo
    },
    getToken() {
        return store.state.userInfo.token
    },
    isLoggedIn() {
        return store.state.userInfo !== null
    },
    getRole() {
        return store.state.userInfo.role
    },
    checkState() {
        if (!this.isLoggedIn() && this.getPath() !== "/login") {
            if (this.getPath() !== "/requestaccess") {
              location.replace("/login")
            }
        }

        if ((this.isLoggedIn() && this.getPath() === "/login") || (this.isLoggedIn() && this.getPath() === "/requestaccess")) {
            location.replace("/")
        }
    },
    isJson(jsonString) {
        try {
          JSON.parse(jsonString)
          console.log("JSON")
          return true
        } catch(e) {
            console.log(e)
          return false
        }
    }
}
