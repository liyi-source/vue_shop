import Vue from 'vue'

import Index from '@/views/index'
import UserMsg from '@/views/user_msg'
import Home from '@/views/home'
import Goods from '@/views/goods'
import Order from '@/views/order'
import TabIndex from '@/views/tabIndex'
import FullServiceList from '@/views/fullServiceList'
import ComplaintsClass from '@/views/complaintsClass'



export default[
    {path: '/Index',name: 'index',component: Index,redirect:"/Home",
        children:[
            {path: '/Home',name: 'home',component: Home},
            {path: '/UserMsg',name: 'userMsg',component: UserMsg},
            {path: '/Goods',name: 'goods',component: Goods},
            {path: '/Order',name: 'order',component: Order},
            {path: '/TabIndex',name: 'tabIndex',component: TabIndex,
                children:[
                    {path: '/ComplaintsClass',name: 'complaintsClass',component: ComplaintsClass},
                    {path: '/FullServiceList',name: 'fullServiceList',component: FullServiceList}
                ]
            },
        ]
    },   
]