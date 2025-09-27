import { createRouter, createWebHistory } from "vue-router";

import ProductDisplay from "../components/ProductDisplay";
import ProductEditor from "../components/ProductEditor";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { name: "table", path: "/", component: ProductDisplay, alias: "/list" },
        { name: "editor", path: "/:op(create|edit)/:id(\\d+)?", 
            component: ProductEditor },
        { path: "/:catchAll(.*)", redirect: "/" }
    ]
})
