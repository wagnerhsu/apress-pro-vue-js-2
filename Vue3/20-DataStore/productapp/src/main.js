import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import { RestDataSource } from './restDataSource';
import store from './store';
import mitt from 'mitt';

const emitter = mitt();

const app = createApp(App);
app.provide('eventBus', emitter);
app.provide('restDataSource', new RestDataSource(emitter));
app.use(store).use(store).mount('#app');
import 'bootstrap/dist/js/bootstrap';
