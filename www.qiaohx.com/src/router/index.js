import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tool from '@/components/Tool'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import EditOnline from '@/components/EditOnline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Tool',
      name: 'Tool',
      component: Tool
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/EditOnline',
      name: 'EditOnline',
      component: EditOnline,
      meta: {
        requireAuth: true
      }
    }

  ]
})
