import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  likes: []
}

const mutations = {
  ['SET_LIKE'](state, film) {
    let Index = state.likes.findIndex((item) => {
      return item.id === film.id
    })
    if (Index >= 0) {
      state.likes.splice(Index, 1)
    }else {
      state.likes.push(film)
    }
  }
}

const getters = {
  likes: state => state.likes
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  mutations,
  getters,
  state,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

