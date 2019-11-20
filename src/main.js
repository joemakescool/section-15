import Vue from 'vue'
import App from './App.vue'

// Storage
import VueResource from 'vue-resource'
Vue.use(VueResource);

// Database Connection
Vue.http.options.root = 'https://vuejs-https-bdc63.firebaseio.com/'; // makes a global url
Vue.http.interceptors.push((request, next)=> {
  // eslint-disable-next-line no-console
  console.log(request);
  if (request.method === 'POST'){
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  });
});

// Style
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
