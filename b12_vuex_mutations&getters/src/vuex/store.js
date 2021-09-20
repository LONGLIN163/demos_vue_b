import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    add (state,n) {
      //console.log("n---",n)
      console.log("mutations add")
      state.count+=n
    },
    minus (state) {
      state.count--
    }
  },
  getters:{
    count: (state) => {
      console.log("getter add")
      return state.count+=100
    }
  }
})

export default store; 