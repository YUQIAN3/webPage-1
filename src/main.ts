import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
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
