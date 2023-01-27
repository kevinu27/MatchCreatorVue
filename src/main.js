import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import UserProfile from './components/UserProfile.vue'
import MainGame from './components/MainGame.vue'
import store from './store/index.js'
// require("dotenv").config();
// console.log("dotenv", process.env.URL)

const router = createRouter({
history: createWebHistory(),
  routes: [
    {path: '/', component: MainGame},
   {path: '/profile', component: UserProfile}  // distintas rutas
    // {path: '/profile', component: UserProfile},
  ]
})

console.log(store)

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// createApp(App).use(store)
// createApp(App).mount('#app')
