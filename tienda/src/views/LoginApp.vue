<template>
    <div>
        <section class="hero" style="margin-top: 11rem;">
            <div class="container">
               
                <!-- Hero Content-->
                <div class="hero-content pb-5 text-center">
                <h1 class="hero-heading mb-0">Zona de Cliente</h1>
                </div>
            </div>
            </section>
            <!-- customer login-->
            <section>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="block">
                    <div class="block-header">
                        <h6 class="text-uppercase mb-0">Iniciar Sesión</h6>
                    </div>
                    <div class="block-body">
                        
                        <p class="text-muted">Inicia sesión para poder realizar compras.</p>
                        <hr>
                        <form action="customer-orders.html" method="get">
                        <div class="mb-4">
                            <label class="form-label" for="email1">Correo Electrónico</label>
                            <input class="form-control" id="email1" type="text" placeholder="Correo Electrónico" autocomplete="off" v-model="email">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="password1">Contraseña</label>
                            <input class="form-control" id="password1" type="password" placeholder="Contraseña" autocomplete="off" v-model="password">
                        </div>

                        <div class="mb-4" v-if="msm_error_login">
                            <small class="text-danger ">{{msm_error_login}}</small>
                        </div>

                        <div class="mb-4 text-center">
                            <button class="btn btn-outline-dark" type="button" v-on:click="login()"><i class="fa fa-sign-in-alt me-2"></i> Ingresar</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="block">
                    <div class="block-header">
                        <h6 class="text-uppercase mb-0">Nueva Cuenta</h6>
                    </div>
                    <div class="block-body"> 
                        
                        <p class="text-muted">Registrate para obtener grandes beneficios</p>
                       
                        <hr>
                        <form action="customer-orders.html" method="get">
                        <div class="mb-4">
                            <label class="form-label" for="name">Nombres Completos</label>
                            <input class="form-control" id="name" type="text" placeholder="Nombres Completos" v-model="cliente.nombres">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="email">Correo Electrónico</label>
                            <input class="form-control" id="email" type="text" placeholder="Correo Electrónico" v-model="cliente.email">
                        </div>
                        <div class="mb-4">
                            <label class="form-label" for="password">Contraseña</label>
                            <input class="form-control" id="password" type="password" placeholder="Contraseña" v-model="cliente.password">
                        </div>

                        <div class="mb-4" v-if="msm_error">
                            <small class="text-danger ">{{msm_error}}</small>
                        </div>

                        <div class="mb-4 text-center">
                            <button class="btn btn-outline-dark" type="button" v-on:click="validar_registro()"><i class="far fa-user me-2"></i>Registrar                               </button>
                        </div>

                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name:'LoginApp',
        data(){
            return{
                cliente: {},
                msm_error:'',

                email:'',
                password:'',
                msm_error_login: ''
            }
        },

        beforeMount(){
            if(this.$store.state.token){
                this.$router.push({name:'home'});
            }
        },

        methods: {
            validar_registro(){
                if(!this.cliente.nombres){
                    this.msm_error = 'Ingrese los nombres por favor.'
                }else if(!this.cliente.email){
                    this.msm_error = 'Ingrese el correo electrónico por favor.'
                }else if(!this.cliente.password){
                    this.msm_error = 'Ingrese la contraseña por favor.'
            }else{
                this.msm_error = '';
                axios.post(this.$url+'/registro_cliente_ecommerce',this.cliente,{
                    headers: {
                        'Content-Type':'application/json'
                    }
                }).then((result)=>{
                    if(result.data.message){
                        this.msm_error = result.data.message;
                    }else{
                        this.msm_error = '';
                        console.log(result);
                    }
                    
                })
            }
            console.log(this.cliente); 
        },

        login(){
            if(!this.email){
                this.msm_error_login = 'Ingrese un correo electrónico';
            }else if (!this.password){
                this.msm_error_login = 'Ingrese una contraseña';
            }else{
                this.msm_error_login = '';
                let data = {
                email: this.email,
                password: this.password
            }
            axios.post(this.$url+'/login_cliente',data,{
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((result)=>{
                console.log(result);

                if(result.data.message){
                    this.msm_error_login = result.data.message;
                }else{
                    this.$store.dispatch('saveToken',result.data.token);
                    this.$store.dispatch('saveUser',JSON.stringify(result.data.cliente));
                    this.$router.push({name: 'home'});
                }

              
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }

        
    },
    
}
</script>