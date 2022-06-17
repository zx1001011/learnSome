import { createRouter, createWebHashHistory } from "vue-router"

import Home from '../components/Home.vue'
import Layout from '../Layout/index.vue'
import UsePinia from '../components/UsePinia.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/layout',
        name: 'layout',
        component: Layout
    },
    {
        path: '/pinia',
        name: 'pinia',
        component: UsePinia
    }
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})