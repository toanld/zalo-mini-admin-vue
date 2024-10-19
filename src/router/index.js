import { createRouter, createWebHashHistory } from 'vue-router'
import SignupView from '@/views/Authentication/SignupView.vue'
import SigninView from '@/views/Authentication/SigninView.vue'
import ECommerceView from '@/views/Dashboard/ECommerceView.vue'
import { getToken } from '@/libs/functions' // Import the getToken function

const routes = [
    {
        path: '/',
        name: 'eCommerce',
        component: ECommerceView,
        meta: {
            title: 'eCommerce Dashboard',
            requiresAuth: true, // Add meta field to check for authentication
        }
    },
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

// Navigation guard to check authentication
// Navigation guard to check authentication
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if the user is logged in by verifying the token
        const token = getToken();
        if (!token) {
            // If no token, redirect to signin and pass the intended route in the 'redirect' query
            next({ name: 'signin', query: { redirect: to.fullPath } });
        } else {
            // If token exists, proceed to the route
            next();
        }
    } else {
        // If the route doesn't require authentication, proceed
        next();
    }
})

export default router
