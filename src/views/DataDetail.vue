<template>
  <div class="dataDetail">
    <el-container class="container">
      
      <el-row>
        <el-col><h3>商品名</h3></el-col>
        <el-col>{{detail.name}}</el-col>
      </el-row>
      
      <el-row><h3>类型</h3>{{detail.type}}</el-row>
      <h3>价格</h3>
      <el-row>{{detail.price}}</el-row>
      <h3>数量</h3>
      <el-row>{{detail.number}}</el-row>
      <h3>生产厂商</h3>
      <el-row>{{detail.company}}</el-row>
      <h3>厂商地址</h3>
      <el-row>{{detail.address}}</el-row>
      <div id="echarts" class="echartStyle"></div>
    </el-container>
  </div>
</template>

<script>
import getBar from '../bar'
import echarts from 'echarts/lib/echarts';
export default {
  name: 'DataDetail',
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    if (this.$route.params.cid!==undefined) {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('echarts'));
      // 绘制图表
      myChart.setOption(getBar(this.$route.params.cid))
    }
    if (this.$route.query.detail) {
      this.detail = JSON.parse(this.$route.query.detail)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dataDetail {
  padding: 30px;
}
.container{
  display: flex;
  flex-direction: column;
}
.echartStyle {
  height: 400px;
  width: 500px;
}
@media only screen and (max-width: 600px) {
  .echartStyle {
    width: 100vw;
    height: 100vh;
  }
}
</style>
