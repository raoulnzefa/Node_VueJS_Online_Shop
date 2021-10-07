<template>
  <div class="v-wrapper">
<!--    <p>{{title}}</p>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

<!--    <vList/>-->
<!--    <vCart-->
<!--      v-if="CART.length"-->
<!--      :cart_data="CART"-->
<!--    />-->
  </div>
</template>


<script>
// import vList from './v-list'
// import vCart from './v-cart'
// import {mapGetters} from 'vuex'

  export default {
    name: "v-wrapper",
    // components: {
    //   vList,
    //   vCart
    // },
    props:{},
    data(){
      return {
        title: "Wrapper"
      }
    },
    computed:{
      // ...mapGetters([
      //     'CART'
      // ])
    },
    mounted() {
      // console.log('Hello world')
    }
  }
</script>


<style>
  .v-wrapper{
    max-width: 900px;
    margin: 0 auto;
  }
</style>