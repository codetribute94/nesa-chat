import Vue from "vue";
import login from "./routes/Login.js";
import signup from "./routes/signup.js";
import App from './App.vue';
import VueRouter from "vue-router";
import footer from "./component/footer.vue"

const routes = [
    login.route,
    signup.route
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

Vue.use(VueRouter);

const app = new Vue({
    router
}).$mount('#app');