import type { RouteRecordRaw } from "vue-router";
import { createRouter,createWebHashHistory } from "vue-router";
// 引入路由组件
import LoginView from "@/view/login/Login.vue";
import DashboardView from "@/view/dashboard/DashBoard.vue";
// 定义路由路线
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/login',
        name: 'loginView',
        component: LoginView
    }
]
//创建路由实例并传递 `routes` 配置
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    strict:true,  // ts开启严格模式
    routes, // `routes: routes` 的缩写
  })

export default router;