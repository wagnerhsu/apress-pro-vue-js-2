import { createApp } from 'vue';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.mount('#app');
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App data-names="Bob, Alice, Peter, Dora" />',
// });
