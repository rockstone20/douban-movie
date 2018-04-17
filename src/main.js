import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import * as filters from '@/filter/'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/common/default.jpg'),
  error: require('@/common/default.jpg'),
  attempt: 1
})

import '@/common/css/css.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
