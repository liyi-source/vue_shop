<template>
    <div class="mainDiv">
        <el-row class="topRow">
          <el-col :span="12" class="col1"></el-col>
          <el-col :span="12" class="col2"></el-col>
        </el-row>
        <el-row class="bottomRow">
          <el-col :span="12" >
            <ComplaintsClass></ComplaintsClass>
          </el-col>
          <el-col :span="12" class="col1">
              <FullServiceList></FullServiceList>
          </el-col>
        </el-row>
    </div>
    
</template>
<script>
    import ComplaintsClass from '../views/complaintsClass'
    import FullServiceList from '../views/fullServiceList'
    export default {
        components:{
            ComplaintsClass,
            FullServiceList
        }
    }
</script>
<style scoped>
    .template{
        padding:0px;
    }
    .mainDiv{
        height:100%;  
        display: flex;
        flex-direction: column;

    }
    .topRow{
        flex: 1;
    }
    .bottomRow{
        flex: 1;
    }
    .el-col{
        height:100%;
        box-shadow: 0 0 10px #cccccc; 
        border:1px solid #dddddd
    }
</style>