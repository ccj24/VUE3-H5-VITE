import { comment } from "postcss/lib/postcss"
import { createRouter, createWebHashHistory } from "vue-router"


const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@/page/index/index.vue")
    },
    {
        path: "/found",
        name: "found",
        component: () => import("@/page/found/found.vue")
    },
    {
        path: "/publish",
        name: "publish",
        component: () => import("@/page/publish/publish.vue")
    }, {
        path: "/mine",
        name: "mine",
        component: () => import("@/page/mine/mine.vue")
    }
]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//导出去
export default router