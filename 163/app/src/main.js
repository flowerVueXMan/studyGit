/// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Datetime, Group } from 'vux'  
Vue.component(Datetime.name, Datetime);  
Vue.component(Group.name, Group);

import { Datetime, Group } from 'vux'  
Vue.component(Datetime.name, Datetime);  
Vue.component(Group.name, Group);  

import VueJsonp from 'vue-jsonp'

Vue.config.productionTip = false
Vue.use(VueJsonp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
