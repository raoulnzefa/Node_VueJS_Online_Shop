<template>
  <div>
    <img :src="require( '../assets/images/'+ cart_item_data.image)" alt="" />
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props:{
    cart_item_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){

  },
  components: {

  },
  methods: {

  }

}
</script>

<style>

</style>