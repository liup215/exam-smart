<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item label="题目ID：">
        <el-input v-model="queryParam.id" clearable></el-input>
      </el-form-item>
      <el-form-item label="考试局：" prop="organisation">
        <el-select v-model="queryParam.organisation" placeholder="考试局"  @change="organisationChange">
          <el-option :value="1" label="CIE"></el-option>
          <el-option :value="2" label="Edexcel"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" prop="subjectId" required>
        <el-select v-model="queryParam.subjectId" placeholder="学科" @change="subjectChange">
          <el-option v-for="item in subjectList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考纲" required>
        <el-select v-model="queryParam.syllabusId">
          <el-option v-for="item in syllabusList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <router-link :to="{path:'/exam/paper/edit'}" class="link-left">
          <el-button type="primary">添加</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="id" label="Id" width="90px"/>

      <el-table-column prop="syllabusTypeName" label="考试局" width="120px" />
      <el-table-column prop="subjectName" label="学科" width="120px" />
      <el-table-column prop="syllabusName" label="考纲"></el-table-column>
      <el-table-column prop="name" label="名称"  />
      <el-table-column prop="createdAtFormatted" label="创建时间" width="160px"/>
      <el-table-column  label="操作" align="center"  width="160px">
        <template slot-scope="{row}">
          <el-button size="mini" @click="$router.push({path:'/exam/paper/edit',query:{id:row.id}})" >编辑</el-button>
          <el-button size="mini" target='_blank' @click="paperPreview(row.id)">预览</el-button>
          <el-button size="mini" target='_blank' @click="paperDownload(row.id)">下载</el-button>
          <el-button size="mini" type="danger" disabled @click="deletePaper(row.id)" class="link-left">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                @pagination="search"/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import examPaperApi from '@/api/examPaper'
import syllabusApi from '@/api/syllabus'
import baseApi from '@/config/baseApi'
import { getToken } from '@/utils/auth'

export default {
  components: { Pagination },
  data () {
    return {
      queryParam: {
        id: null,
        organisation: null,
        subjectId: null,
        syllabusId: null,
        pageIndex: 1,
        pageSize: 10
      },
      syllabusList: [],
      subjectList: [],
      listLoading: true,
      tableData: [],
      total: 0
    }
  },
  created () {
    let _this = this
    this.initSubject(function () {
      _this.subjectList = _this.subjects
    })
    this.search()
  },
  methods: {
    submitForm () {
      this.queryParam.pageIndex = 1
      this.search()
    },
    search () {
      this.listLoading = true
      examPaperApi.pageList(this.queryParam).then(res => {
        const re = res.data
        this.tableData = re.list
        this.total = re.total
        this.listLoading = false
      })
    },
    deletePaper (row) {
      let _this = this
      examPaperApi.deletePaper(row.id).then(re => {
        if (re.code === 1) {
          _this.search()
          _this.$message.success(re.message)
        } else {
          _this.$message.error(re.message)
        }
      })
    },
    organisationChange () {
      this.searchSyllabus()
    },
    subjectChange() {
      this.searchSyllabus()
    },
    searchSyllabus() {
      syllabusApi.list({type: this.queryParam.organisation ? this.queryParam.organisation : 0, subjectId: this.queryParam.subjectId ? this.queryParam.subjectId: 0}).then(res => {
        this.syllabusList = res.data.list
      })
    },
    paperPreview (id) {
      let routeData = this.$router.resolve({
        name: 'ExamPaperPreview',
        query: { id: id }
      })
      window.open(routeData.href, '_blank')
    },
    paperDownload(id) {
      // examPaperApi.download(id)
      window.open(baseApi.BASE_API + '/exam/paper/download?id=' + id + '&token=' + getToken())
    },
    subjectFormatter  (row, column, cellValue) {
      return this.subjectEnumFormat(cellValue)
    },
    ...mapActions('exam', { initSubject: 'initSubject' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      levelEnum: state => state.user.levelEnum
    }),
    ...mapGetters('exam', ['subjectEnumFormat']),
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>
