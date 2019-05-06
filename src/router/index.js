import Vue from 'vue'
import Router from 'vue-router'
import ContactListPage from '@/components/ContactListPage'
import LoginPage from '@/components/LoginPage'
import AddPage from '@/components/AddPage'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contact',
      name: 'ContactListPage',
      component: ContactListPage
    },
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/add',
      name: 'AddPage',
      component: AddPage
    },
    {
      path: '/updateuser/:userId',
      name: 'Update',
      component: Update
    }
  ]
})

