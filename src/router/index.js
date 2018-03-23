import Vue from 'vue'
import Router from 'vue-router'
// import GameRoute from './gameRoute'

import EmptyPage from '@/components/EmptyPage'
import AddGameComponent from '@/components/GameForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmptyPage',
      component: EmptyPage
    },
    {
      path: '/AddGame',
      name: 'AddGame',
      component: AddGameComponent
    }
  ]
})
