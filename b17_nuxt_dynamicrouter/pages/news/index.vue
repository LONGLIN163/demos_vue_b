<template>
    <div>
        <h1>News Page</h1>
        <p>NewsId:{{$route.params.newsId}}</p>
        <ul>
            <!-- <li><a href="/">home</a></li>
            <li><a href="/news/123">News-1</a></li>
            <li><a href="/news/456">News-2</a></li> -->

            <!-- <li><Nuxt-link to="/">home</Nuxt-link></li>
            <li><Nuxt-link to="/news/123">News-1</Nuxt-link></li>
            <li><Nuxt-link to="/news/456">News-2</Nuxt-link></li> -->

            <li><Nuxt-link :to="{name:'index'}">home</Nuxt-link></li>
            <li><Nuxt-link :to="{name:'news-id',params:{id:123}}">News-1</Nuxt-link></li>
            <li><Nuxt-link :to="{name:'news-id',params:{id:456}}">News-2</Nuxt-link></li>
        </ul>
    </div>
</template>