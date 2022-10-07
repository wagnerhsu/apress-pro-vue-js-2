<template>
  <div>
    <slot>
      <h2>display from slot</h2>
    </slot>
    <h2>PassProps</h2>
    <p>{{ state.count }}</p>
    <button class="btn btn-primary" @click="increaseCounter">Increase</button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue';

export default {
  emits: ['submitData'],
  setup(props, ctx) {
    const state = reactive({
      count: ref(0),
    });
    const increaseCounter = () => {
      state.count += 1;
      ctx.emit('submitData', 'submitData');
    };
    return { state, increaseCounter };
  },
};
</script>
