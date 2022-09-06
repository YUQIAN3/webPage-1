import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Doc from './components/views/Doc.vue'
import Home from './components/views/Home.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
const history=createWebHashHistory()
const router=createRouter({
  history:history,
  routes:[
    {path:'/', component: Home} , 
    {path:'/doc', component: Doc}

  ]
 })

const app=createApp(App)
.use(router)
.mount('#app')
