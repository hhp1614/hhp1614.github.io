import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.scss';
import App from './App.vue';
import router from './router';
import components from './components/common';

const app = createApp(App);

app.use(components).use(createPinia()).use(router).mount('#app');
