import BindArray01 from '@/views/BindArray01.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/bindarray01',
            name: 'bindarray01',
            component: BindArray01
        },
        {
            path: '/bindarray02',
            name: 'bindarray02',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/BindArray02.vue')
        },
        {
            path: '/customvalue',
            component: () => import('../views/CustomValue.vue')
        },
        {
            path: '/customvalue02',
            component: () => import('../views/CustomValue02.vue')
        },
        {
            path: '/customvalue03',
            component: () => import('../views/CustomValue03.vue')
        }
    ]
})

export default router
