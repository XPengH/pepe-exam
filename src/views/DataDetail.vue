<template>
  <div class="dataDetail">
    <el-container :class="[isMobile?'container':'pcContainer']">
      <div style="width: 100%;">
        <p>
          商品名:&nbsp;{{detail.name}}
        </p>
        <p>
          类型:&nbsp;{{detail.type}}
        </p>
        <p>
          价格:&nbsp;{{detail.price}}(元)
        </p>
        <p>
          数量:&nbsp;{{detail.number}}(件)
        </p>
        <p>
          生产厂商:&nbsp;{{detail.company}}生产厂商:&nbsp;
        </p>
        <p>
          厂商地址:&nbsp;{{detail.address}}
        </p>
      </div>
      <div id="echarts" :class="[isMobile?'echartMobileStyle':'echartStyle']"></div>
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
  props: ['isMobile'],
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
  padding: 30px 0;
}
p{
  padding: 0px 10px;
}
.pcContainer{
  padding: 0 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.container{
  display: flex;
  flex-direction: column;
  padding: 0;
}
.echartStyle {
  height: 400px;
  width: 500px;
  margin-top: 30px;
}
.echartMobileStyle {
  width: 100vw;
  height: 60vh;
  margin-top: 30px;
}
</style>
