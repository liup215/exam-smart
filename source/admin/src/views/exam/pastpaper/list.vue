<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item label="题目ID：">
        <el-input v-model="queryParam.id" clearable></el-input>
      </el-form-item>
      <el-form-item label="考试局：" prop="Organisation">
        <el-select v-model="queryParam.Organisation" placeholder="考试局"  @change="organisationChange">
          <el-option :value="1" label="CIE"></el-option>
          <el-option :value="2" label="Edexcel"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" prop="SubjectId" required>
        <el-select v-model="queryParam.SubjectId" placeholder="学科" @change="subjectChange">
          <el-option v-for="item in subjectList" :key="item.ID" :value="item.ID" :label="item.Name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考纲" required>
        <el-select v-model="queryParam.SyllabusId">
          <el-option v-for="item in syllabusList" :key="item.ID" :value="item.ID" :label="item.Name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <router-link :to="{path:'/exam/pastPaper/edit'}" class="link-left">
          <el-button type="primary">添加</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    <el-table v-loading="listLoading" :data="tableData" border fit highlight-current-row style="width: 100%">
      <el-table-column prop="ID" label="Id" width="90px"/>

      <el-table-column prop="SyllabusTypeName" label="考试局"/>
      <el-table-column prop="SubjectName" label="学科"/>
      <el-table-column prop="SyllabusName" label="考纲"></el-table-column>
      <el-table-column prop="Year" label="年份"  />
      <el-table-column prop="Series" label="考试季"/>
      <el-table-column prop="Code" label="试卷代码"/>
      <el-table-column  label="操作" align="center">
        <template slot-scope="{row}">
          <el-button size="mini" @click="$router.push({path:'/exam/pastPaper/edit',query:{id:row.ID}})" >编辑</el-button>
          <el-button size="mini" target='_blank' @click="paperPreview(row.ID)">预览</el-button>
          <el-button size="mini" type="danger" disabled @click="" class="link-left">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="queryParam.PageIndex" :limit.sync="queryParam.PageSize"
                @pagination="search"/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import examPaperApi from '@/api/examPaper'
import syllabusApi from '@/api/syllabus'

export default {
  components: { Pagination },
  data () {
    return {
      queryParam: {
        ID: null,
        Organisation: null,
        SubjectId: null,
        SyllabusId: null,
        PageIndex: 1,
        PageSize: 10
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
      this.queryParam.PageIndex = 1
      this.search()
    },
    search () {
      this.listLoading = true
      examPaperApi.pastPaperList(this.queryParam).then(res => {
        const re = res.data
        this.tableData = re.list
        this.total = re.total
        this.listLoading = false
      })
    },
    organisationChange () {
      this.searchSyllabus()
    },
    subjectChange() {
      this.searchSyllabus()
    },
    searchSyllabus() {
      syllabusApi.list({Type: this.queryParam.Organisation ? this.queryParam.Organisation : 0, SubjectId: this.queryParam.SubjectId ? this.queryParam.SubjectId: 0}).then(res => {
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
