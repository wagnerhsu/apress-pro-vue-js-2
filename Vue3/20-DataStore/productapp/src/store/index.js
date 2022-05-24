import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [
      { id: 1, name: 'Product #1', category: 'Test', price: 100 },
      { id: 2, name: 'Product #2', category: 'Test', price: 150 },
      { id: 3, name: 'Product #3', category: 'Test', price: 200 },
    ],
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
  },
});
