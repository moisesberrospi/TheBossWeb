import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginApp.vue'
import CreateColaboradorApp from '../views/colaboradores/CreateColaboradorApp.vue'
import IndexColaboradorApp from '../views/colaboradores/IndexColaboradorApp.vue'
import jwt_decode from 'jwt-decode'


Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'login',component: LoginApp, meta: { requiresAuth: false }},
  {path: '/colaborador',name: 'colaborador-index',component: IndexColaboradorApp,meta: { requiresAuth: true }},
  {path: '/colaborador/create',name: 'colaborador-create',component: CreateColaboradorApp,meta: { requiresAuth: true }},
  {path: '/colaborador/edit/:id',name: 'colaborador-edit',component: ()=>import('@/views/colaboradores/EditColaboradorApp.vue'),meta: { requiresAuth: true }},
  {path: '/dashboard',name: 'dashboard',component: ()=>import('@/views/DashboardApp.vue'),meta: { requiresAuth: true }},

  {path: '/producto',name: 'producto-index',component: ()=>import('@/views/productos/IndexProductoApp.vue'),meta: { requiresAuth: true }},
  {path: '/producto/create',name: 'producto-create',component: ()=>import('@/views/productos/CreateProductoApp.vue'),meta: { requiresAuth: true }},
  {path: '/producto/edit/:id',name: 'producto-edit',component: ()=>import('@/views/productos/EditproductoApp.vue'),meta: { requiresAuth: true }},
  {path: '/producto/galeria/:id',name: 'producto-galeria',component: ()=>import('@/views/productos/GaleriaProductoApp.vue'),meta: { requiresAuth: true }},


  {path: '/ingreso/create',name: 'ingreso-create',component: ()=>import('@/views/ingreso/CreateIngresoApp.vue'),meta: { requiresAuth: true }},
  {path: '/ingreso',name: 'ingreso-index',component: ()=>import('@/views/ingreso/IndexIngresoApp.vue'),meta: { requiresAuth: true }},
  {path: '/ingreso/:id',name: 'ingreso-detalle',component: ()=>import('@/views/ingreso/DetalleIngresoApp.vue'),meta: { requiresAuth: true }},
  

  {path: '/ventas',name: 'ventas-index',component: ()=>import('@/views/ventas/VentasIndexApp.vue'),meta: { requiresAuth: true }},
  {path: '/ventas/:id',name: 'ventas-detalle',component: ()=>import('@/views/ventas/VentasDetalleApp.vue'),meta: { requiresAuth: true }},

  
  {path: '/categorias',name: 'categorias',component: ()=>import('@/views/categorias/IndexCategoriaApp.vue'),meta: { requiresAuth: true }},



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if(to.matched.some(item => item.meta.requiresAuth)){

    if(!store.state.token){
      next({
        name: 'login'
      })
    }

    try {
      jwt_decode(store.state.token)
    } catch (error) {
      next({
        name: 'login'
      })    
    }

    if(jwt_decode(store.state.token).exp*1000 <= new Date().getTime()) {
      next({
        name: 'login'
      })  
    }

    next();

    console.log(jwt_decode(store.state.token));
    console.log('Privada')
    }else{
      console.log('Pública');
      next()
    }

})

export default router
