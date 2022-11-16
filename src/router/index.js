import VueRouter from "vue-router";
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
// import { replace } from "core-js/fn/symbol";
// 保存原来的push函数
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true }
        }, {
            path: '/login',
            component: Login,

        }, {
            // 路由传参
            name: "search",
            path: '/search/:keyWord?',
            component: Search,
            meta: { show: true }
        }, {
            path: '/register',
            component: Register,
        }, {
            path: "/",
            redirect: "/home"
        }
    ]
})

export default router