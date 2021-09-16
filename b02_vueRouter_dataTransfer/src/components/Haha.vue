<template>
    <div class="haha">
        <h1>{{message}}</h1>
        <router-view />
    </div>
</template>

<script>
    export default {
        name:'Haha',
        data() {
            return {
                message:"haha"
            }
        }
    } 
</script>

<style scoped>
  .haha{
      color:red
  }
</style>
