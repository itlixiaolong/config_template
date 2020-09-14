import Vue from 'vue'
import Vuex from 'vuex'
import carMudule from './modules/car'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    carMudule
  }
})
