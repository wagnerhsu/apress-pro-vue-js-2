import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import { RestDataSource } from "./restDataSource";

const app = createApp(App)
const pinia = createPinia()

// Create event bus
const eventBus = createApp({}).config.globalProperties

app.use(pinia)
app.use(router)
app.provide('eventBus', eventBus)
app.provide('restDataSource', new RestDataSource(eventBus))
app.mount('#app')
