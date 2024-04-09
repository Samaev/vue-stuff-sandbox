import {createApp} from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from "@/router";


const app = createApp(App);
app.use(router);
app.component({
    TestOneView: () => import('./TestOneView.vue'),
    TestTwoView: () => import('./TestTwoView.vue'),
});
app.mount('#app')
