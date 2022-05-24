import { createStore } from 'vuex';
import Axios from 'axios';
const baseUrl = 'http://localhost:3500/products';
export default createStore({
  strict: true,
  state: {
    // products: [
    //   { id: 1, name: 'Product #1', category: 'Test', price: 100 },
    //   { id: 2, name: 'Product #2', category: 'Test', price: 150 },
    //   { id: 3, name: 'Product #3', category: 'Test', price: 200 },
    // ],
    products: [],
    selectedProduct: null,
  },
  mutations: {
    saveProduct(currentState, product) {
      let index = currentState.products.findIndex((p) => p.id == product.id);
      if (index == -1) {
        currentState.products.push(product);
      } else {
        currentState.products[index] = product;
      }
    },
    deleteProduct(currentState, product) {
      let index = currentState.products.findIndex((p) => p.id == product.id);
      currentState.products.splice(index, 1);
    },
    selectProduct(currentState, product) {
      currentState.selectedProduct = product;
    },
  },
  getters: {
    editClass(state) {
      return state.primaryEditButton ? 'btn-primary' : 'btn-secondary';
    },
    deleteClass(state) {
      return state.dangerDeleteButton ? 'btn-danger' : 'btn-secondary';
    },
    tableClass(state, payload, rootState) {
      return rootState.products.length > 0 && rootState.products[0].price > 500
        ? 'table-striped'
        : '';
    },
    orderedProducts(state) {
      return state.products.concat().sort((p1, p2) => p2.price - p1.price);
    },
    filteredProducts(state, getters) {
      return getters.orderedProducts.filter((p) => p.price > 100);
    },
  },
  actions: {
    async getProductsAction(context) {
      (await Axios.get(baseUrl)).data.forEach((p) =>
        context.commit('saveProduct', p)
      );
    },
    async saveProductAction(context, product) {
      let index = context.state.products.findIndex((p) => p.id == product.id);
      if (index == -1) {
        await Axios.post(baseUrl, product);
      } else {
        await Axios.put(`${baseUrl}/${product.id}`, product);
      }
      context.commit('saveProduct', product);
    },
    async deleteProductAction(context, product) {
      await Axios.delete(`${baseUrl}${product.id}`);
      context.commit('deleteProduct', product);
    },
  },
});
