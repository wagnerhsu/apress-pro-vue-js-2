<template>
  <div style="border: 1px solid black">
    <h1>Second Component</h1>
    <a-button type="primary" v-on:click="emitMyEvent">Emit Event</a-button>
    <a-devider></a-devider>
    <a-button type="secondary" @click="infoClick"
      >Display normal message</a-button
    >
  </div>
</template>

<script>
import useEmitter from "../composables/useEmitter";
import { message } from "ant-design-vue";

export default {
  setup() {
    const emitter = useEmitter();
    const emitMyEvent = () => {
      console.log("Emit from SecondComponent");
      emitter.emit("my-event", {
        eventContent: "String changed" + Date().toString(),
      });
    };
    const infoClick = () => {
      message.info("This is a normal message");
    };

    return {
      emitMyEvent,
      infoClick,
    };
  },
};
</script>

<style>
</style>