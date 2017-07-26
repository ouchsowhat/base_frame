import Vue from 'vue'
import App from './App.vue'

import store from './store/index'
import router from './router/router'
import http from './components/http/httpAdapterPlugin'

import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(http);
Vue.use(ElementUI);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
