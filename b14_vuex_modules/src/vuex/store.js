import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state= {
  count: 5
}

const mutations= {
  add (state,n) {
    console.log("mutations add")
    state.count+=n
  },
  minus (state) {
    state.count--
  }
}

const actions={
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
}

const getters={
  count: (state) => {
    return state.count+=100
  }
}

const moduleA={
  state,mutations,actions,getters
}

const store = new Vuex.Store({
  modules:{
    haha:moduleA
  }
})

export default store; 