import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import UserInfo from "@/components/UserInfo";
import AssetForm from "@/components/AssetForm";

const routes = [
  {
    path: '/',
    redirect: '/register'
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/user-info',
    name: 'About',
    component: UserInfo
  },
  {
    path: '/asset-new',
    name: 'New Asset',
    component: AssetForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
