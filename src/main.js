import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Categeory from './pages/Categeory.vue'
import Home from './pages/Home.vue'
import DetailedProduct from './pages/DetailedProduct.vue'
import CategoryProducts from './pages/CategoryProducts.vue'
import NotFound from './pages/NotFound.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/home', redirect: '/' },
    { path: '/', name : 'Categeory' , component: Categeory },
    { path: '/categeory', name : 'Home' , component: Home },
    { path: '/category/:name', name : 'CategoryProducts' , component: CategoryProducts },
    { path: '/product/:id', name : 'DetailedProduct' , component: DetailedProduct },
    { path: '/:catchAll(.*)', component: NotFound },
  ]
})
AOS.init();
createApp(App).use(router).mount('#app')
