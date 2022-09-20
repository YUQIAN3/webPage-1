import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import './lib/gulu.scss'
import 'github-markdown-css'
const app=createApp(App)
.use(router)
.mount('#app')
