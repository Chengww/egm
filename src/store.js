import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: {},
  login: false
}

const mutations = {
  setUserInfo (state, userInfo = {}) {
    state.login = !!userInfo.loginUuid
    state.userInfo = userInfo
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {}
})
