<template>
  <div style="border: 1px solid black">
    <h1>Second Component</h1>
    <button v-on:click="emitMyEvent">Emit Event</button>
  </div>
</template>

<script>
import useEmitter from "../composables/useEmitter";

export default {
  setup() {
    const emitter = useEmitter();
    const emitMyEvent = () => {
      console.log("Emit from SecondComponent");
      emitter.emit("my-event", {
        eventContent: "String changed" + Date().toString(),
      });
    };
    return {
      emitMyEvent,
    };
  },
};
</script>

<style>
</style>