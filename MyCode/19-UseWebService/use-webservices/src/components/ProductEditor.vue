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
                {{ editing ? "Save" : "Create" }}
            </button>
            <button class="btn btn-secondary" v-on:click="cancel">
                Cancel
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from "../models/Product";
import { ref } from "vue";
const editing = ref(false);
const product = ref<Product>({
    id: 2,
    name: "Lifejacket",
    category: "Watersports",
    price: 48.95,
});
const startEdit = (product: Product) => {
    editing.value = true;
    product = {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
    };
};
const startCreate = () => {
    editing.value = false;
    product.value = {
        id: 2,
        name: "Lifejacket",
        category: "Watersports",
        price: 48.95,
    };
};
const save = () => {
    //eventBus.$emit("complete", this.product);
    startCreate();
};
const cancel = () => {
    product.value = {
        id: 2,
        name: "Lifejacket",
        category: "Watersports",
        price: 48.95,
    };
    editing.value = false;
};
</script>
