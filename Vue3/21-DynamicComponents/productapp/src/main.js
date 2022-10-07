import { createApp } from 'vue';
import App from './App.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { RestDataSource } from './restDataSource';
import store from './store';
import mitt from 'mitt';

const emitter = mitt();

const app = createApp(App);
app.provide('eventBus', emitter);
app.provide('restDataSource', new RestDataSource(emitter));
app.use(store).mount('#app');
