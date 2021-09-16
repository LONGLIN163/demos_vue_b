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
      component: Haha,
      children:[
        {
          path: '/',
          //name: 'HelloWorld/Haha',
          name: 'Haha'
          //component: Haha,
          //component: Haha,
        },
        {
          path: 'haha1',
          //name: 'HelloWorld/Haha/Haha1',
          name: 'haha1',
          component: Haha1
        },
        {
          path: 'haha2',
          name: 'haha2',
          component: Haha2
        }
      ]
    }
  ]
})
