import Vue, { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import store from './store';
import router from './router';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

createApp(App).use(store).use(router).mount('#app');
