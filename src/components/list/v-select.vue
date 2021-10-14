<template>
  <div class="v-select">
    <p
      class="title"
      @click="areOptionsVisible = !areOptionsVisible"
    >Select</p>
    <div class="options"
      v-if="areOptionsVisible"
    >
      <p
        v-for="option in options"
        :key="option.value"
      >
        {{ option.name }}
      </p>
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
    return {
      areOptionsVisible: false
    }
  }
}
</script>

<style>
.title{
  border: solid 1px #26ae68;
}

.v-select{
  position: relative;
  width: 250px;
}

.v-select p{
  margin: 0px;
}

.options{
  border: solid 1px #2c3e50;
  position: absolute;
  top: 20px;
  right: 0px;
  width: 100%;
}
</style>