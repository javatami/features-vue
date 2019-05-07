import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
import store from './store';
import App from './App.vue';
import router from './router';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(axios);
Vue.use(store);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
