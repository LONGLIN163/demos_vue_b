import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Haha1 from '@/components/Haha1'
import Haha2 from '@/components/Haha2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:Hello,
        left:Haha1,
        right:Haha2
      }
    },
    {
      path: '/jaja',
      name: 'HelloWorld',
      components: {
        default:Hello,
        left:Haha2,
        right:Haha1
      }
    }
  ]
})
