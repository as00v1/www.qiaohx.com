// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import bootstrap from 'bootstrap/dist/js/bootstrap.min'
// import {isEmpty} from '@/assets/js/common'

import '@/assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'
// 第一种和第三种使用方法：
// (全局)
import common from '@/assets/js/common'
// Vue.prototype.common = common;
// this.common.isEmpty()
// this.common.test()
// (局部)
// import {isEmpty, test} from '@/assets/js/common'
// 第二种使用方法：
// import {isEmpty, test} from '@/assets/js/common'
// isEmpty()
// test()
// 好像第二种方法的 import导入方式也能用到 第一种和第三种方法的导入方式，你试一下就知道了


// Vue.use(VueAxios,axios);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.common = common;
//

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
