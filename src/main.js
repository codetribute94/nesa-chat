import Vue from "vue";
import login from "./routes/Login.js"
import App from './App.vue';
import VueRouter from "vue-router";


const routes = [
    login.route
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

Vue.use(VueRouter);

const app = new Vue({
    router
}).$mount('#app');