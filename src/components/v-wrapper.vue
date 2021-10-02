<template>
  <div class="v-wrapper">
<!--    <p>{{title}}</p>-->
    <vList/>
<!--    <v-list />-->
    <vCart
    v-if="CART.length"
    />
  </div>
</template>


<script>
import vList from './v-list'
import vCart from './v-cart'
import {mapGetters} from 'vuex'

  export default {
    name: "v-wrapper",
    components: {
      vList,
      vCart
    },
    data(){
      return {
        title: "Wrapper"
      }
    },
    computed:{
      ...mapGetters([
          'CART'
      ])
    },
    mounted() {
      console.log('Hello world')
    }
  }
</script>


<style>
  .v-wrapper{
    max-width: 900px;
    margin: 0 auto;
  }
</style>