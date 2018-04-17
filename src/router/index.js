import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => require(['@/pages/home/index'], resolve)
const Playing = (resolve) => require(['@/pages/home/playing'], resolve)
const Coming = (resolve) => require(['@/pages/home/coming'], resolve)
const Detail = (resolve) => require(['@/pages/detail/detail'], resolve)

const Find = (resolve) => require(['@/pages/find/find'], resolve)
const Member = (resolve) => require(['@/pages/member/member'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      redirect: '/home/playing',
      children: [
        {
          path: 'playing',
          component: Playing,
          children: [
            {
              path: ':id',
              component: Detail
            }
          ]
        },
        {
          path: 'coming',
          component: Coming,
          children: [
            {
              path: ':id',
              component: Detail
            }
          ]
        }
      ]
    },
    {
      path: '/find',
      component: Find,
      children: [
        {
          path: ':id',
          component: Detail
        }
      ]
    },
    {
      path: '/member',
      component: Member,
      children: [
        {
          path: ':id',
          component: Detail
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
