import {createRouter, createWebHistory} from "vue-router"

import WallPage from "../pages/wall/WallPage.vue"
import LoginPage from "../pages/LoginPage.vue"
import ProfilePage from "../pages/ProfilePage.vue"
import EditProfile from "../pages/EditProfile.vue"

const routes = [
    {path: "/loginpage", component: LoginPage},
    {path: "/home", component: WallPage},
    {path: "/profile", component: ProfilePage},
    {path: "/EditProfile", component: EditProfile}
]


const router = createRouter({history: createWebHistory(), routes})

export default router
