const data = { courses: [] },
  state = () => data,
  getters = { courses: (state) => state.courses },
  mutations = {
    // Courses
    appendCourse(state, data) {
      state.courses.push(data)
    },
    setCourses(state, data) {
      state.courses = data
    },
    deleteCourse(state, n) {
      state.courses.splice(n, 1)
    },
  },
  actions = {
    // Courses
    getCourses({ commit }) {
      this.$axios.$get('courses').then((res) => commit('setCourses', res))
    },
    deleteCourse({ commit }, { id, n }) {
      this.$axios.$delete('courses/' + id).then(() => commit('deleteCourse', n))
    },
  },
  store = { state, getters, mutations, actions }

export default store
