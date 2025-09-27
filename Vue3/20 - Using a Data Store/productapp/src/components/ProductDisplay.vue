<template>
    <div>
        <table class="table table-sm table-bordered" v-bind:class="'table-striped' == useStripedTable">
            <tr>
                <th>ID</th><th>Name</th><th>Category</th><th>Price</th><th></th>
            </tr>
            <tbody>
                <tr v-for="p in products" v-bind:key="p.id">
                    <td>{{ p.id }}</td>
                    <td>{{ p.name }}</td>
                    <td>{{ p.category }}</td>
                    <td>{{ p.price }}</td>
                    <td>
                        <button class="btn btn-sm"
                                v-bind:class="editClass"
                                v-on:click="editProduct(p)">
                            Edit
                        </button>
                        <button class="btn btn-sm"
                                v-bind:class="deleteClass"
                                v-on:click="deleteProduct(p)">
                            Delete
                        </button>
                    </td>
                </tr>
                <tr v-if="products.length == 0">
                    <td colspan="5" class="text-center">No Data</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button class="btn btn-primary" v-on:click="createNew()">
                Create New
            </button>
        </div>
    </div>
</template>

<script>
    import { useProductStore, usePrefsStore } from "../stores";

    export default {
        setup() {
            const productStore = useProductStore();
            const prefsStore = usePrefsStore();
            
            return {
                productStore,
                prefsStore
            };
        },
        computed: {
            products() {
                return this.productStore.products;
            },
            useStripedTable() {
                return this.prefsStore.stripedRows;
            },
            editClass() {
                return this.prefsStore.primaryEditButton ? "btn-primary" : "btn-secondary";
            },
            deleteClass() {
                return "btn-secondary";
            }
        },
        methods: {
            editProduct(product) {
                this.productStore.selectProduct(product);
            },
            createNew() {
                this.productStore.selectProduct(null);
            },
            async deleteProduct(product) {
                await this.productStore.deleteProductAction(product);
            }
        },
        async created() {
            await this.productStore.getProductsAction();
        }
    }
</script>
