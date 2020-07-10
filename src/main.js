import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import store from './shared/data/data.json'
// import installer from '@andresouzaabreu/vue-data-table'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@andresouzaabreu/vue-data-table/dist/DataTable.css'

// installer(Vue, store)
// import { VuejsDatatableFactory } from 'vuejs-datatable'
// import $ from 'jquery'

// We import JQuery
// const $ = require('jquery');
// We declare it globally
// window.$ = $;

Vue.config.productionTip = false

// Vue.use(VuejsDatatableFactory)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  // store,
  router,
  render: h => h(App)
}).$mount('#app')