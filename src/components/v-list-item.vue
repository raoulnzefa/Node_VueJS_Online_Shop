<template>
  <div class="v-list-item">
    <img class="v-list-item-image" :src="require( '../assets/images/'+ product_data.image)" alt=""/>
    <p class="v-list-item-name">{{product_data.name}}</p>
    <p class="v-list-item-price">Price {{product_data.price}}</p>
    <button class="v-list-item-add-to-cart_btn btn">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-list-item",
  props:{
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.v-list-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &-image {
    width: 100px;
  }
}
</style>