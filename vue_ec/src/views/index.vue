<template>
    <el-container class="main_container">
        <el-header height="60px">
            <div class="head_top">
                <div>管理系统</div>
                <el-button type="info" size="small" @click="exit">退出</el-button>
            </div>
            
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="2" class="el-menu-vertical-demo" 
                    background-color="#545c64"  text-color="#fff" 
                    active-text-color="#409eef" :unique-opened="true" :router="true">
                    <el-submenu :index="single.id" v-for="single in menuList" :key="single.id">
                        
                        <template slot="title">
                            <i :class="single.icon"></i>
                            <span>{{single.menuName}}</span>
                        </template>
                        
                        <el-menu-item :index="singleChid.path" v-for="singleChid in single.children" :key="singleChid.id">
                            <i :class="singleChid.icon"></i>
                            <span>{{singleChid.menuName}}</span>
                        </el-menu-item>
                        
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    export default {
        name:"index",
        data(){
          return{
            menuList: []
            //   {"id":"100","menuName":"首页","icon":"el-icon-s-grid","path":"",
            //     "children":[
            //       {"id":"1001","menuName":"首页","icon":"el-icon-menu","path":"/Home"}
            //     ]
            //   },
            //   {"id":"101","menuName":"用户管理","icon":"el-icon-user-solid","path":"",
            //     "children":[
            //       {"id":"1011","menuName":"用户列表","icon":"el-icon-menu","path":"/UserMsg"}
            //     ]
            //   },
            //   {"id":"102","menuName":"商品管理","icon":"el-icon-s-goods","path":"",
            //     "children":[
            //       {"id":"2011","menuName":"商品列表","icon":"el-icon-menu","path":"/Goods",},
            //       {"id":"2012","menuName":"购物列表","icon":"el-icon-menu","path":"/Order",}
            //     ]
            //   },
            //   {"id":"103","menuName":"订单管理","icon":"el-icon-sell","path":"","children":[]}
            // ]
          }
        },
        methods:{
            // handleOpen(key, keyPath) {
            //     // console.log(key, keyPath);
            // },
            // handleClose(key, keyPath) {
            //     console.log(key, keyPath);
            // },
            queryMeuns(){
              this.$axios.get("/queryMenus").then((res)=>{
                this.menuList=res.data;
              })
            },
            exit(){
                window.sessionStorage.setItem("token","");
                this.$router.push("/Login");
            }
        },
        created:function(){
            this.queryMeuns();
        }
    }
</script>
<style scoped>
    .el-header{
        background-color: #3d4850;
        
        font-size:20px;
        color:#ffffff;
    }
    .head_top{
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* border:1px solid blue; */
    }
    .el-header div{
        display: flex;
        align-items: center;
        
    }
    .el-aside {
        background-color: #545c64;
    }
    .el-main{
        background-color: #eeeeee;
    }
    .main_container{
        height:100%;
    }
    .el-menu{
        border:0px;
    }
</style>