import { comment } from "postcss/lib/postcss"
import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@/page/index.vue")
    },
    {
        path: "/logindescriptionPage",
        name: "logindescriptionPage",
        component: () => import("@/page/logindescriptionPage.vue")
    },
    {
        path: "/FqaDescriptionPage",
        name: "FqaDescriptionPage",
        component: () => import("@/page/FqaDescriptionPage.vue")
    }, {
        path: "/logOffPage",
        name: "logOffPage",
        component: () => import("@/page/logOffPage.vue")
    }
]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//导出去
export default router