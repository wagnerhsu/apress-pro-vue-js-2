<template>
  <div class="bg-secondary text-white text-center m-2 p-2 h5">
    Root Component
    <ChildComponent
      labelText="Name"
      initialValue="Kayak"
      @on-change="onChildChange"></ChildComponent>
  </div>
  <PassProps @submit-data="onSubmit">
    <div class="bg-warning">Pass Props Demo</div>
  </PassProps>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';
import PassProps from './components/PassProps.vue';
export default {
  name: 'App',
  components: {
    ChildComponent,
    PassProps,
  },
  methods: {
    onChildChange(v) {
      console.log(v);
    },
    onSubmit(data) {
      console.log(data);
    },
  },
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
