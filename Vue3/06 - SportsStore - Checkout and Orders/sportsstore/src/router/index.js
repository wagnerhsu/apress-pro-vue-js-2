import { createRouter, createWebHistory } from "vue-router";

import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart";
import Checkout from "../components/Checkout";
import OrderThanks from "../components/OrderThanks";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: ShoppingCart },
        { path: "/checkout", component: Checkout}, 
        { path: "/thanks/:id", component: OrderThanks},
        { path: "/:catchAll(.*)", redirect: "/"}
    ]
})
