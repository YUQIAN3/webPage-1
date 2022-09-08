import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
const app=createApp(App)
.use(router)
.mount('#app')
