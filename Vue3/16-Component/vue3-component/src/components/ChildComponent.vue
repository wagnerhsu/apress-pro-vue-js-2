<template>
  <h2>ChildComponent</h2>
  {{ labelText }} - {{ initialValue }}
  <button class="btn btn-primary" @click="handleEvent">Click</button>
</template>
<script>
export default {
  name: 'ChildComponent',
  props: ['labelText', 'initialValue'],
  data() {
    return {
      // label: this.labelText,
      // value: this.initialValue,
    };
  },
  methods: {
    handleEvent() {
      this.$emit('onChange', 'Data');
    },
  },
};
</script>
