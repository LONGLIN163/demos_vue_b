<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <h2>{{count}}</h2>

        <!-- <button @click="$store.commit('add',10)">++++</button>
        <button @click="$store.commit('minus')">----</button> -->

        <button @click="add(10)">++++</button>
        <button @click="minus">----</button>
        
        <hr>
        <button @click="addAction">addAction</button>
        <button @click="minusAction">minusAction</button>

    </div>
</template>

<script>
import store  from '@/vuex/store'
import {mapState,mapMutations,mapGetters, mapActions} from 'vuex'

export default ({
    data() {
      return  {
          msg:"vuex:"
      }
    },
    //computed:mapState(['count']),
    computed:{
        ...mapState(['count']),
        // count(){
        //   return this.$store.getters.count
        // }
        //...mapGetters(['count'])
 
    },
    methods:{ 
        ...mapMutations(['add','minus']),
        ...mapActions(['addAction','minusAction'])
    },
    store
})
</script>

<style scoped>

</style>
