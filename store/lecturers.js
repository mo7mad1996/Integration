const data = {
  lecturers: [],
}
const state = () => Object.assign({}, data),
  getters = {
    lecturers: (state) => state.lecturers,
  },
  mutations = {
    // Lecturers
    setLecturers(state, date) {
      state.lecturers = date
    },
    delete(state, n) {
      state.lecturers.splice(n, 1)
    },
  },
  actions = {
    // Lecturers
    getLecturers({ commit }) {
      this.$axios.$get('lecturers').then((res) => commit('setLecturers', res))
    },
    delete({ commit }, { id, n }) {
      this.$axios.$delete('lecturers/' + id).then(() => commit('delete', n))
    },
  }

const store = { state, getters, mutations, actions }
export default store
