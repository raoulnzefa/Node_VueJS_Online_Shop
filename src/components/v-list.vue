<template>
  <div class="v-list  v-list__list">
<!--    <h1>List</h1>-->
      <vItem />
      <vItem />
      <vItem />
      <vItem />
  </div>
</template>

<script>
import vItem from './v-list-item'

export default {
  name: "v-list",
  components: {
    vItem
  }
}
</script>

<style lang="scss">
.v-list {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>