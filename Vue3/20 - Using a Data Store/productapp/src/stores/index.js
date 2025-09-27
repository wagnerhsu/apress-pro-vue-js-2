import { defineStore } from 'pinia'
import Axios from "axios";

const baseUrl = "http://localhost:3500/products/";

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
        selectedProduct: null        
    }),
    getters: {
        orderedProducts(state) {
            return state.products.concat().sort((p1, p2) => p2.price - p1.price);
        },
        filteredProducts() {
            return (amount) => this.orderedProducts.filter(p => p.price > amount);
        }
    },
    actions: {
        saveProduct(product) {
            let index = this.products.findIndex(p => p.id == product.id);
            if (index == -1) {
                this.products.push(product);
            } else {
                this.products[index] = product;
            }
        },
        deleteProduct(product) {
            let index = this.products.findIndex(p => p.id == product.id);
            this.products.splice(index, 1);
        },
        selectProduct(product) {
            this.selectedProduct = product;
        },
        async getProductsAction() {
            (await Axios.get(baseUrl)).data
                .forEach(p => this.saveProduct(p));
        },
        async saveProductAction(product) {
            let index = this.products.findIndex(p => p.id == product.id);
            if (index == -1) {
                await Axios.post(baseUrl, product);
            } else {
                await Axios.put(`${baseUrl}${product.id}`, product);
            }
            this.saveProduct(product);
        },
        async deleteProductAction(product) {
            await Axios.delete(`${baseUrl}${product.id}`);
            this.deleteProduct(product);
        }
    }
});

// Preferences store
export const usePrefsStore = defineStore('prefs', {
    state: () => ({
        stripedRows: true,
        primaryEditButton: false
    })
});