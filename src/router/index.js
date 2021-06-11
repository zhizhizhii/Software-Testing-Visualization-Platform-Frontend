import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/'
import Home from '@/views/home/'
import Layout from '@/views/layout/'
import Cash from '@/views/cash/'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'',
        name:'home',
        component:Home
      },
      {
        path:'/cash',
        name:'cash',
        component:Cash
      },
      {
        path:'/calendar',
        name:'calendar',
        component: () => import("@/views/calendar")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const user = JSON.parse(window.localStorage.getItem('user'));
//导航守卫
// router.beforeEach((to,_,next) =>{
//   //校验非登录页面的登录状态
//   if(to.path !== '/login'){
//     if(user){
//       next();
//     }else{
//       next('./login');
//     }
//   }else{
//     //登录页面正常允许通过
//     next()
//   }
// })

export default router
