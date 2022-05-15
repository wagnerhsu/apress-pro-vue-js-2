<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Name: {{ name }}</div>
      <div>Password: {{ password }}</div>
      <div>Details: {{ details }}</div>
    </div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" v-model="name" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Details</label>
        <textarea class="form-control" v-model="details" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TextField',
  data() {
    return {
      name: 'Bob',
      password: 'secret',
      details: 'Has admin access',
    };
  },
};
</script>
