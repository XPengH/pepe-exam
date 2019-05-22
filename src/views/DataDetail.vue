<template>
  <div class="dataDetail">
    <el-container class="container">
      <el-row type="flex" align="middle">
        <el-col :span="4"><h3>商品名</h3></el-col>
        <el-col :span="20">{{detail.name}}</el-col>
      </el-row>
      <el-row type="flex" align="middle">
        <el-col :span="4"><h3>类型</h3></el-col>
        <el-col :span="20">{{detail.type}}</el-col>
      </el-row>
      <el-row type="flex" align="middle">
        <el-col :span="4"><h3>价格</h3></el-col>
        <el-col :span="20">{{detail.price}}</el-col>
      </el-row>
      <el-row type="flex" align="middle">
        <el-col :span="4"><h3>数量</h3></el-col>
        <el-col :span="20">{{detail.number}}</el-col>
      </el-row>
      <el-row type="flex" align="middle">
        <el-col :span="4"><h3>生产厂商</h3></el-col>
        <el-col :span="20">{{detail.company}}</el-col>
      </el-row>
      <el-row type="flex" align="middle">
        <el-col :span="4"><h3>厂商地址</h3></el-col>
        <el-col :span="20">{{detail.address}}</el-col>
      </el-row>
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
h3{
  font-size: 15px;
  margin: 10px 0;
}
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
