<template>
  <div class="v-select">
    <div class="options">
      <span
        v-for="option in options"
        :key="option.value"
      >
        {{ option.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props:{
    options:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>