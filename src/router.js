import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/one',
        name: 'one',
        component: () => import('./TestOneView.vue'),
    }  ,
    {
        path: '/two',
        name: 'two',
        component: () => import('./TestTwoView.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;