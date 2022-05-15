<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Name: {{ name }}</div>
      <div>Has Admin Access: {{ hasAdminAccess }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          v-model="name"
          value="Bob" />
        <label class="form-check-label">Bob</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          v-model="name"
          value="Alice" />
        <label class="form-check-label">Alice</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          v-model="hasAdminAccess" />
        <label class="form-check-label">Has Admin Access?</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RadioCheckbox',
  data: function () {
    return {
      name: 'Bob',
      hasAdminAccess: true,
    };
  },
};
</script>
