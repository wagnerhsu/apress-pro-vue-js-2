<template>
  <div class="container-fluid">
    <div class="bg-info text-white">Value: {{ dataValue }}</div>
    <div class="bg-primary m-2 p-2 text-white">
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="dataValue" />
          Data Value
        </label>
      </div>
    </div>
    <div class="bg-primary m-2 p-2">
      <input type="text" class="form-control" v-model="otherValue" />
    </div>
    <div class="text-center m-2">
      <button class="btn btn-secondary" v-on:click="reset">Reset</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BasicForm',
  data() {
    return {
      dataValue: false,
      otherValue: '',
    };
  },
  methods: {
    reset() {
      this.dataValue = false;
      this.otherValue = '';
    },
  },
};
</script>
