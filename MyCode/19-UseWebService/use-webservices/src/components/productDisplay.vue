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
                        <button
                            class="btn btn-sm btn-danger"
                            v-on:click="deleteProduct(p)"
                        >
                            Delete
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
import { RestDataSource } from "@/composables/RestDataSource";
import { useMitt } from "@/composables/useMitt";
import type { Product } from "@/models/Product";
import { ref, onMounted } from "vue";
const baseUrl = "http://localhost:3500/products/";
const products = ref<Product[]>();
const mitt = useMitt();
const restDataSource = new RestDataSource();
const createNew = () => {
    mitt.emit("create");
};
const editProduct = (product: Product) => {
    mitt.emit("edit", product);
};
const deleteProduct = async (product: Product) => {
    await restDataSource.deleteProduct(product);
    if (products.value) {
        let index = products.value?.findIndex((p) => p.id == product.id);
        products.value?.splice(index, 1);
    }
};
const processProducts = (newProducts: Product[]) => {
    if (products.value) {
        products.value.splice(0);
        products.value.push(...newProducts);
    } else {
        products.value = newProducts;
    }
};
const processComplete = async (product: Product) => {
    let index = products.value?.findIndex((p) => p.id == product.id);
    if (index == -1) {
        await restDataSource.saveProduct(product);
        products.value?.push(product);
    } else {
        await restDataSource.updateProduct(product);
    }
};
onMounted(async () => {
    let data = await restDataSource.getProducts();
    processProducts(data);
    mitt.on("complete", () => console.log("complete"));
});
</script>
