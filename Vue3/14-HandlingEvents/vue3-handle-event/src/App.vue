<template>
  <div class="container-fluid">
    <div class="bg-primary text-white m-2 p-3 text-center">
      <h3 @click="handleEvent">{{ name }}</h3>
    </div>
  </div>
  <MyEvent></MyEvent>
</template>

<script>
import MyEvent from './components/MyEvent.vue';
export default {
  name: 'App',
  components: { MyEvent },
  data() {
    return {
      name: 'Lifejacket',
    };
  },
  methods: {
    handleEvent($event) {
      this.name = $event.type;
    },
  },
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
