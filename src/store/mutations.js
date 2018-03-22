import state from './state'

export default {

  changeDrawerState () {
    state.drawer = !state.drawer
  },

  closeDrawer () {
    state.drawer = false
  }
}
