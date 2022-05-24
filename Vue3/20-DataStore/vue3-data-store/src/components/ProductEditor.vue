<template>
  <div>
    <div class="form-group">
      <label>ID</label>
      <input class="form-control" v-model="product.id" />
    </div>
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" v-model="product.name" />
    </div>
    <div class="form-group">
      <label>Category</label>
      <input class="form-control" v-model="product.category" />
    </div>
    <div class="form-group">
      <label>Price</label>
      <input class="form-control" v-model.number="product.price" />
    </div>
    <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">
        {{ editing ? 'Save' : 'Create' }}
      </button>
      <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable no-unused-vars */
import { ref, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
let editing = ref(false);
let product = reactive({});
const save = () => {
  console.log('ProductEditor:', product);
  store.dispatch('saveProductAction', product);
  product = {};
};
const cancel = () => {
  store.commit('selectProduct');
};
onMounted(() => {
  store.watch(
    (state) => state.selectedProduct,
    (newValue, oldValue) => {
      if (newValue == null) {
        editing = false;
        product = {};
      } else {
        editing = true;
        product = {};
        Object.assign(product, newValue);
      }
    }
  );
});
</script>
