import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from 'vue-notification'

Vue.config.productionTip = false;
Vue.prototype.$url = 'http://localhost:9000/api';
Vue.prototype.$token = localStorage.getItem('token');

Vue.use(Notifications)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
