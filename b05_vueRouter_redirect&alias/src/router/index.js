import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Haha1 from '@/components/Haha1'
import Haha2 from '@/components/Haha2'
import Params from '@/components/Params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Hello,
      alias:"/home2"
    },{
      path: '/params/:newsid(\\d+)/:newstitle',
      component:Params
    },{
      path:'/gohome',
      redirect:'/'
    },{
      path:'/goParams/:newsid(\\d+)/:newstitle',
      redirect:'/params/:newsid(\\d+)/:newstitle'
    },{
      path: '/Haha1',
      component:Haha1,
      alias:"/asdfasdfasd"
    },
  ]
})
