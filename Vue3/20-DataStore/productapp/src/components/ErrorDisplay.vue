<template>
  <div v-if="error" class="bg-danger text-white text-center p-3 h3">
    An Error Has Occurred
    <h6>{{ message }}</h6>
    <a href="/" class="btn btn-secondary">OK</a>
  </div>
</template>
<script setup>
import { ref, inject, onMounted } from 'vue';
const eventBus = inject('eventBus');
let error = ref(false);
let message = ref('');
const handleError = (err) => {
  error = true;
  message = err;
};
onMounted(() => {
  eventBus.on('httpError', handleError);
});
</script>
