<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <router-link :to="{path:'/education/subject/edit'}" class="link-left">
          <el-button type="primary">添加</el-button>
        </router-link>
      </el-form-item>
    </el-form>

    <el-table v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="ID" label="Id" />
      <el-table-column prop="Name" label="学科"/>
      <el-table-column prop="ItemOrder" label="排序"></el-table-column>
      <el-table-column width="220px" label="操作" align="center">
        <template slot-scope="{row}">
          <router-link :to="{path:'/education/subject/edit', query:{id:row.ID}}" class="link-left">
            <el-button size="mini">编辑</el-button>
          </router-link>
          <el-button size="mini" type="danger" disabled class="link-left">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="queryParam.PageIndex" :limit.sync="queryParam.PageSize"
                @pagination="search"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import subjectApi from '@/api/subject'

export default {
  components: { Pagination },
  data () {
    return {
      queryParam: {
        pageIndex: 1,
        pageSize: 10
      },
      listLoading: true,
      tableData: [],
      total: 0
    }
  },
  created () {
    this.search()
  },
  methods: {
    search () {
      this.listLoading = true
      subjectApi.pageList(this.queryParam).then(response => {
        const re = response.data
        this.tableData = re.list
        this.total = re.total
        this.queryParam.PageIndex = re.pageNum
        this.listLoading = false
      })
    },
    submitForm () {
      this.queryParam.PageIndex = 1
      this.search()
    }
  }
}
</script>
