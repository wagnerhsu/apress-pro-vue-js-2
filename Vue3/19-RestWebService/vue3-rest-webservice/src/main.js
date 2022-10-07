import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import eventBus from 'vue3-eventbus';

const app = createApp(App);
app.use(eventBus);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
