<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-list-cart">
        To catalog
      </div>
    </router-link>
    <p>Cart</p>
    <p v-if="!cart_data.length">Cart is empty</p>
    <VCartItem
        v-for="(item, index) of cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
    />
    <div class="v-cart-total">
      <p class="v-total-name">Total</p>
      <p>{{ totalSumma }}</p>
    </div>
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
        return []
      }
    }
  },
  computed:{
    totalSumma() {
      //return this.cart_data.reduce((res, item) => res + item.price * item.quantity, 0)
      let result = []
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0
      }
    }
  },
  data(){
    return {}
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
  }
}


</script>

<style>
.v-cart-total{
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding: 16px;
  display: flex;
  justify-content: center;
  background: #2c3e50;
  color: aliceblue;
  font-size: 20px;
}
.v-total-name{
  margin-right: 16px;
}
</style>