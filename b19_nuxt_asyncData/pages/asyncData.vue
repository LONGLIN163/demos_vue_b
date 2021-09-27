<template>
  <div>
      <h1>name:{{info.name}}</h1>
      <h2>age:{{info.age}}</h2>
      <h2>hobby:{{info.interest}}</h2>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
     return {
         name:'hello World',
     }
  },
  // metod 1
/*   asyncData(){
      return axios.get('https://api.jsonserve.com/ioEACZ')
      .then((res)=>{
          console.log(res)
          return {info:res.data}
      })

  } */

  // metod 2
    async asyncData(){
        let {data}=await axios.get('https://api.jsonserve.com/ioEACZ')
        return {info: data}
    }
}
</script>