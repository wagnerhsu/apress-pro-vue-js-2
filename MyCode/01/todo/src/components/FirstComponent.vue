<template>
  <div>
    <h1>First Component</h1>
    <p>{{ testEvent }}</p>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted } from "vue";

export default {
  setup() {
    let instance = getCurrentInstance();
    const testEvent = ref("");
    onMounted(() => {
      const emitter = instance.appContext.config.globalProperties.$emitter;
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