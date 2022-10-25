import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {path: '/login',name: 'login',component: ()=> import('@/views/LoginApp.vue')},
  {path: '/shop',name: 'shop',component: ()=> import('@/views/productos/IndexProductoApp.vue')},
  {path: '/cart',name: 'cart',component: ()=> import('@/views/CarritoView.vue')},
  {path: '/producto/:slug',name: 'show-producto',component: ()=> import('@/views/productos/ShowProductoApp.vue')},

  {path: '/cuenta/direcciones',name: 'direcciones',component: ()=> import('@/views/cuenta/DireccionesApp.vue')},
  {path: '/checkout',name: 'checkout',component: ()=> import('@/views/CheckoutView.vue')},


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
