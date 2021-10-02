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
    </div>
    <button>Delete</button>
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
    return {

    }
  },
  components: {

  },
  methods: {

  },
  mounted() {
    //this.$set(this.cart_item_data, 'quantity',1)
    //this.cart_item_data.quantity= 1;
    //this.$store.dispatch('addToCart', {...this.product, quantity: this.quantity})
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
  padding: $padding*2;
  margin-bottom: $margin*2;
  &-img{
     width: 55px;

   }
}

</style>