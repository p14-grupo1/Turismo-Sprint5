import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from './components/LogIn.vue'
const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/LogIn',
        name: 'LogIn',
        component: LogIn,

    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router