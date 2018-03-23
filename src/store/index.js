import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import misc from './modules/misc'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    usermodule: {
      namespaced: true,
      ...user
    },

    miscmodule: {
      namespaced: true,
      ...misc
    }

  }

})
