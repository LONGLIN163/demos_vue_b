<template>
    <div class="haha">
        <h3>{{message}}</h3>
        <p>id:{{$route.params.newsid}}</p>
        <p>title:{{$route.params.newstitle}}</p>
    </div>
</template>

<script>
    export default {
        name:'Haha1',
        data() {
            return {
                message:"params page here"
            }
        }
    }
</script>

<style scoped>
  .haha{
      color:red
  }
</style>
