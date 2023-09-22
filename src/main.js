import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Categeory from './pages/Categeory.vue'
import Home from './pages/Home.vue'
import DetailedProduct from './pages/DetailedProduct.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/home', redirect: '/' },
    { path: '/categeory', name : 'Home' , component: Home },
    { path: '/', name : 'Categeory' , component: Categeory },
    { path: '/product/:id', name : 'DetailedProduct' , component: DetailedProduct },
    // { path: '/:catchAll(.*)', component: NotFound },
  ]
})

createApp(App).use(router).mount('#app')
