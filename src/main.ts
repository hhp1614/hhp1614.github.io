import { createPinia } from 'pinia'
import './style.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
