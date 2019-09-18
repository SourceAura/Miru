// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';
import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css'; // Material Icons

Vue.use(Vuesax)
Vue.use(VueAxios, axios)
Vue.use(VueMomentJS, moment);

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
