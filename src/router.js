import { createRouter, createWebHistory } from "vue-router";
import Home from "./containers/Home.vue";
import Coptic from "./containers/Coptic.vue";


const options = {
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/coptic', component: Coptic },
    ]
}

export const router = createRouter(options)