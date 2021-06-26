import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/'
import Home from '@/views/home/'
import Layout from '@/views/layout/'
import Cash from '@/views/cash/'
import Triangle from '@/views/triangle'
import Sales from '@/views/sales/'


import Two from '@/views/two/'
import Four from '@/views/four/'
import Seven from '@/views/seven/'
import Nine from '@/views/nine/'
import Ten from '@/views/ten/'
import Eleven from '@/views/eleven/'
import Twelve from '@/views/twelve/'
import Thirteen from '@/views/thirteen/'

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
      },{
        path:'/triangle',
        name:'triangle',
        component:Triangle
      },
      {
        path:'/calendar',
        name:'calendar',
        component: () => import("@/views/calendar")
      },
      {
        path:'/sales',
        name:'sales',
        component:Sales
      },
      {
        path:'/two',
        name:'two',
        component:Two
      },
      {
        path:'/four',
        name:'four',
        component:Four
      },
      {
        path:'/seven',
        name:'seven',
        component:Seven
      },
      {
        path:'/nine',
        name:'nine',
        component:Nine
      },
      {
        path:'/ten',
        name:'ten',
        component:Ten
      },
      {
        path:'/eleven',
        name:'eleven',
        component:Eleven
      },
      {
        path:'/twelve',
        name:'twelve',
        component:Twelve
      },
      {
        path:'/thirteen',
        name:'thirteen',
        component:Thirteen
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
