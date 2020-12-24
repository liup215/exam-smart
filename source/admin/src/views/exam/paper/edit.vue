<template>
  <div class="app-container">
    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="考试局：" prop="SyllabusType" required>
        <el-select v-model="form.SyllabusType" placeholder="考试局"  @change="organisationChange">
          <el-option :value="1" label="CIE"></el-option>
          <el-option :value="2" label="Edexcel"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" prop="SubjectId" required>
        <el-select v-model="form.SubjectId" placeholder="学科" @change="subjectChange">
          <el-option v-for="item in subjectList" :key="item.ID" :value="item.ID" :label="item.Name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考纲" required>
        <el-select v-model="form.SyllabusId">
          <el-option v-for="item in syllabusList" :key="item.ID" :value="item.ID" :label="item.Name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="试卷名称："  prop="Name" required>
        <el-input v-model="form.Name"/>
      </el-form-item>
      <el-form-item :key="index" :label="'标题'+(index+1)+':'" required v-for="(titleItem,index) in form.TitleItems">
        <el-input v-model="titleItem.Name" style="width: 80%"/>
        <el-button type="text" class="link-left" style="margin-left: 20px" size="mini" @click="addQuestion(titleItem)">
          添加题目
        </el-button>
        <el-button type="text" class="link-left" size="mini" @click="form.TitleItems.splice(index,1)">删除</el-button>
        <el-card class="exampaper-item-box" v-if="titleItem.QuestionItems.length!==0">
          <el-form-item :key="questionIndex" :label="'题目'+(questionIndex+1)+'：'"
                        v-for="(questionItem,questionIndex) in titleItem.QuestionItems" style="margin-bottom: 15px">
            <el-row>
              <el-col :span="23">
                <QuestionShow :qType="questionItem.Question.QuestionType" :question="questionItem.Question"/>
              </el-col>
              <el-col :span="1">
                <el-button type="text" size="mini" @click="titleItem.QuestionItems.splice(questionIndex,1)">删除
                </el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-card>
      </el-form-item>
      <el-form-item label="建议时长：" prop="SuggestTime" required>
        <el-input v-model="form.SuggestTime" placeholder="分钟"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="success" @click="addTitle">添加标题</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="questionPage.showDialog"  width="70%">
      <el-form :model="questionPage.queryParam" ref="queryForm" :inline="true">
        <el-form-item label="ID：">
          <el-input v-model="questionPage.queryParam.id"  clearable></el-input>
        </el-form-item>
        <el-form-item label="题型：">
          <el-select v-model="questionPage.queryParam.questionType" clearable>
            <el-option v-for="item in questionTypeEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryForm">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="questionPage.listLoading" :data="questionPage.tableData"
                @selection-change="handleSelectionChange" border fit highlight-current-row style="width: 100%">
        <el-table-column type="selection" width="35"></el-table-column>
        <el-table-column prop="ID" label="Id" width="60px"/>
        <el-table-column prop="QuestionType" label="题型" :formatter="questionTypeFormatter" width="70px"/>
        <el-table-column prop="Title" label="题干" show-overflow-tooltip/>
      </el-table>
      <pagination v-show="questionPage.total>0" :total="questionPage.total"
                  :page.sync="questionPage.queryParam.pageIndex" :limit.sync="questionPage.queryParam.pageSize"
                  @pagination="search"/>
      <span slot="footer" class="dialog-footer">
          <el-button @click="questionPage.showDialog = false">取 消</el-button>
          <el-button type="primary" @click="confirmQuestionSelect">确定</el-button>
     </span>
    </el-dialog>
  </div>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import QuestionShow from '../question/components/Show'
import examPaperApi from '@/api/examPaper'
import questionApi from '@/api/question'
import syllabusApi from '@/api/syllabus'

export default {
  components: { Pagination, QuestionShow },
  data () {
    return {
      form: {
        ID: null,
        SubjectId: null,
        SyllabusId: null,
        Name: '',
        SuggestTime: null,
        TitleItems: []
      },
      subjectList: [],
      syllabusList: [],
      formLoading: false,
      rules: {
        level: [
          { required: true, message: '请选择年级', trigger: 'change' }
        ],
        subjectId: [
          { required: true, message: '请选择学科', trigger: 'change' }
        ],
        paperType: [
          { required: true, message: '请选择试卷类型', trigger: 'change' }
        ],
        Name: [
          { required: true, message: '请输入试卷名称', trigger: 'blur' }
        ],
        SuggestTime: [
          { required: true, message: '请输入建议时长', trigger: 'blur' }
        ],
        SyllabusType: [
          { required: true, message: '请选择考试局', trigger: 'blur' }
        ]
      },
      questionPage: {
        multipleSelection: [],
        showDialog: false,
        queryParam: {
          ID: null,
          QuestionType: null,
          SubjectId: 1,
          PageIndex: 1,
          PageSize: 5
        },
        listLoading: true,
        tableData: [],
        total: 0
      },
      currentTitleItem: null
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    this.initSubject(function () {
      _this.subjectList = _this.subjects
    })
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      examPaperApi.select(parseInt(id)).then(re => {
        _this.form = re.data
        if (!_this.form.TitleItems) {
          _this.form.TitleItems = []
        }
        _this.searchSyllabus({Type: _this.form.SyllabusType, SubjectId: re.data.SubjectId})
        _this.formLoading = false
      })
    }
  },
  methods: {
    organisationChange () {
      this.searchSyllabus()
    },
    subjectChange() {
      this.searchSyllabus()
    },
    searchSyllabus() {
      syllabusApi.list({Type: this.form.SyllabusType ? this.form.SyllabusType : 0, SubjectId: this.form.SubjectId ? this.form.SubjectId: 0}).then(res => {
        this.syllabusList = res.data.list

        var syllabusExist = false
        for (var i = 0; i<this.syllabusList.length; i++) {
          if (this.syllabusList[i].ID === this.form.SyllabusId) {
            syllabusExist = true
            break
          }
        }

        if (!syllabusExist) {
          this.form.SyllabusId = null
        }
      })
    },
    submitForm () {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true
          this.form.SuggestTime = parseInt(this.form.SuggestTime)
          examPaperApi.edit(this.form).then(re => {
            if (re.code === 200) {
              _this.form = re.data
              _this.$message.success(re.message)
              _this.delVisitedView(_this).then(() => {
                _this.$router.push('/exam/paper/list')
              })
            } else {
              _this.$message.error(re.message)
              this.formLoading = false
            }
          }).catch(() => {
            this.formLoading = false
          })
        } else {
          return false
        }
      })
    },
    addTitle () {
      this.form.TitleItems.push({
        Name: '',
        QuestionItems: []
      })

    },
    addQuestion (titleItem) {
      this.currentTitleItem = titleItem
      this.questionPage.showDialog = true
      this.search()
    },
    removeTitleItem (titleItem) {
      this.form.TitleItems.remove(titleItem)
    },
    removeQuestion (titleItem, questionItem) {
      titleItem.questionItems.remove(questionItem)
    },
    queryForm () {
      this.questionPage.queryParam.pageIndex = 1
      this.search()
    },
    confirmQuestionSelect () {
      let _this = this
      this.questionPage.multipleSelection.forEach(q => {
        questionApi.select(q.ID).then(re => {
          _this.currentTitleItem.QuestionItems.push({Question: re.data})
        })
      })
      this.questionPage.showDialog = false
    },
    levelChange () {
      this.form.subjectId = null
      this.subjectFilter = this.subjects.filter(data => data.level === this.form.level)
    },
    search () {
      this.questionPage.queryParam.SubjectId = this.form.SubjectId
      this.questionPage.listLoading = true
      questionApi.pageList(this.questionPage.queryParam).then(re => {
        const data = re.data
        this.questionPage.tableData = data.list
        this.questionPage.total = data.total
        this.questionPage.queryParam.pageIndex = re.PageIndex
        this.questionPage.listLoading = false
      })
    },
    handleSelectionChange (val) {
      this.questionPage.multipleSelection = val
    },
    questionTypeFormatter (row, column, cellValue) {
      return this.enumFormat(this.questionTypeEnum, cellValue)
    },
    subjectFormatter (row, column, cellValue) {
      return this.subjectEnumFormat(cellValue)
    },
    resetForm () {
      this.$refs['form'].resetFields()
    },
    ...mapActions('exam', { initSubject: 'initSubject' }),
    ...mapActions('tagsView', { delVisitedView: 'delVisitedView' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      questionTypeEnum: state => state.exam.question.typeEnum,
      paperTypeEnum: state => state.exam.examPaper.paperTypeEnum,
      levelEnum: state => state.user.levelEnum
    }),
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>

<style lang="scss">
  .exampaper-item-box {
    .q-title {
      margin: 0px 5px 0px 5px;
    }
    .q-item-content {
    }
  }
</style>
