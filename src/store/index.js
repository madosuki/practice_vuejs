import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: [
    {id: 1, name: 'ギータ'},
    {id: 2, name: 'むったん'}
  ],
  count: 0
}

const actions = {
  done ({state, commit}) {
    commit('done')
  },
  increment ({state, commit}) {
    commit('increment')
  },
  decrement ({commit}) {
    commit('decrement')
  },
  savecount ({state, commit}) {
    commit('savecount')
  },
  setcount ({state, commit}) {
    commit('setcount')
  }
}

const mutations = {
  done (state) {
    console.log('mutations:', state.route.params.id)
  },
  increment () {
    state.count = state.count + 1
  },
  decrement () {
    if (state.count !== 0) {
      state.count = state.count - 1
    }
  },
  savecount (state) {
    const tmp = state.count
    console.log(tmp)
    sessionStorage.setItem('count', tmp)
    // localStorage.setItem('count', tmp)
  },
  setcount () {
    // const tmp = localStorage.getItem('count')
    const tmp = sessionStorage.getItem('count')
    if (tmp !== null) {
      state.count = tmp
    }
  }
}

const getters = {
  list: state => state.list,
  count: state => state.count,
  detail: state => {
    return state.list.find(l => l.id.toString() === state.route.params.id.toString()) || {}
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
