import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
