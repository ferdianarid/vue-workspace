//import createRouter from module
import { createRouter, createWebHistory } from 'vue-router';

//import local component
import Homepage from '../components/Homepage.vue'
import Product from '../components/Product.vue'
import About from '../components/About.vue'

//declare route
const routes = [
       {
              path: '/',
              component: Homepage
       },
       {
              path: '/product',
              component: Product
       },
       {
              path: '/about',
              component: About
       }
];

//create router
const router = createRouter({
       history: createWebHistory(),
       routes
})

//export router
export default router