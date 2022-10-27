<template>
    <div >
       <div v-if="!load_data" style="background: #ffffff;" class="pb-5">
           <div v-if="!acceso">
              <section class="hero" style="margin-top: 8rem !important;">
                  <div class="container" >
                    <!-- Breadcrumbs -->
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                      
                    </ol>
                    <!-- Hero Content-->
                    <div class="hero-content pb-5 text-center">
                      <h1 class="mb-5">No tienes acceso a la venta</h1>
                      <div class="row">   
                        <div class="col-xl-8 offset-xl-2"><p class="lead mb-0">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity. </p></div>
                      </div>
                    </div>
                  </div>
            </section>
           </div>
           <div v-if="acceso">
            <section class="hero" style="margin-top: 8rem !important;">
                <div class="container">
                  <!-- Breadcrumbs -->
                  <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                      <li class="breadcrumb-item"><router-link to="/">Mis Ventas</router-link></li>
                      <li class="breadcrumb-item active">Order #{{venta.serie.toString().padStart(6,'000000')}}</li>
                      </ol>
                  <!-- Hero Content-->
                  <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading">Order #{{venta.serie.toString().padStart(6,'000000')}}</h1>
                    <div class="row">   
                      <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">Order #{{venta.serie.toString().padStart(6,'000000')}} was placed on <strong>{{convertDate(venta.createdAt)}}</strong> and is currently <strong>Being prepared</strong>.</p><p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p></div>
                    </div>
                  </div>
                </div>
                  </section>
                  <section>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-8 col-xl-9">
                          <div class="cart">
                            <div class="cart-wrapper">
                              <div class="cart-header text-center" style="background: #000000 !important;">
                                      <div class="row">
                                      <div class="col-6">
                                          <span class="text-left text-white">Producto</span>
                                      </div>
                                      <div class="col-2">
                                          <span class="text-white">Precio</span>
                                      </div>
                                      <div class="col-2">
                                          <span class="text-white">Cantidad</span>
                                      </div>
                                      <div class="col-2">
                                          <span class="text-white">Total</span>
                                      </div>
                                      </div>
                                  </div>
                              <div class="cart-body" style="background: #fff6e8 !important">
                                <!-- Product-->
                                <div class="cart-item" v-for="item in detalles">
                                  <div class="row d-flex align-items-center text-center">
                                  <div class="col-6">
                                      <div class="d-flex align-items-center">
                                          <router-link :to="{name: 'show-producto',params:{slug: item.producto.slug}}">
                                              <img class="cart-item-img" :src="$url+'/obtener_portada_producto/'+item.producto.portada" alt="...">
                                          </router-link>
                                          <div class="cart-title text-start">
                                              <router-link class="text-uppercase text-dark" :to="{name: 'show-producto',params:{slug: item.producto.slug}}">
                                                  <strong>{{item.producto.titulo.substr(0,20)}}...</strong>
                                              </router-link>
                                              <br>
                                              <span class="text-muted text-sm">{{item.producto.str_variedad}}: {{item.variedad.variedad}}</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-2">{{convertCurrency(item.producto.precio)}}</div>
                                  <div class="col-2">
                                      {{item.cantidad}}
                                  </div>
                                  <div class="col-2 text-center">{{convertCurrency(item.producto.precio*item.cantidad)}}</div>
                                 
                            </div>
                        </div>
                              </div>
                            </div>
                          </div>
                          <div class="row my-5">
                            <div class="col-md-6">
                              <div class="block mb-5" >
                                <div class="block-header" style="background: #fff6e8 !important">
                                  <h6 class="text-uppercase mb-0">Detalles de Orden</h6>
                                </div>
                                <div class="block-body bg-light pt-1" style="background: #fff6e8 !important">
                                  <p class="text-sm">Shipping and additional costs are calculated based on values you have entered.</p>
                                  <ul class="order-summary mb-0 list-unstyled">
                                    <li class="order-summary-item"><span>Subtotal </span><span>{{convertCurrency(venta.total)}}</span></li>
                                    <li class="order-summary-item"><span>Envío</span><span>{{convertCurrency(venta.envio)}}</span></li>
                                    <li class="order-summary-item border-0"><span>Total</span><strong class="order-summary-total">{{convertCurrency(venta.total+venta.envio)}}</strong></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="block-header" style="background: #fff6e8 !important">
                                <h6 class="text-uppercase mb-0">Cliente</h6>
                              </div>
                              <div class="block-body bg-light pt-1" style="background: #fff6e8 !important">
                                <p>{{venta.cliente.nombres}} {{venta.cliente.apellidos}}<br>{{venta.cliente.email}}</p>
                              </div>
                              <div class="block-header" style="background: #fff6e8 !important">
                                <h6 class="text-uppercase mb-0">Direccion de Entrega</h6>
                              </div>
                              <div class="block-body bg-light pt-1" style="background: #fff6e8 !important">
                                <p>{{venta.direccion.nombres}} {{venta.direccion.apellidos}}<br>{{venta.direccion.telefono}} <br>{{venta.direccion.documento}} <br>{{venta.direccion.zip}} 
                                  {{venta.direccion.pais}}<br>{{venta.direccion.ciudad}}<br>{{venta.direccion.direccion}}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Customer Sidebar-->
                        <div class="col-xl-3 col-lg-4 mb-5">
                          <SidebarCliente/>
                        </div>
                    <!-- /Customer Sidebar-->
                  </div>
                </div>
            </section>
           </div>
       </div>
       <div v-if="load_data">
          <div class="container" style="margin-top: 8rem !important;">
            <div class="row">
               <div class="col-12 text-center">
                  <img src="/assets/media/reloj.gif" style="width: 80px;">
               </div>         
            </div>
          </div>
       </div>
    </div>
</template>

<script>
import SidebarCliente from '@/components/SidebarCliente.vue';
import axios from 'axios'; 
import moment from 'moment';
import currency_formatter from 'currency-formatter';

export default {
   name: 'VentaDetalleApp',
   data(){
    return {
        venta: {},
        detalles: [],
        acceso:false,
        load_data: true,
    }
   },
   components: {
      SidebarCliente
    },
    beforeMount() {
      this.init_venta();
    },
    methods: {
      init_venta(){
        this.load_data = true;
        axios.get(this.$url+'/obtener_informacion_venta/'+this.$route.params.id,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.$store.state.token
                }
            }).then((result)=>{
                console.log(result);
                if(result.data.message){
                  this.acceso = false;
                }else{
                  this.venta = result.data.venta;
                  this.detalles = result.data.detalles;
                  this.acceso = true;
                }
                this.load_data = false;
            });
      },
      convertDate(item){
        return moment(item).format('YYYY/MM/DD');
      },
      convertCurrency(number){
            return currency_formatter.format(number, { code: 'PEN' });
        },
    }
  }
</script>