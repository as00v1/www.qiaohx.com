// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import bootstrap from 'bootstrap/dist/js/bootstrap.min'
import '@/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import common from '@/assets/js/common'
import md5 from '@/assets/js/md5'
import * as baseUrl from '@/assets/js/baseUrl'

Vue.config.productionTip = false;

Vue.prototype.common = common;
Vue.prototype.$hex = md5;
Vue.prototype.$axios = axios;
Vue.prototype.$base = baseUrl;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>'
})
