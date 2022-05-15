<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Selected Cities: {{ cities }}</div>
    </div>
    <div class="form-check m-2" v-for="city in cityNames" v-bind:key="city">
      <label class="form-check-label">
        <input
          type="checkbox"
          class="form-check-input"
          v-model="cities"
          :value="city" />
        {{ city }}
      </label>
    </div>
    <div class="text-center">
      <button v-on:click="reset" class="btn btn-info">Reset</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ArrayBinding',
  data: function () {
    return {
      cityNames: ['London', 'New York', 'Paris', 'Berlin'],
      cities: [],
    };
  },
  methods: {
    reset() {
      this.cities = [];
    },
  },
};
</script>
