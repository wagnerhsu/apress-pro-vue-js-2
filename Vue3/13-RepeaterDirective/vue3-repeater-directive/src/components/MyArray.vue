<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">Products</h2>
    <table class="table table-sm table-bordered table-striped text-left">
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tbody>
        <tr v-for="(p, index) in products" :key="index" :odd="index % 2 == 0">
          <td>{{ index + 1 }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyArray',
  data: function () {
    return {
      products: [
        { name: 'Kayak', price: 275 },
        { name: 'Lifejacket', price: 48.95 },
        { name: 'Soccer Ball', price: 19.5 },
        { name: 'Corner Flags', price: 39.95 },
        { name: 'Stadium', price: 79500 },
        { name: 'Thinking Cap', price: 16 },
      ],
    };
  },
  methods: {
    handleClick() {
      this.products[1] = { name: 'Running Shoes', price: 100 };
    },
  },
};
</script>
<style>
[odd] {
  background-color: lightblue;
}
</style>
