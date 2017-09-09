// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../src/common/font/iconfont.css'
require('./mock.js')
Vue.use(Mint)
Vue.prototype.$htttp = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
//
Vue.filter('number',function (data,n) {
  return data.toFixed(n)
})
