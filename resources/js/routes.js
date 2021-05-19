import {createWebHistory, createRouter} from "vue-router";

import Home from "./components/HomePage.vue";
import Signin from "./components/auth/Signin.vue";
import Dashboard from "./components/auth/Dashboard.vue";
import Products from "./components/products/Products.vue";
import store from "./components/store";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Signin,
    },
    {
        path: "/login",
        name: "Login",
        component: Signin,
        alias: '/'
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
//list of blocked routes
    const protectedRoutes = ['/products', '/dashboard'];
//the route user is trying to access is in blocked routes list
    if (protectedRoutes.includes(to.path)) {
//redirect to route having login page if not loggedin
        if(!store.getters.authenticated) {
            return next('/login');
        }else{
            return next();
        }
    } else {
// otherwise allow user to access route
        return next();
    }
});

export default router;
