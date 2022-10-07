<template>
  <MyArray></MyArray>
</template>

<script>
import MyArray from './components/MyArray.vue';
export default {
  name: 'App',
  components: { MyArray },
};
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
