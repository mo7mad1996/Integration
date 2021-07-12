const data = {
    user: {},
  },
  state = () => data,
  getters = {
    user: (state) => state.user,
  },
  mutations = {
    setUser(state, user) {
      state.user = user
    },
  },
  actions = {
    check({ commit }) {
      commit('setUser', JSON.parse(sessionStorage.getItem('user')))
    },
  },
  store = { state, getters, mutations, actions }
export default store
