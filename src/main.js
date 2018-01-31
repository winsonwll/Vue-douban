// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './components/loading'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTouch from 'vue-touch'
import TouchRipple from 'vue-touch-ripple'
import Toast from './components/toast'

import './assets/less/app.less'
Vue.use(VueAxios, axios)
Vue.use(Loading)
Vue.use(Toast)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(TouchRipple)

Vue.filter('arr2string', value => value.join(' / '));
Vue.filter('fixNum', num => (num ? (Number(num).toFixed(1)) : '暂无评分'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
