import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/start',
        children: [
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
            ,
            {
                path: '/four',
                name: 'four',
                component: () => import('./TestFourView.vue'),
            }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;