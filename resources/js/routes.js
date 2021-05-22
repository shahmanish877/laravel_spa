import {createWebHistory, createRouter} from "vue-router";

import Home from "./components/HomePage.vue";
import Signin from "./components/auth/Signin.vue";
import Dashboard from "./components/auth/Dashboard.vue";
import Products from "./components/products/Products.vue";
import ProductsCreate from "./components/products/Create.vue";
import ProductsEdit from "./components/products/Edit.vue";
import ProductsDetails from "./components/products/Details.vue";
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
    {
        path: "/products/edit/:id",
        name: "ProductsEdit",
        component: ProductsEdit,
        props: true
    },
    {
        path: "/products/create",
        name: "ProductsCreate",
        component: ProductsCreate,
    },
    {
        path: "/products/:id",
        name: "product-details",
        component: ProductsDetails,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
//list of blocked routes
    const protectedRoutes = ['/products', '/dashboard','/products/:id'];
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
