<template>
  <div class="app-container">
    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="考试局：" prop="syllabusType">
        <el-select v-model="form.syllabusType" placeholder="考试局"  @change="organisationChange">
          <el-option :value="1" label="CIE"></el-option>
          <el-option :value="2" label="Edexcel"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" prop="subjectId">
        <el-select v-model="form.subjectId" placeholder="学科" @change="subjectChange">
          <el-option v-for="item in subjectList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考纲" prop="syllabusId">
        <el-select v-model="form.syllabusId">
          <el-option v-for="item in syllabusList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年份" prop="year">
        <el-select v-model="form.year">
          <el-option v-for="(item, index) in yearList" :key="index" :value="item">{{item}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="月份" prop="series">
        <el-select v-model="form.series">
          <el-option value="January">January</el-option>
          <el-option value="June">June</el-option>
          <el-option value="October">October</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="试卷代码"  prop="Code">
        <el-input v-model="form.code"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { mapGetters, mapState, mapActions } from 'vuex'
import examPaperApi from '@/api/examPaper'
import questionApi from '@/api/question'
import syllabusApi from '@/api/syllabus'

export default {
  data () {
    return {
      form: {
        id: null,
        subjectId: null,
        syllabusId: null,
        name: '',
        suggestTime: null,
        titleItems: []
      },
      subjectList: [],
      syllabusList: [],
      formLoading: false,
      yearList: [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000],
      rules: {
        syllabusType: [
          { required: true, message: '请选择考试局', trigger: 'change' }
        ],
        subjectId: [
          { required: true, message: '请选择学科', trigger: 'change' }
        ],
        syllabusId: [
          { required: true, message: '请选择考纲', trigger: 'change' }
        ],
        year: [
          { required: true, message: '请选择试卷年份', trigger: 'blur' }
        ],
        series: [
          { required: true, message: '请选择考试季', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入试卷代码', trigger: 'blur' }
        ]
      },
      questionPage: {
        multipleSelection: [],
        showDialog: false,
        queryParam: {
          id: null,
          questionType: null,
          subjectId: 1,
          pageIndex: 1,
          pageSize: 5
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
      examPaperApi.selectPastPaper(parseInt(id)).then(re => {
        _this.form = re.data
        if (!_this.form.titleItems) {
          _this.form.titleItems = []
        }
        _this.searchSyllabus({type: _this.form.syllabusType, subjectId: re.data.subjectId})
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
      syllabusApi.list({type: this.form.syllabusType ? this.form.syllabusType : 0, subjectId: this.form.subjectId ? this.form.subjectId: 0}).then(res => {
        this.syllabusList = res.data.list

        var syllabusExist = false
        for (var i = 0; i<this.syllabusList.length; i++) {
          if (this.syllabusList[i].id === this.form.syllabusId) {
            syllabusExist = true
            break
          }
        }

        if (!syllabusExist) {
          this.form.syllabusId = null
        }
      })
    },
    submitForm () {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true
          this.form.suggestTime = parseInt(this.form.suggestTime)
          examPaperApi.editPastPaper(this.form).then(re => {
            if (re.code === 200) {
              _this.form = re.data
              _this.$message.success(re.message)
              _this.delVisitedView(_this).then(() => {
                _this.$router.push('/exam/pastPaper/list')
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
      this.form.titleItems.push({
        name: '',
        questionItems: []
      })

    },
    addQuestion (titleItem) {
      this.currentTitleItem = titleItem
      this.questionPage.showDialog = true
      this.search()
    },
    removeTitleItem (titleItem) {
      this.form.titleItems.remove(titleItem)
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
      this.questionPage.queryParam.subjectId = this.form.subjectId
      this.questionPage.listLoading = true
      questionApi.pageList(this.questionPage.queryParam).then(re => {
        const data = re.data
        this.questionPage.tableData = data.list
        this.questionPage.total = data.total
        this.questionPage.queryParam.pageIndex = re.pageIndex
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
