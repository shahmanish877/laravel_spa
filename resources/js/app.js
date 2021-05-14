require('./bootstrap');

import { createApp } from 'vue'
import router from './routes'

import Home from './components/HomePage.vue';

/*
const app = createApp({});
app.component('hello-world', HelloWorld)
    .mount('#app');
*/

const app = createApp(Home);
app.use(router);
app.mount('#app');
