<template>
  <nav class="navbar navbar-vertical fixed-start navbar-expand-md navbar-light" id="sidebar">
    <div class="container-fluid">
  
      <!-- Toggler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <!-- Brand -->
      <a class="navbar-brand" href="/dashboard">
        <img src="/assets/img/tbc.png" class="navbar-brand-img mx-auto" alt="...">
      </a>
  
      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidebarCollapse">
  
        <!-- Form -->
        <form class="mt-4 mb-3 d-md-none">
          <div class="input-group input-group-rounded input-group-merge input-group-reverse">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
            <div class="input-group-text">
              <span class="fe fe-search"></span>
            </div>
          </div>
        </form>
  
        <!-- Navigation -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#sidebarDashboards" data-bs-toggle="collapse" role="button" aria-expanded="true" aria-controls="sidebarDashboards">
              <i class="fe fe-home"></i> Accesos Panel
            </a>
            <div class="collapse show" id="sidebarDashboards">
              <ul class="nav nav-sm flex-column">
                <li class="nav-item">
                  <router-link to="/colaborador" class="nav-link" active-class="active">
                    <i class="fe fe-user"></i> Colaboradores
                  </router-link>
                </li>

              </ul>
            </div>
          </li>
       
         
         
        </ul>
        <hr class="navbar-divider my-3">
        <h6 class="navbar-heading">
            Inventario / Ventas
          </h6>


        <ul class="navbar-nav mb-md-4">
            <li class="nav-item">
            <router-link to="/categorias" class="nav-link" active-class="active">
              <i class="fe fe-inbox"></i> Categorias
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/producto" class="nav-link" active-class="active">
              <i class="fe fe-package"></i> Productos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ingreso" class="nav-link" active-class="active">
              <i class="fe fe-folder"></i> Ingreso
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ventas" class="nav-link" active-class="active">
              <i class="fe fe-shopping-bag"></i> Ventas
            </router-link>
          </li>
        </ul>
  
  
        <!-- Push content down -->
        <div class="mt-auto"></div>
  
  
       
      </div> <!-- / .navbar-collapse -->
  
    </div>
  </nav>
</template>

  
  <script>
  export default {
    name: 'Sidebar',
    props: {
      msg: String
    }
  }
  </script>
  
