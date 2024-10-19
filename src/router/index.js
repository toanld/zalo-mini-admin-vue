import { createRouter, createWebHashHistory } from 'vue-router'
import Index from './../pages/index.vue'
import List from './../pages/list.vue'
import SignupView from '@/views/Authentication/SignupView.vue'
import SigninView from '@/views/Authentication/SigninView.vue'
import ECommerceView from '@/views/Dashboard/ECommerceView.vue'

const routes = [
    {
        path: '/',
        name: 'eCommerce',
        component: ECommerceView,
        meta: {
            title: 'eCommerce Dashboard'
        }
    },
    { path: '/list', component: List },
    {
        path: '/auth/signup',
        name: 'signup',
        component: SignupView,
        meta: {
            title: 'Signup'
        }
    },
    {
        path: '/auth/signin',
        name: 'signin',
        component: SigninView,
        meta: {
            title: 'Signin'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
