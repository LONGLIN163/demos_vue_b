import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Haha from '@/components/Haha'
import Haha1 from '@/components/Haha1'
import Haha2 from '@/components/Haha2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/haha',
      name: 'Haha',
      component: Haha,
      children:[
        {
          path: '/',
          //component: Haha,
        },
        {
          //path: '/haha/haha1',
          //path: '/haha1',
          path: 'haha1',
          component: Haha1,
        },
        {
          path: 'haha2',
          component: Haha2,
        }
      ]
    }
  ]
})
