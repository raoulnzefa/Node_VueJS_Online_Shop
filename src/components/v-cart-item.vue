<template>
  <div class="v-cart-item">
    <img class="v-cart-item-img" :src="require( '../assets/images/'+ cart_item_data.image)" alt="" />
    <div class="v-cart-item-info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item-quantity">
      <p>{{cart_item_data.quantity}}</p>
      <button @click="increaseQuantity()">+</button>
      <button @click="decreaseQuantity()">-</button>
    </div>
    <button @click="deleteFromCart()">Delete</button>
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
    return {}
  },
  components: {},
  methods: {
    deleteFromCart(){
      this.$emit('deleteFromCart')
    },
    increaseQuantity(){
      this.cart_item_data.quantity++
    },
    decreaseQuantity(){
      this.cart_item_data.quantity--
    },
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity',1)
  }

}
</script>

<style lang="scss">
.v-cart-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  //&-img{
  //   width: 55px;
  //
  // }
}
.v-cart-item-img{
  width: 55px;
}

</style>