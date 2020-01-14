<template>
    <div class="mainDiv">
        <div class="topTitle">全业务停电工单</div>
        <div id="fullServiceList" :style="style"></div>
    </div>
</template>
<script>
    //complaint
    export default {
        name:"fullServiceList",
        data(){
            return{
                activeName: 'first',
                style:{width: '100%', height: '100%'},
                options:{
                    color:['#E16757'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['2015', '2016', '2017', '2018', '2019']
                    },
                    yAxis: {
                        name: '次',
                        type: 'value',
                        max:1000,
                        min:0,
                        splitNumber : 6,
                        axisLine: {             // 坐标轴线
                            show: false
                        },
                        axisTick: {            // 坐标轴小标记
                            show: false,  
                        }
                    },
                    series: [{
                        name: '停电次数',
                        data: [320, 180, 413, 475, 235],
                        type: 'bar'
                    }]
                }
            }
        },
        methods: {
            getComplaint(){
                // 绘制图表
                let myChart=this.$echarts.init(document.getElementById('fullServiceList'));
                // 绘制图表
                myChart.setOption(this.options);

                return;
                let tabId;
                //查询数据库绘制图表 参数：图标id、图表所属供电单位
                //查询数据库
                axios.get('url').then((res) =>{
                    // 绘制图表
                    let myChart=this.$echarts.init(document.getElementById('fullServiceList'));
                    // 绘制图表
                    myChart.setOption(this.options);
                }).catch(resp => {
                    console.log("查询异常");
                })
                
            }
        },
        created(){
            this.$nextTick(() => {
                this.getComplaint();
            });
        }

    }
</script>
<style scoped>
    .mainDiv{
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
    }
    .topTitle{
        height:40px;
        line-height:40px;
        margin-left:20px;
    }
    #myChart{
        flex:1;
    }
</style>