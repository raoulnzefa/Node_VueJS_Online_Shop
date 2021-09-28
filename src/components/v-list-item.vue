<template>
  <div class="v-list-item">
    <img src="" alt="" />
    <p>Item 1</p>
    <p>Price 100</p>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-list-item"
}
</script>

<style lang="scss">
.v-list-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding*2;
  margin-bottom: $margin*2;
  &__image {
    width: 100px;
  }
}
</style>