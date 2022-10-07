<template>
  <div class="text-center p-3">
    <h1 class="bg-secondary text-white">
      {{ message }}
    </h1>
    <button class="btn btn-secondary" @click="handleClick">Press Me</button>
  </div>
</template>
<script>
export default {
  Name: 'SimpleComponent',
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    message() {
      return this.counter == 0
        ? 'Button Not Pressed'
        : `Button Pressed: ${this.counter}`;
    },
  },
  methods: {
    handleClick() {
      this.counter++;
    },
  },
};
</script>
