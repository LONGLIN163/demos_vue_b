<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <router-link to="/">Home</router-link>
    <router-link to="/params/666/hahahhahaha">Params</router-link>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
