import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 引入vue-router
Vue.use(VueRouter)
// 引入router
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
