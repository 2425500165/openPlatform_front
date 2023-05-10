import { createRouter, createWebHistory } from 'vue-router';
import {storeToRefs} from "pinia";
import useMainStore from '../stores/main.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/doc',
      name: 'doc',
      redirect: '/docMainGuide',
      component: () => import('../views/doc/doc.vue'),
      children:[
        {path: '/docMainGuide' , name: 'doc-main-guide', component: () => import('../views/doc/components/doc-main-guide.vue')},
        {path: '/docMainQuestion' , name: 'doc-main-question', component: () => import('../views/doc/components/doc-main-question.vue')}
      ]
    },
    {
      path: '/account',
      name: 'account',
      meta: {
        requiresAuth: true // 默认不需要登录
      },
      redirect: '/accountMainUserInfo',
      component: () => import('../views/account/account.vue'),
      children:[
        {path: '/accountMainUserInfo' , name: 'account-main-userInfo', component: () => import('../views/account/components/account-main-userInfo.vue')},
        {path: '/accountMainEditPass' , name: 'account-main-editPass', component: () => import('../views/account/components/account-main-editPass.vue')}
      ]
    }
  ]
})



router.beforeEach((to, from, next) => {

const mainStore = useMainStore()
const { isLogin } = storeToRefs(mainStore)
 // 检查路由是否需要身份验证
 if (to.matched.some(record => record.meta.requiresAuth)) {
// 假设未登录状态
  if (!isLogin.value) {
    // 用户未登录，重定向到首页
    next({ path: '/' });
  } else {
    // 用户已登录，继续跳转
    next();
  }
} else {
  // 不需要身份验证，直接跳转
  next();
}
});

export default router
