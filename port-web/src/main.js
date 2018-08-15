// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Nav from './components/Nav'
import TopNav from './components/TopNav'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(AOS)
Vue.component('Nav', Nav)
Vue.component('TopNav', TopNav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    AOS.init()
  },
  components: { App },
  template: '<App/>'
})
