<template>
  <div class="dataDetail">
    <el-button size="small" type="primary" style="margin: 0 0 20px 10px" @click="backPage">返回上一页</el-button>
    <el-container :class="[isMobile?'container':'pcContainer']">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="table-expand">
              <el-form-item label="商品名称：">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="生产厂商：">
                <span>{{ props.row.company }}</span>
              </el-form-item>
              <el-form-item label="商品 ID：">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="商品分类：">
                <span>{{ props.row.type }}</span>
              </el-form-item>
              <el-form-item label="厂商地址：">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品价格：">
                <span>{{ props.row.price }}元</span>
              </el-form-item>
              <el-form-item label="商品数量：">
                <span>{{ props.row.number }}件</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="类型"
          prop="type">
        </el-table-column>
        <el-table-column
          label="价格"
          prop="price">
        </el-table-column>
        <el-table-column
          label="数量"
          prop="number">
        </el-table-column>
      </el-table>
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
      detail: {},
      tableData: []
    };
  },
  props: ['isMobile'],
  methods: {
    backPage() {
      this.$router.go(-1)
    }
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
      this.tableData = [this.detail]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-expand {
  font-size: 0;
}
.table-expand label {
  width: 90px;
  color: #99a9bf;
}
.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
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
