import { createApp } from "vue";

import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css'

import App from "./App.vue";
import mitt from "mitt";
import router from './router'
import store from './store'

const emitter = mitt();
const app = createApp(App).use(store).use(router);
app.config.globalProperties.$emitter = emitter;
app.use(Antd);
app.use(store);
app.use(router);
app.mount("#app");
