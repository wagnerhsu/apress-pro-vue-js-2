import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import "bootstrap/dist/css/bootstrap.min.css";
import { RestDataSource } from "./restDataSource";

const app = createApp(App)
const pinia = createPinia()

// Create event bus as a simple reactive object
const eventBus = createApp({}).config.globalProperties

app.use(pinia)
app.provide('eventBus', eventBus)
app.provide('restDataSource', new RestDataSource(eventBus))
app.mount('#app')
