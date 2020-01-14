<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="userList" border style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column prop="user_id" label="账号" width="180"></el-table-column>
            <el-table-column prop="user_name" label="姓名" width="120"></el-table-column>
            <el-table-column  prop="password" label="密码" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" width="120"></el-table-column>
            <el-table-column prop="sex" label="性别" width="120"></el-table-column>
            <el-table-column  prop="create_time" label="创建日期" width="240"></el-table-column>
            <el-table-column  prop="state" label="状态" width="120">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.state" active-value="1" inactive-value="0" active-color="#13ce66" inactive-color="#cccccc" @change="updUserState(scope.row)">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column  label="操作" width="120">
                <template slot-scope="scope">
                    <el-button class="updButton" size="mini" type="primary" icon="el-icon-delete"  @click="delUser(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name:"userMsg",
        data(){
            return{
                userList:[]
                //     {"id":"1","userId":"liyi","userName":"李义","password":"000000","state":true,"sex":"男","address":"上海","createTime":"200000"},
                //     {"id":"2","userId":"zhangsan","userName":"李义","password":"000000","state":false,"sex":"男","address":"上海","createTime":"200000"},
                // ]
            }
        },
        methods: {
            //查询用户列表
            queryUserList(){
                this.$axios.post("/queryUserList").then((res)=>{
                    console.log("====="+res.data);
                    this.userList=res.data;
                })
            },
            //改变用户状态
            updUserState(userInfo){
                console.log("更改用户状态");
                //  this.$axios.post('/updUserState').then((res)=>function(){
                //     //成功
                    
                //  });
            }
        },
        created() {
            this.queryUserList();
        },
        
    }
</script>

<style scoped>
    /* .updButton{
        width:20px;
        height:30px;        
    } */
</style>