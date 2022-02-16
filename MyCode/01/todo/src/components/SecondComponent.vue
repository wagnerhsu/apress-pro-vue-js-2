<template>
  <div style="border: 1px solid black">
    <h1>Second Component</h1>
    <button v-on:click="emitMyEvent">Emit Event</button>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  setup() {
    let instance = getCurrentInstance();
    const emitMyEvent = () => {
      console.log("Emit from SecondComponent");
      const emitter = instance.appContext.config.globalProperties.$emitter;
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