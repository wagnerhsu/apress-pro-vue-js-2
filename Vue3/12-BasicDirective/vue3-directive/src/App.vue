<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <DirectiveDemo></DirectiveDemo>
</template>

<script>
import DirectiveDemo from './components/DirectiveDemo.vue';
export default {
  name: 'App',
  components: { DirectiveDemo },
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
