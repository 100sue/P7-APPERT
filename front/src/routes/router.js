import {createRouter, createWebHistory} from "vue-router"
import WallPage from "../pages/wall/WallPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import ProfilPage from "../pages/ProfilPage.vue"

const routes = [
    {path: "/login", component: LoginPage},
    {path: "/home", component: WallPage},
    {path: "/profile", component: ProfilPage}
]


const router = createRouter({history: createWebHistory(), routes})

export default router
