import { createApp } from 'vue';
import App from './App.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import mitt from 'mitt';

const emitter = mitt();

const app = createApp(App);
app.provide('eventBus', emitter);
app.mount('#app');
// createApp({
//   render: () => h(App),
//   provide: function () {
//     return {
//       eventBus: new Vue(),
//     };
//   },
// }).mount('#app');
