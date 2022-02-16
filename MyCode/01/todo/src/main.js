import { createApp, h } from "vue";
import App from "./App.vue";
import mitt from "mitt";

const app = createApp({
    render: () => h(App),
});
app.config.globalProperties.$emitter = mitt();
app.mount("#app");
