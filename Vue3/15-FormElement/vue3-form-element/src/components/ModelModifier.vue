<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>Amount: {{ amount }}, Amount + 10 = {{ amount + 10 }}</div>
    </div>
    <div class="form-group">
      <label>Amount</label>
      <input type="number" class="form-control" v-model.number.lazy="amount" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModelModifier',
  data() {
    return {
      amount: 100,
    };
  },
};
</script>
