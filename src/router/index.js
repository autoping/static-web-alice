import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import UserInfo from "@/components/UserInfo";

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
