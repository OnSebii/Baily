import Vue from 'vue';
import App from './App.vue';
import VueKinesis from 'vue-kinesis';

Vue.config.productionTip = false;
Vue.use(VueKinesis);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
