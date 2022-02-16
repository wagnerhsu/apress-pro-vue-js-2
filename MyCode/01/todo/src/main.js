import { createApp, h } from "vue";
import App from "./App.vue";
import mitt from "mitt";

const emitter = mitt();
const app = createApp({
    render: () => h(App),
});
app.config.globalProperties.$emitter = emitter;
app.mount("#app");
