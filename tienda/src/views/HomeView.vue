<template>
  <div class="home">
    <section class="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-center" data-parallax="scroll" data-image-src="/assets/img/glenn.jpg" data-speed="0.5" data-position-x="left" data-bleed="20">
      <div class="container">
        <div class="row">
          <div class="col-12 py-5 overflow-hidden overlay-content mx-auto">
            <h5 class="text-uppercase text-dark fw-normal mb-4 letter-spacing-5"> Just arrived</h5>
            <h1 class="mb-5 display-2 fw-bold text-uppercase">Autumn vibes</h1>
            <p> <a class="btn btn-outline-dark" href="category.html">See look book</a></p>
          </div>
        </div>
      </div>
    </section>
    <section class="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-start" data-parallax="scroll" data-image-src="/assets/img/TBC1.jpg" data-speed="0.5" data-position-x="right" data-bleed="20">
      <div class="container">
        <div class="row">
          <div class="col-12 py-5 overflow-hidden overlay-content mx-auto">
            <h1 class="mb-3 display-1 fw-bold text-uppercase">Ethnic<br class="display-lg">sweaters</h1>
            <p class="h3 fw-normal mb-5">Trendy. Comfy. Beautiful. </p>
            <p> <a class="btn btn-dark" href="category.html">See look book</a></p>
          </div>
        </div>
      </div>
    </section>
    <section class="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-dark text-start text-md-end" data-parallax="scroll" data-image-src="/assets/img/TBC2.jpg" data-speed="0.5" data-position-x="left" data-bleed="20">
      <div class="container">
        <div class="row">
          <div class="col-12 py-5 overflow-hidden overlay-content mx-auto">
            <h5 class="text-uppercase text-dark fw-normal mb-4 letter-spacing-5"> Our favourites</h5>
            <h1 class="mb-3 display-3 fw-bold text-uppercase">Shirts</h1>
            <p class="h3 fw-normal mb-5">Vestibulum tortor quam.<br>Feugiat vitae, ultricies eget. </p>
            <p> <a class="btn btn-outline-dark" href="category.html">See look book</a></p>
          </div>
        </div>
      </div>
    </section>
    <section class="vh-100 light-overlay light-overlay-lg-0 d-flex align-items-center text-center" data-parallax="scroll" data-image-src="/assets/img/TBC3.jpg" data-speed="0.5" data-bleed="20">
      <div class="container">
        <div class="row">
          <div class="col-12 py-5 overflow-hidden overlay-content mx-auto">
            <h1 class="mb-5 display-3 fw-bold text-uppercase">Men's collection</h1>
            <p> <a class="btn btn-lg btn-dark" href="category.html">See look book</a></p>
          </div>
        </div>
      </div>
    </section>
  </div>
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
    vertical-align: middle !important;
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
