<template>
  <section>
    <!-- Hero Section-->
    <section class="home-full-slider-wrapper mb-2">
      <!-- Hero Slider-->
      <div class="owl-carousel owl-theme owl-dots-modern home-full-slider">
        <div class="item home-full-item" style="background: #f8d5cf;"><img class="bg-image" src="https://i.postimg.cc/6TJCPMzB/TBC3-1.jpg" alt="">
          <div class="container-fluid h-100 py-5">
            <div class="row align-items-center h-100">
              <div class="col-lg-8 col-xl-6 mx-auto text-white text-center position-relative">
                <h5 class="text-uppercase text-white fw-light mb-4 letter-spacing-5"> Nuevos Productos</h5>
                <h1 class="mb-5 display-2 fw-bold text-serif">Beanies</h1>
                <p class="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <a class="btn btn-light" href="/shop">Ver Productos</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="item home-full-item bg-dark dark-overlay"><img class="bg-image" src="https://i.postimg.cc/GtskzWFM/TBC2-1.jpg" alt="">
          <div class="container-fluid h-100">
            <div class="row align-items-center h-100">
              <div class="col-lg-8 col-xl-6 mx-auto text-white text-center overlay-content">
                <h1 class="mb-4 display-2 text-uppercase fw-bold">Hoodies</h1>
                <p class="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p> <a class="btn btn-light" href="/shop">Empieza a Comprar</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="item home-full-item"><img class="bg-image" src="https://i.postimg.cc/PfLcBNK7/TBC1-1.jpg" alt="">
          <div class="container-fluid h-100">
            <div class="row align-items-center h-100">
              <div class="col-lg-8 col-xl-6 mx-auto text-white text-center position-relative">
                <h5 class="text-uppercase fw-light mb-4 letter-spacing-5"> Los Mas Vendidos</h5>
                <h1 class="mb-5 display-1 fw-bold text-serif">Bucket Hats</h1>
                <p> <a class="btn btn-light" href="/shop">Ver Prouctos</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section>
      <div class="container-fluid g-2">
        <div class="row g-2">
          <div class="col-md-6">
            <div class="card border-0 text-white text-center"><img class="card-img" src="https://i.postimg.cc/NMR6w0kv/New-arrivals-TBC.jpg" alt="Card image">
              <div class="card-img-overlay d-flex align-items-center"> 
                <div class="w-100 py-3">
                  <h2 class="display-3 fw-bold mb-4">Top picks</h2><a class="btn btn-light" href="/shop">Shop now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 text-white text-center"><img class="card-img" src="https://i.postimg.cc/52kMW4s0/top-picks-TBC.jpg" alt="Card image">
              <div class="card-img-overlay d-flex align-items-center"> 
                <div class="w-100 py-3">
                  <h2 class="display-3 fw-bold mb-4">New arrivals</h2><a class="btn btn-light" href="/shop">Shop now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card border-0 text-center text-white"><img class="card-img" src="https://i.postimg.cc/8cDhkVZJ/bucket-Hat-TBC.jpg" alt="Card image">
              <div class="card-img-overlay d-flex align-items-center"> 
                <div class="w-100">
                  <h2 class="display-4 mb-4">Jackets</h2><a class="btn btn-link text-white" href="/shop">Shop now <i class="fa-arrow-right fa ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card border-0 text-center text-white"><img class="card-img" src="https://i.postimg.cc/R0k78tfT/Joggers-TBC.jpg" alt="Card image">
              <div class="card-img-overlay d-flex align-items-center"> 
                <div class="w-100">
                  <h2 class="display-4 mb-4">Lookbook</h2><a class="btn btn-link text-white" href="/shop">Shop now <i class="fa-arrow-right fa ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card border-0 text-center text-dark"><img class="card-img" src="https://i.postimg.cc/tJtHKFcQ/tabone-TBC.jpg" alt="Card image">
              <div class="card-img-overlay d-flex align-items-center"> 
                <div class="w-100">
                  <h2 class="display-4 mb-4">Try this</h2><a class="btn btn-link text-white" href="/shop">Shop now <i class="fa-arrow-right fa ms-2"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style>
  .product-image{
    display: block !important;
    overflow: hidden !important;
    height: 320px !important;
  }
  .img-fluid{
    height: auto !important;
    display: block !important;
    /*vertical-align: middle !important;*/
  }
  .light-overlay::after {
    opacity: .0 !important;
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';
import currency_formatter from 'currency-formatter';
import  {init_carousel}  from '../../public/assets/js/theme.d7b4a888'

export default {
  name: 'HomeView',
  data() {
    return {
       nuevos_productos : [],
       load_nuevos_productos : true, 

       productos_recomendados : [],
       load_productos_recomendados : true,
    }
  },
  methods: {
    init_nuevos_productos(){
      axios.get(this.$url+'/obtener_nuevos_productos',{
        headers: {
            'Content-Type': 'application/json'
        }
      }).then((result)=>{
        this.nuevos_productos = result.data;
        this.load_nuevos_productos = false;
        console.log(this.nuevos_productos);
      });
    },

    init_productos_recomendados(){
      axios.get(this.$url+'/obtener_productos_recomendados',{
        headers: {
            'Content-Type': 'application/json'
        }
      }).then((result)=>{
        this.productos_recomendados = result.data;
        this.load_productos_recomendados = false;
        console.log(this.productos_recomendados);
      });
    },

    convertCurrency(number){
        return currency_formatter.format(number, { code: 'PEN' });
    }
  },
  components: {
    HelloWorld
  },
  beforeMount(){
    this.init_nuevos_productos();
    this.init_productos_recomendados();
    init_carousel.init();
  },
}
</script>
