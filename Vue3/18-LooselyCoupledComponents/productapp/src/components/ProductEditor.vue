<template>
  <div>
    <editor-field label="ID" editorFor="id" />
    <editor-field label="Name" editorFor="name" />
    <editor-field label="Price" editorFor="price" />

    <div class="text-center">
      <button class="btn btn-primary" v-on:click="save">
        {{ editing ? 'Save' : 'Create' }}
      </button>
      <button class="btn btn-secondary" v-on:click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import EditorField from './EditorField';
import { reactive, ref, inject, onMounted } from 'vue';
const editing = ref(false);
let product = reactive({
  id: 0,
  name: '',
  price: 0,
});

const startEdit = (p) => {
  editing.value = true;
  product = {
    id: p.id,
    name: p.name,
    price: p.price,
  };
};

const startCreate = () => {
  editing.value = false;
  product = {
    id: 0,
    name: '',
    price: 0,
  };
};
const eventBus = inject('eventBus');
const save = () => {
  eventBus.emit('complete', product);
  startCreate();
  console.log(`Edit Complete: ${JSON.stringify(product)}`);
};
const cancel = () => {
  product = {};
  editing.value = false;
};
onMounted(() => {
  eventBus.on('create', startCreate);
  eventBus.on('edit', startEdit);
  eventBus.on('change', (change) => (product[change.name] = change.value));
});
</script>
