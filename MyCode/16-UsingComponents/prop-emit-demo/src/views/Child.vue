<template>
  <div class="bg-primary text-white text-center m-2 p-3 h6">
    <div class="form-group m-1 text-left">
      <label>Name</label>
      <input v-model="product.name" class="form-control" />
    </div>
    <div class="form-group m-1 text-left">
      <label>Category</label>
      <input v-model="product.category" class="form-control" />
    </div>
    <div class="form-group m-1 text-left">
      <label>Price</label>
      <input v-model.number="product.price" class="form-control" />
    </div>
    <div class="mt-2">
      <button class="btn btn-info" v-on:click="doSubmit">Submit</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import type { Product } from '../models/Product';

interface Props {
  initialProduct: Product;
}
const props = defineProps<Props>();

const product = reactive(props.initialProduct || {});
const emit = defineEmits<{
  (e: 'productSubmit', p: Product): void;
  (e: 'selected'): void;
}>();
const doSubmit = () => {
  console.log('submit:', product);
  emit('productSubmit', product);
  emit('selected');
};
</script>
