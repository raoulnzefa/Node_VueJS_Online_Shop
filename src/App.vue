<template>
  <div id="app">
    <p>Hello World!</p>
    <vWrapper/>
  </div>
</template>

<script>
import vWrapper from './components/v-wrapper'

export default {
  name: 'App',
  components: {
    vWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
