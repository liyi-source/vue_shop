import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'



import ar from './actionRouter'

Vue.use(Router)

export const consRouterMap=[
  {path: '/',name: 'login',component: Login},
  {path: '/Login',name: 'login',component: Login}
]

export const asyncRouterMap=[
  ...ar
  
]

const router=new Router({
// export default new Router({
  mode:'history',
  routes: consRouterMap.concat(asyncRouterMap),
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if(to.path==="/Login"){
    return next();
  }
  //获取token看是否已经登陆
  let tokenStr=window.sessionStorage.getItem("token");
  if(!tokenStr){
    return next("/Login")
  }else{
    next();
  }
})
//暴露对象
export default router
