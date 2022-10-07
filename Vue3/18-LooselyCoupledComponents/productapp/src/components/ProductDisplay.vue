<template>
  <div>
    <table class="table table-sm table-striped table-bordered">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
      <tbody>
        <tr v-for="p in products" v-bind:key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ getCurrency(p.price) }}</td>
          <td>
            <button class="btn btn-sm btn-primary" v-on:click="editProduct(p)">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="createNew">Create New</button>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
const eventbus = inject('eventBus');
const products = ref([
  { id: 1, name: 'Kayak', price: 275 },
  { id: 2, name: 'Lifejacket', price: 48.95 },
  { id: 3, name: 'Soccer Ball', price: 19.5 },
  { id: 4, name: 'Corner Flags', price: 39.95 },
  { id: 5, name: 'Stadium', price: 79500 },
]);

const getCurrency = (value) => `$${value.toFixed(2)}`;
const createNew = () => eventbus.emit('create');
const editProduct = (product) => eventbus.emit('edit', product);
const processComplete = (product) => {
  let index = products.value.findIndex((p) => p.id == product.id);
  if (index == -1) {
    products.value.push(product);
  } else {
    products.value[index] = product;
  }
};
onMounted(() => {
  eventbus.on('complete', processComplete);
});
</script>
