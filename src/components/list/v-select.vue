<template>
  <div class="v-select">
    <p
      class="title"
      @click="areOptionsVisible = !areOptionsVisible"
    >{{ selected }}
    </p>

    <div class="options"
      v-if="areOptionsVisible"
    >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
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
    },
    selected:{
      type: String,
      default() {
        return ""
      }
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods:{
    selectOption(option){
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect(){
      this.areOptionsVisible = false
    },
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true )
    },
    beforeDestroy() {

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
  top: 30px;
  right: 0px;
  width: 100%;
}

.options p:hover{
  background: cadetblue;
}
</style>