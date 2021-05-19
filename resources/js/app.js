require('./bootstrap');

import { createApp } from 'vue'
import router from './routes'

import Home from './components/HomePage.vue';
import store from "./components/store";
/*
const app = createApp({});
app.component('hello-world', HelloWorld)
    .mount('#app');
*/

store.dispatch('getUser').then(()=>{
    const app = createApp(Home);
    app.use(router);
    app.use(store);
    app.mount('#app');
})
