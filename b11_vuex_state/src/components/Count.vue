<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <!-- <h2>{{$store.state.count}}</h2> -->
        <h2>{{count}}</h2>
        <button @click="$store.commit('add')">++++</button>
        <button @click="$store.commit('minus')">----</button>

    </div>
</template>

<script>
import store  from '@/vuex/store'
import {mapState} from 'vuex'

export default ({
    data() {
      return  {
          msg:"vuex:"
      }
    },
    // *** method1 ***
    // computed:{
    //     count(){
    //         console.log(this)
    //         return this.$store.state.count
    //     }
    // },

    // *** method2 ***
    // computed:mapState({
    //     count: (state) => state.count,
    // }),

    //*** method3 ***
    computed:mapState(['count']),


    store
})
</script>

<style scoped>

</style>
