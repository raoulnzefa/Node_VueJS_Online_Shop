<template>
  <div class="v-cart">
    <p>Cart</p>
    <VCartItem
        v-for="item in cart_data"
        :key="item.article"
        :cart_item_data="item"
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