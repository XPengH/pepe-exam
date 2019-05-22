<template>
  <div class="dataDetail">
    <el-container>
      <div id="echarts" style="width: 600px;height:400px;"></div>
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
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('echarts'));
    // 绘制图表
    myChart.setOption(getBar())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
