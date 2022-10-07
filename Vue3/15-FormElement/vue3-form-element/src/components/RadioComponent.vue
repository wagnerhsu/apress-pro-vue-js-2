<template>
  <div class="bg-info text-white">
    <div>Name: {{ name }}</div>
  </div>
  <div class="bg-primary text-white">
    <div class="form-check" v-for="n in allNames" :key="n">
      <input class="form-check-input" type="radio" v-model="name" :value="n" />
      <label class="form-check-label">{{ n }}</label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RadioComponent',
  data() {
    return {
      allNames: ['Bob', 'Alice', 'Joe'],
      name: 'Bob',
    };
  },
};
</script>
