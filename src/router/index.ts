import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		// 這個 route 使用了動態 import，當訪問 /about 時才加載該組件
		component: () => import("../views/About.vue"),
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
