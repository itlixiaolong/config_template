const state = () => ({
  carTest: 1
})
const mutations = {
  increase (state, num) {
    state.carTest += num
  }
}

const actions = {
  increaseByActions ({ state, commit }, paylaod) {
    if (state.carTest > 5) {
      debugger
      commit('increase', paylaod)
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
