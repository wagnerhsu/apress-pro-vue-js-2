import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import store from './store';
import router from './router';

createApp(App).use(store).use(router).use(store).mount('#app');
