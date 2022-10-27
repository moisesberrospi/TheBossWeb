<template>
  <div>
        <Sidebar />
        <div class="main-content">

            <TopNav />

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">

                        <div class="container-fluid">
                  <div class="row justify-content-center">
                      <div class="col-12 col-lg-10 col-xl-8">
  
                          <!-- Header -->
                          <div class="header mt-md-5">
                              <div class="header-body">
                                  <div class="row align-items-center">
                                  <div class="col">
  
                                      <!-- Pretitle -->
                                      <h6 class="header-pretitle">
                                      Administrador
                                      </h6>
  
                                      <!-- Title -->
                                      <h1 class="header-title mt-md-5">
                                          <b>Bienvenido al panel Administrador de TheBossWeb</b>
                                
                                      </h1>
  
                                  </div>
                                  </div> <!-- / .row -->
                                
                              </div>
                          </div>
                         
                      
                                </div>
                                </div>
                            </div>
                        </div>


                                             
                    </div>
                    <center>
                        <img src="/assets/img/tbc_port.jpg" border="4px" width="400" height="400"/>
                    </center>
                    
                </div> <!-- / .row -->
            </div>

        </div>
        
    </div>
</template>

<script>
// @ is an alias to /src

import Sidebar from '@/components/Sidebar.vue';
import TopNav from '@/components/TopNav.vue';



export default {
  name: 'DashboardApp',
    components: {
    Sidebar,
    TopNav
  }
 
}
</script>
