<template>
  <div class="v-cart">
    <p>Cart</p>
    <VCartItem
    />
  </div>
</template>

<script>
import VCartItem from "./v-cart-item";

export default {
  name: "v-cart",
  props:{
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){

  },
  components: {
    VCartItem
  },
  methods: {

  },
}


</script>

<style>

</style>