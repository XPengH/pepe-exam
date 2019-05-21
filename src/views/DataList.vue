<template>
  <div class="dataList">
    <el-container v-loading="loading">
      <el-header>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pagesize"
          :page-size="currentpagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
        <el-input
          placeholder="请输入内容"
          v-model="input"
          @blur="searchChangeTable"
          clearable>
        </el-input>
      </el-header>
      <el-main>
        <el-table
          :data="tableData"
          height="500"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="商品名称"
          >
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型"
          >
          </el-table-column>
          <el-table-column
            prop="number"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="price"
            label="单价">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
import { setTimeout } from 'timers';
import {commodityList} from '../data.js'
export default {
  name: 'DataList',
  data() {
    return {
      pagesize: [10, 20, 30, 40],
      currentpagesize: 10,
      currentPage: 1,
      loading: true,
      total: 0,
      tableData: [],
      input: ''
    };
  },
  methods: {
    handleSizeChange(val) {
      this.currentpagesize = val
      this.changeTableData()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.changeTableData()
      console.log(`当前页: ${val}`)
    },
    changeTableData() {
      const start = (this.currentPage-1) * this.currentpagesize
      const end = this.currentPage * this.currentpagesize
      this.tableData = commodityList.slice(start, end);
      console.log(start, end)
    },
    searchChangeTable() {
      this.init()
      this.tableData = commodityList.filter(item=>item.name.indexOf(this.input)!==-1)
      this.total = this.tableData.length
      this.loading = false
    },
    init() {
      this.loading = true
      this.currentpagesize = 10
      this.currentPage = 1
      this.total = 0
    }
  },
  mounted() {
    setTimeout(()=>{
      this.total = commodityList.length
      this.changeTableData()
      this.loading = false
    }, 1500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
