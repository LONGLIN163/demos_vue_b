<template>
  <div>
       <h2>News-Content : {{$route.params.id}}</h2>
       <ul>
        <!-- <li><a href="/">Home</a></li> -->
          <li><Nuxt-link to="/">home</Nuxt-link></li>
       </ul>
  </div>
</template> 
<script>
export default {
    validate({params}) {
        return /^\d+$/.test(params.id)
    }
}
</script>
