<template>
  <div style="border: 1px solid black">
    <h1>Second Component</h1>
    <button v-on:click="emitMyEvent">Emit Event</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitMyEvent() {
      console.log("Emit from SecondComponent");
      this.$emitter.emit("my-event", { eventContent: "String changed"+Date().toString() });
    },
  },
};
</script>

<style>
</style>