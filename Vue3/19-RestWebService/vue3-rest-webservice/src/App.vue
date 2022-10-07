<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8 m-3"><product-display /></div>
      <div class="col m-3"><product-editor /></div>
    </div>
  </div>
</template>
<script>
import ProductDisplay from './components/ProductDisplay';
import ProductEditor from './components/ProductEditor';
export default {
  name: 'App',
  components: { ProductDisplay, ProductEditor },
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
