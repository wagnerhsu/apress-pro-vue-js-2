<template>
    <div>
        <table class="table table-sm table-striped table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category }}</td>
                    <td>{{ p.price }}</td>
                    <td>
                        <button
                            class="btn btn-sm btn-primary"
                            v-on:click="editProduct(p)"
                        >
                            Edit
                        </button>
                    </td>
                </tr>
                <tr v-if="products?.length == 0">
                    <td colspan="5" class="text-center">No Data</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button class="btn btn-primary" v-on:click="createNew">
                Create New
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { useMitt } from "@/composables/useMitt";
import type { Product } from "@/models/Product";
import { ref, onMounted } from "vue";
const baseUrl = "http://localhost:3500/products/";
const products = ref<Product[]>();
const mitt = useMitt();
const createNew = () => {
    mitt.emit("create");
};
const editProduct = (product: Product) => {
    mitt.emit("edit", product);
};
const processProducts = (newProducts: Product[]) => {
    if (products.value) {
        products.value.splice(0);
        products.value.push(...newProducts);
    } else {
        products.value = newProducts;
    }
};
onMounted(() => {
    axios.get(baseUrl).then((resp) => {
        console.log(`HTTP Response: ${resp.status}, ${resp.statusText}`);
        console.log(`Response Data: ${resp.data.length} items`);
        processProducts(resp.data);
    });
});
</script>
