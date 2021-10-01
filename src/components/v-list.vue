<template>
  <div class="v-list  v-list__list">
<!--    <h1>List</h1>-->
      <vItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
      />

  </div>
</template>

<script>
import vItem from './v-list-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-list",
  components: {
    vItem
  },
  props: {},
  data(){
    return {

    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
  },
  computed:{
    ...mapGetters([
        'PRODUCTS'
    ]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if (response.data()){
        console.log('data')
      }
    })
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