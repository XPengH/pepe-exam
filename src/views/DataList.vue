<template>
  <div class="dataList">
    <el-container v-loading="loading">
      <el-header class="elHeader" :height="headerHeight" style="margin-top: 50px">
        <el-input
          placeholder="请输入搜索内容"
          v-model="input"
          clearable>
        </el-input>
        <el-button  icon="el-icon-search" type="primary" @click="searchChangeTable">搜索</el-button>
      </el-header>
      <el-main>
        <el-table
          ref="table"
          :data="tableData"
          :height="isMobile?400:500"
          @sort-change="sortChange"
          @row-click="rowClick"
          border
          stripe
          style="width: 100%">
          <el-table-column
            v-if="!isMobile"
            type="index"
            :index="indexMethod">
          </el-table-column>
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
            sortable="custom"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="price"
            sortable
            label="单价">
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer :height="footerHeight" >
        <el-pagination
          class="elPagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="pagesize"
          :pager-count="isMobile?5:7"
          :prev-text="isMobile?'上一页':''"
          :next-text="isMobile?'下一页':''"
          :page-size="currentpagesize"
          :layout="isMobile?'prev, pager, next':'total, sizes, prev, pager, next, jumper'"
          :total="total">
        </el-pagination> 
      </el-footer>
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
      commodityList,
      input: '',
      headerHeight: '50px',
      footerHeight: '40px',
      sortOrders: ['ascending', 'descending', null]
    };
  },
  props: ['isMobile'],
  methods: {
    indexMethod(index) {
      return index + 1 + (this.currentPage-1) * this.currentpagesize
    },
    sortAscending(value1, value2) {
      if (value1 > value2) {
        return 1
      } else if (value1 < value2) {
        return -1
      } else {
        return 0
      }
    },
    sortDescending(value1, value2) {
      if (value1 > value2) {
        return -1
      } else if (value1 < value2) {
        return 1
      } else{
        return 0
      }
    },
    sortChange(e) {
      const start = (this.currentPage-1) * this.currentpagesize
      const end = this.currentPage * this.currentpagesize
      if (e.order === 'ascending') {
        if (e.prop === 'number') {
          this.commodityList = this.commodityList.sort((a,b)=>this.sortAscending(a.number, b.number))
          this.tableData = this.commodityList.slice(start, end)
        } else {
          this.commodityList = this.commodityList.sort((a,b)=>this.sortAscending(a.price, b.price))
          this.tableData = this.commodityList.slice(start, end)
        }
      } else {
        if (e.prop === 'number') {
          this.commodityList = this.commodityList.sort((a,b)=>this.sortDescending(a.number, b.number))
          this.tableData = this.commodityList.slice(start, end)
        } else {
          this.commodityList = this.commodityList.sort((a,b)=>this.sortDescending(a.price, b.price))
          this.tableData = this.commodityList.slice(start, end)
        }
      }
    },
    handleSizeChange(val) {
      this.currentpagesize = val
      this.changeTableData()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.changeTableData()
    },
    changeTableData() {
      const start = (this.currentPage-1) * this.currentpagesize
      const end = this.currentPage * this.currentpagesize
      this.tableData = this.commodityList.slice(start, end);
    },
    searchChangeTable() {
      this.init()
      this.tableData = this.commodityList.filter(item=>item.name.indexOf(this.input)!==-1)
      this.total = this.tableData.length
      this.loading = false
      this.$refs.table.clearSort()
    },
    init() {
      this.loading = true
      this.currentpagesize = 10
      this.currentPage = 1
      this.total = 0
    },
    rowClick(rol, col, event) {
      this.$router.push({ path: `/detail/${rol.id}`, query: { detail: JSON.stringify(rol) }})
    }
  },
  mounted() {
    console.log(this.isMobile)
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
.elPagination{
  text-align: center;
}
.elHeader{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
