<template>
  <div class="v-wrapper">
    <p>{{title}}</p>
  </div>
</template>


<script>
  export default {
    name: "v-wrapper",
    data(){
      return {
        title: "Wrapper"
      }
    },
    mounted() {
      console.log('Hello world')
    }
  }
</script>


<style>
  .v-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>