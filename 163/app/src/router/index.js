import Vue from 'vue'
import Router from 'vue-router'

import index from '@/page/index'
import my from '@/page/my'
import show from '@/page/show'
import video from '@/page/video'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/index',component:index}
  ]
})
