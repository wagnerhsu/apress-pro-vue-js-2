<template>
  <div class="form-group">
    <label>{{ formattedLabel }}</label>
    <input
      v-model.number="value"
      class="form-control"
      v-bind:class="[colors.bg, colors.text]" />
  </div>
</template>
<script setup>
import { ref, defineProps, inject, onMounted } from 'vue';
const props = defineProps(['label', 'editorFor']);
const colors = inject('colors');
const format = inject('labelFormatter');
const eventBus = inject('eventBus');
const value = ref('');
const formattedLabel = ref(format(props.label));
watch((value) => {
  eventBus.emit('change', {
    name: props.editorFor,
    value: value,
  });
  onMounted(() => {
    eventBus.on('target', (p) => (value = p[props.editorFor]));
  });
});
</script>
