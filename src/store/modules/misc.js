const state = {
  drawer: false
}

const getters = {
  getDrawerState: (state) => {
    return state.drawer
  }
}

const mutations = {
  changeDrawerState (state) {
    state.drawer = !state.drawer
  },

  closeDrawer () {
    state.drawer = false
  }
}

const actions = {
  changeDrawerState (context) {
    context.commit('changeDrawerState')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
