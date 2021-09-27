<template>
    <div>
        <h2 v-if="error.statusCode==404">your own 404 page not found!</h2>
        <h2 v-else>500, server error!</h2>
    </div>
</template>

<script>
export default{
    props:["error"]
}
</script>
