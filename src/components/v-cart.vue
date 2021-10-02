<template>
  <div class="v-cart">
    <p>Cart</p>
    <VCartItem
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import VCartItem from "./v-cart-item";
import {mapActions} from 'vuex'

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
    ...mapActions([
        'DELETE_FROM_CART'
    ]),
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    }
  },
}


</script>

<style>

</style>