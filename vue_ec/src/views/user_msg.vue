<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="userList" style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column prop="userId" label="账号"></el-table-column>
            <el-table-column prop="userName" label="姓名"></el-table-column>
            <el-table-column  prop="password" label="密码"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="sex" label="性别"></el-table-column>
            <el-table-column  prop="createTime" label="创建日期"></el-table-column>
            <el-table-column  prop="state" label="状态">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#cccccc">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column  label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-delete"></el-button>
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
                userList:[
                    {"id":"1","userId":"liyi","userName":"李义","password":"000000","state":true,"sex":"男","address":"上海","createTime":"200000"},
                    {"id":"2","userId":"zhangsan","userName":"李义","password":"000000","state":false,"sex":"男","address":"上海","createTime":"200000"},
                ]
            }
        },
        methods: {
            //查询用户列表
            queryUserList(){
                console.log("==");
                // this.$axios.post('/queryUserList').then((res)=>function(){
                //     this.userList=res.data;
                // });
            }
        },
        created() {
            this.queryUserList();
        },
    }
</script>