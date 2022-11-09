import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import UserProfile from './components/UserProfile.vue'
import MainGame from './components/MainGame.vue'
import store from './store/index.js'

const router = createRouter({
history: createWebHistory(),
  routes: [
    {path: '/', component: MainGame},
   {path: '/profile', component: UserProfile}  // distintas rutas
    // {path: '/profile', component: UserProfile},
  ]
})

console.log(store)
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCOOlaLy5WDpDuGz3PTPLCdGLpqX_iHHWs",
//   authDomain: "brazo2.firebaseapp.com",
//   databaseURL: "https://brazo2.firebaseio.com",
//   projectId: "brazo2",
//   storageBucket: "brazo2.appspot.com",
//   messagingSenderId: "667288714267",
//   appId: "1:667288714267:web:71e1ff0a8bdad8063bccbe"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// createApp(App).use(store)
// createApp(App).mount('#app')
