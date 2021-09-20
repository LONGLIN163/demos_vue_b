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
  actions:{
    // addAction: (context) => {
    //   context.commit('add',10)
    // },
    addAction: ({commit}) => {
      commit('add',10);
      setTimeout(() => {
        commit('minus')
      }, 3000);
      console.log("this line is excuted earlier than minus(),hahaha")
    },
    minusAction: ({commit}) => {
      commit('minus')
    }
  },
  getters:{
    count: (state) => {
      //console.log("getter add")
      return state.count+=100
    }
  },
})

export default store; 