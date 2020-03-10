import Vue from 'vue'

import Index from '@/views/index'
import UserMsg from '@/views/user_msg'
import Home from '@/views/home'
import Goods from '@/views/goods'
import Order from '@/views/order'



export default[
    {path: '/Index',name: 'index',component: Index,redirect:"/Home",
        children:[
            {path: '/Home',name: 'home',component: Home},
            {path: '/UserMsg',name: 'userMsg',component: UserMsg},
            {path: '/Goods',name: 'goods',component: Goods},
            {path: '/Order',name: 'order',component: Order}
        ]
    },   
]