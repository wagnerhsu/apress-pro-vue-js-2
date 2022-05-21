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
import { ref, inject, onMounted, defineProps } from 'vue';
const props = defineProps(['label', 'editorFor']);
const value = ref('');
const formattedLabel = ref('');
const colors = inject('colors');
//const format = inject('labelFormatter');
const editingEventBus = inject('editingEventBus');
onMounted(() => {
  editingEventBus.on('target', (p) => (value.value = p[props.editorFor]));
});
</script>
