import { createApp } from "vue";

import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css'

import App from "./App.vue";
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
app.use(Antd);
app.mount("#app");
