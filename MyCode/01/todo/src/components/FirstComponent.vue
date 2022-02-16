<template>
  <div>
    <h1>First Component</h1>
    <p>{{ testEvent }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import useEmitter from "../composables/useEmitter";

export default {
  setup() {
    const emitter = useEmitter();
    const testEvent = ref("");
    onMounted(() => {
      
      emitter.on("my-event", (evt) => {
        console.log("Emitter.on");
        testEvent.value = evt.eventContent;
      });
    });
    return {
      testEvent,
    };
  },
};
</script>

<style>
</style>