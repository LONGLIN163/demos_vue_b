<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <div>
      <button @click="goBack">goBack</button>
      <button @click="goAhead">goAhead</button>
      <button @click="goHome">goHome</button>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/666/hahahhahaha">Params</router-link> |
    <router-link to="/gohome">gohome</router-link> |
    <router-link to="/goParams/888/xixixixixi">goParams</router-link> 
    <router-link to="/Haha1">Haha1</router-link> 
    <router-link to="/asdfasdfasd">asdfasdfasd</router-link> 
    <transition name="fade" model="out-in">
      <router-view/>
    </transition >

  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      goAhead(){
        this.$router.go(1)
      },
      goHome(){
        this.$router.push("/")
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .fade-enter {
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition:opacity .5s;
  }
  .fade-leave-active{
    opacity:0;
    transition:opacity .5s;
  }
</style>
