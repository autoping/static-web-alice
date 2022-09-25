import { createRouter, createWebHashHistory } from 'vue-router'
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import UserInfo from "@/components/UserInfo";
import AssetForm from "@/components/AssetForm";
import CardForm from "@/components/CardForm";
import AssetList from "@/components/AssetList";
import Asset from "@/components/Asset";
import Card from "@/components/Card";
import Landing from "@/components/Landing";

const routes = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
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
  },
  {
    path: '/card-new',
    name: 'New Card',
    component: CardForm
  },
  {
    path: '/asset-list',
    name: 'Asset List',
    component: AssetList
  },
  {
    path: '/asset',
    name: 'Asset',
    component: Asset
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
