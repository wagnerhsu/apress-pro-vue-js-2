<template>
  <div class="container-fluid">
    <div class="m-2 p-2 text-white" v-bind:class="elemClass">
      <div>Value: {{ elemClass }}</div>
    </div>
    <div class="form-check m-2">
      <label class="form-check-label">
        <input type="checkbox" class="form-check-input" v-model="dataValue" />
        Dark Color
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomValue',
  data() {
    return { dataValue: false };
  },
  computed: {
    elemClass() {
      return this.dataValue ? 'bg-primary' : 'bg-info';
    },
  },
};
</script>
