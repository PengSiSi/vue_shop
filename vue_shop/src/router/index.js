import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import User from '../components/User.vue'
import Rights from '../components/Rights.vue'
import Roles from '../components/Roles.vue'
import VuexDemo from '../VuexDemo.vue'
import VuexTest from '../Vuex_Test.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',
    redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {path: '/welcome', component: Welcome},
      {path: '/user', component: User},
      {path: '/rights', component: Rights},
      {path: '/roles', component: Roles},
      {path: '/vuex', component: VuexDemo},
      {path: '/vuex_demo', component: VuexTest}
    ]}
  ]
})

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
