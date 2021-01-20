<template>
  <div class="app-container">
    <el-form :model="queryParam" ref="queryForm" :inline="true">
      <el-form-item label="题目ID：">
        <el-input v-model="queryParam.id" clearable></el-input>
      </el-form-item>
      <el-form-item label="题型：">
        <el-select v-model="queryParam.questionType" clearable>
          <el-option v-for="item in questionType" :key="item.key" :value="item.key" :label="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择章节">
        <el-cascader ref="chapterSelector" :options="chapters" :props="chaptereSelectorProps" v-model="queryParam.chapters">
          <template slot-scope="{ node, data }">
            <span>{{data.name}}</span>
            <span v-if="!node.isLeaf"> ({{ data.childChapterList.length }}) </span>
          </template>
        </el-cascader>
        <el-button type="text" @click="levelSubjectDialogVisible = true">切换科目</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">查询</el-button>
        <el-popover placement="bottom" trigger="click">
          <el-button type="warning" size="mini" v-for="item in editUrlEnum" :key="item.key"
                     @click="$router.push({path:item.value})">{{item.name}}
          </el-button>
          <el-button slot="reference" type="primary" class="link-left">添加</el-button>
        </el-popover>
      </el-form-item>
    </el-form>
    <div v-if="tableData.length > 0">
      <question-item v-for="item in tableData" :key="item.id" :question="item"></question-item>
    </div>
    <div v-if="tableData.length <= 0" style="text-align: center">暂无题目数据</div>
    <pagination v-show="total>0" :total="total" :page.sync="queryParam.pageIndex" :limit.sync="queryParam.pageSize"
                @pagination="search"/>
    <el-dialog :visible.sync="questionShow.dialog" style="width: 100%;height: 100%">
      <QuestionShow :qType="questionShow.qType" :question="questionShow.question" :qLoading="questionShow.loading"/>
    </el-dialog>
    <el-dialog title="选择年级和学科" :visible.sync="levelSubjectDialogVisible">
      <el-form :model="syllabusQueryParam" ref="queryForm" :inline="true">
        <el-form-item label="年级：">
          <el-select v-model="syllabusQueryParam.level" placeholder="年级"  @change="levelChange" clearable>
            <el-option v-for="item in levelEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学科：">
          <el-select v-model="syllabusQueryParam.subjectId" clearable @change="subjectChange">
            <el-option v-for="item in subjectFilter" :key="item.id" :value="item.id"
                     :label="item.name+' ( '+item.levelName+' )'"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择教材">
          <el-select placeholder="请选择书籍" v-model="selectedBook" @change="syllabusChange">
            <el-option v-for="item in syllabusList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="levelSubjectDialogVisible=false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import QuestionShow from './components/Show'
import QuestionItem from './components/QuestionItem'
import questionApi from '@/api/question'
import syllabusApi from '@/api/syllabus'
import chapterApi from '@/api/chapter'

export default {
  components: { Pagination, QuestionShow, QuestionItem },
  data () {
    return {
      queryParam: {
        id: null,
        questionType: null,
        syllabusId: null,
        pageIndex: 1,
        pageSize: 10,
        chapters: []
      },
      subjectFilter: null,
      listLoading: true,
      tableData: [],
      total: 0,
      questionShow: {
        qType: 0,
        dialog: false,
        question: null,
        loading: false
      },
      levelSubjectDialogVisible: false,
      syllabusQueryParam: {
        level: null,
        subjectId: null
      },
      syllabusList: [],
      selectedBook: null,
      chapters: [],
      chapterTreeProps: {
        children: 'childChapterList',
        label: 'name'
      },
      chaptereSelectorProps: {
        value: 'id',
        label: 'name',
        multiple: true,
        children: 'childChapterList'
      }
    }
  },
  created () {
    this.initSubject()
    this.search()
  },
  methods: {
    submitForm () {
      this.queryParam.pageIndex = 1
      this.search()
    },
    search () {
      this.listLoading = true
      questionApi.pageList(this.queryParam).then(response => {
        const re = response.data
        this.tableData = re.list
        this.total = re.total
        this.queryParam.PageIndex = re.pageNum
        this.listLoading = false
      })
    },
    levelChange () {
      this.syllabusQueryParam.subjectId = null
      this.subjectFilter = this.subjects.filter(data => data.level === this.syllabusQueryParam.level)

    },
    subjectChange () {
      syllabusApi.list({subjectId: this.syllabusQueryParam.subjectId}).then(res => {
        this.syllabusList = res.data.list
      })
    },
    syllabusChange (syllabusId) {
      chapterApi.chapterTree({syllabusId: syllabusId}).then(res => {
        this.chapters = res.data.list
      })
    },
    chapterChange () {
    },
    addQuestion () {
      this.$router.push('/exam/question/edit/singleChoice')
    },
    showQuestion (row) {
      let _this = this
      this.questionShow.dialog = true
      this.questionShow.loading = true
      questionApi.select(row.id).then(re => {
        _this.questionShow.qType = re.response.questionType
        _this.questionShow.question = re.response
        _this.questionShow.loading = false
      })
    },
    deleteQuestion (row) {
      let _this = this
      questionApi.deleteQuestion(row.id).then(re => {
        if (re.code === 1) {
          _this.search()
          _this.$message.success(re.message)
        } else {
          _this.$message.error(re.message)
        }
      })
    },
    questionTypeFormatter (row, column, cellValue) {
      return this.enumFormat(this.questionType, cellValue)
    },
    subjectFormatter (row, column, cellValue) {
      return this.subjectEnumFormat(cellValue)
    },
    ...mapActions('exam', { initSubject: 'initSubject' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      questionType: state => state.exam.question.typeEnum,
      editUrlEnum: state => state.exam.question.editUrlEnum,
      levelEnum: state => state.user.levelEnum
    }),
    ...mapGetters('exam', ['subjectEnumFormat']),
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>
