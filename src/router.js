import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Index from './views/Index.vue'
import User from './views/settings/User.vue'
import Goods from './views/goods/Goods.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index/:isEmployee',
      name: 'index',
      redirect: '/goods/goods'
    },
    {
      path: '/settings',
      component: Index,
      redirect: '/settings/user',
      children: [{
        path: 'user',
        name: 'user',
        component: User
      }]
    },
    {
      path: '/goods',
      component: Index,
      redirect: '/goods/goods',
      children: [{
        path: 'goods',
        name: 'goods',
        component: Goods
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Index.vue')
    },
    {
      path: '*',
      component: Login

    }
  ]
})
