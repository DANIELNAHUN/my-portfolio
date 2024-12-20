import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    me:{
        'fullname':'Daniel Nahun Calcina Fuentes',
        'shortname': 'Daniel Calcina',
        'birthdate': '10/12/1999',
        'phone_number': '+51 922996705',
        'email': 'danielnahuncalcinafuentes@gmail.com',
      }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
