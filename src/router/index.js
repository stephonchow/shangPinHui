import VueRouter from "vue-router";
import Home from '../pages/Home'

// 创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: '/Home',
            component: Home
        }
    ]
})

export default router