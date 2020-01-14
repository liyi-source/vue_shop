<template>
    <div class="mainDiv">
        <div class="topTitle">全业务投诉工单一览</div>
        <div class="middleTitle">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="投诉分类情况" name="first"></el-tab-pane>
                <el-tab-pane label="运检类投诉情况" name="second"></el-tab-pane>
            </el-tabs>
        </div>
        <div id="myChart" :style="style">
        </div>
    </div>
</template>
<script>
    //complaint
    export default {
        name:"complaintsClass",
        data(){
            return{
                activeName: 'first',
                style:{width: '100%', height: '100%'},
                options:{
                    color: ['#61A5E8', '#EECB5F', '#7ECF51'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        right: '20%'
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: false, readOnly: false},
                            restore: {show: false},
                            saveAsImage: {show: false}
                        }
                    },
                    legend: {
                        data: ['本期值', '同期值', '同比']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            
                            axisTick: {alignWithLabel: true},
                            data: ['服务投诉', '营业投诉', '供电质量', '电网建设', '停送电投诉'],
                            position:'bottom'
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',name: '数量（次）',
                            min: 30,max: 110,splitNumber : 10,
                            axisLabel: {formatter: '{value} '},
                            axisLine: {show: false},
                            axisTick: {            // 坐标轴小标记
                                show: false,   
                            },
                        },
                        {
                            type: 'value',name: '',
                            
                            min: -20,max: 20,splitNumber : 10,
                            axisLabel: {formatter: '{value} %'},
                            axisTick: {            // 坐标轴小标记
                                show: false,  
                            }
                        }
                    ],
                    series: [
                        {name: '本期值',type: 'bar',data: [48, 68, 65, 79, 75]},
                        {name: '同期值',type: 'bar',data: [60, 68, 60, 82, 90]},
                        {name: '同比',type: 'line',yAxisIndex: 1,data: [-5, 10, 15, 8, -1]}
                    ]
                },
                options1:{
                    color: ['#61A5E8', '#EECB5F', '#7ECF51'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {type: 'shadow'}
                    },
                    grid: {
                        right: '20%'
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: false, readOnly: false},
                            restore: {show: false},
                            saveAsImage: {show: false}
                        }
                    },
                    legend: {
                        data: ['本期值', '同期值', '环比']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {alignWithLabel: true},
                            data: ['频繁停电投诉', '电压质量投诉', '抢修服务投诉']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',name: '数量（次）',
                            min: 30,max: 110,splitNumber : 10,
                            axisLabel: {formatter: '{value} '}
                        },
                        {
                            type: 'value',name: '',
                            min: -20,max: 20,splitNumber : 10,
                            axisLabel: {formatter: '{value} %'}
                        }
                    ],
                    series: [
                        {name: '本期值',type: 'bar',data: [48, 68, 65]},
                        {name: '同期值',type: 'bar',data: [60, 68, 60]},
                        {name: '环比',type: 'line',yAxisIndex: 1,data: [-5, 10, 15]}
                    ]
                }
            }
        },
        methods: {
            handleClick(tab, event) {
                this.getComplaint();
            },
            getComplaint(){
                let myChart=this.$echarts.init(document.getElementById('myChart'));
                if(this.activeName=="first"){
                    myChart.setOption(this.options);
                }else{
                    myChart.setOption(this.options1);
                }
                return;
                let tabId;
                //查询数据库绘制图表 参数：图标id、图表所属供电单位，根据选中tab判断选显示图表id
                if(this.activeName=="first"){
                    tabId=1;
                }else{
                    tabId=2;
                }
                //查询数据库
                axios.get('url').then((res) =>{
                    this.options=res.data;
                    // 绘制图表
                    myChart.setOption(this.options);
                }).catch(resp => {
                    console.log("查询异常");
                });
            }
        },
        created(){
            this.$nextTick(() => {
                this.getComplaint();
            });
        },

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
    .middleTitle{
        height:60px;
    }
    #myChart{
        flex:1;

    }
</style>