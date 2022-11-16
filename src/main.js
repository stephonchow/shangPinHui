import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 三级联动组件，全局注册
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav)
// 引入vue-router
Vue.use(VueRouter)
// 引入router
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
