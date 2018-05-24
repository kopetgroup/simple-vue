import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StatusWeb from '@/components/StatusWeb'
import LoginPage from '@/components/LoginPage'
import LogoutPage from '@/components/LogoutPage'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  if (localStorage.login === 'true') {
    return next()
  } else {
    next('/login')
  }
}
const lojin = (to, from, next) => {
  if (localStorage.login === 'true') {
    next('/Home')
  }
  return next()
}

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter: lojin
    },
    {
      path: '/logout',
      name: 'LogoutPage',
      component: LogoutPage
    },
    {
      path: '/',
      name: 'Home',
      component: HelloWorld,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/:id',
      name: 'kopet',
      props: {
        default: true
      },
      component: HelloWorld,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/status/:id',
      name: 'status',
      props: {
        default: true
      },
      component: StatusWeb,
      beforeEnter: ifAuthenticated
    }
  ]
})
