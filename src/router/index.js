import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import index from '@/components/index/index.vue'
import list from '@/components/list/list.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/list',
      component: list
    }
  ]
})
