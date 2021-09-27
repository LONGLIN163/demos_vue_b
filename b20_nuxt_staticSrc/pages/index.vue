<template>
  <div>
    <h1>Home page here</h1>
    <div class='diss'>
      <!-- <img src="~static/logo.png" /> -->
    </div>
    <ul>
      <!-- <li><a href="/">home</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="/news">news</a></li> -->

      <!-- <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">NEWS</nuxt-link></li> -->

      <li><Nuxt-link to="">home</Nuxt-link></li>
      <li><Nuxt-link to="about">about</Nuxt-link></li>
      <li><Nuxt-link :to="{name:'news',params:{newsId:3306}}">news</Nuxt-link></li>
      <li><Nuxt-link :to="{name:'asyncData'}">asyncData</Nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>
<style>
  .diss{
    width: 300px;
    height: 100px;
    background-image: url('~static/logo.png')
  }
</style>
