import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueKinesis from 'vue-kinesis';
Vue.config.productionTip = false;
Vue.use(VueKinesis);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
