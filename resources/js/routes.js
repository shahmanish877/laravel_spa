import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/HomePage.vue";
import Signin from "./components/auth/Signin.vue";
import Dashboard from "./components/auth/Dashboard.vue";
import Projects from "./components/projects/Projects.vue";

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
        path: "/projects",
        name: "Projects",
        component: Projects,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
