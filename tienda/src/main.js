import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'




Vue.config.productionTip = false

Vue.prototype.paises = ['Argentina','Chile','Perú','Bolivia','Colombia'];
Vue.prototype.$url = 'http://localhost:9000/api';
Vue.prototype.$token = localStorage.getItem('token');
Vue.use(BootstrapVue)











new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
