import Vue from 'vue'
import App from './App.vue'

import router from './router'

import VueTilt from 'vue-tilt.js'
Vue.use(VueTilt);

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
Vue.use(VueTabs);

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  once: true,
});

/*const wow = require('wow.js');
new wow({ live: true, mobile: false}).init();
new wow().init();
console.log(wow);*/

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');