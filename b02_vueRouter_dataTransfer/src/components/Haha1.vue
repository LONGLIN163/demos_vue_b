<template>
    <div class="haha">
        <!-- <h3>{{message}}</h3> -->
        <h3>{{message}}-{{$route.params.username}}-{{$route.params.id}}</h3>
    </div>
</template>

<script>
    export default {
        name:'Haha1',
        data() {
            return {
                message:"haha1"
            }
        }
    }
</script>

<style scoped>
  .haha{
      color:red
  }
</style>
