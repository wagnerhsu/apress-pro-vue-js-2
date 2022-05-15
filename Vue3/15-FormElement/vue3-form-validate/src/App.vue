<template>
  <BasicValidation></BasicValidation>
</template>

<script>
import BasicValidation from './components/BasicValidation.vue';
export default {
  name: 'App',
  components: { BasicValidation },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
