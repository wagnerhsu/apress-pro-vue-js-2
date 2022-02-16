<template>
  <div>
    <h1>First Component</h1>
    <p>{{ testEvent }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const testEvent = ref("");
    return {
      testEvent,
    };
  },
  created() {
    this.$emitter.on("my-event", (evt) => {
      console.log("Emitter.on");
      this.testEvent = evt.eventContent;
    });
  },
};
</script>

<style>
</style>