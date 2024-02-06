import {createRouter, createWebHistory} from 'vue-router'
import login from '../views/Login.vue'
import register from '../views/Register.vue'

//配置組件及路徑的對應關係
const routes = [
    {
        path:'/',
        component:login
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/register',
        component:register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 路由器配置導出
export default router