<template>
  <div class="app-container">
    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="考试局：" prop="Organisation">
        <el-select v-model="form.Organisation" placeholder="考试局"  @change="organisationChange">
          <el-option :value="1" label="CIE"></el-option>
          <el-option :value="2" label="Edexcel"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" prop="SubjectId" required>
        <el-select v-model="form.SubjectId" placeholder="学科" @change="subjectChange">
          <el-option v-for="item in subjectList" :key="item.ID" :value="item.ID" :label="item.Name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考纲" prop="SyllabusId">
        <el-select v-model="form.SyllabusId" @change="syllabusChange">
          <el-option :value="0" label="---请选择---"></el-option>
          <el-option v-for="item in syllabusList" :key="item.ID" :value="item.ID" :label="item.Name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否是真题" required>
        <el-switch v-model="form.IsPastPaperQuestion" active-text="是" inactive-text="否" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item>
      <el-form-item label="年份" v-if="isPastPaperQuestion">
        <el-select v-model="form.Year" @change="yearChange">
          <el-option :value="0" label="---请选择---"></el-option>
          <el-option v-for="(item, index) in yearList" :key="index" :value="item">{{item}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="月份" v-if="isPastPaperQuestion">
        <el-select v-model="form.Series" @change="seriesChange">
          <el-option value="" label="---请选择---"></el-option>
          <el-option value="January" label="January"></el-option>
          <el-option value="June" label="June"></el-option>
          <el-option value="October" label="October"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="真题列表" v-if="isPastPaperQuestion">
        <el-select v-model="form.PastPaperId">
          <el-option :value="0" label="---请选择---"></el-option>
          <el-option v-for="(pastPaper, index) in pastPaperList" :key="index" :value="pastPaper.ID" :label="pastPaper.Year + '-' + pastPaper.Series + '-' + pastPaper.Code">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题号" v-if="isPastPaperQuestion">
        <el-input-number v-model="form.OrderNumber" :min="1" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="题干：" prop="Title" required>
        <Tinymce v-model="form.Title"/>
      </el-form-item>
      <el-form-item label="解析：" prop="Analyze" required>
        <tinymce v-model="form.Analyze"  @focus="inputClick(form,'analyze')" />
      </el-form-item>
      <el-form-item label="分数：" prop="Score" required>
        <el-input-number v-model="form.Score" :min="1" :step="1"/>
      </el-form-item>
      <el-form-item label="难度：" required>
        <el-rate v-model="form.Difficult" class="question-item-rate"></el-rate>
      </el-form-item>
      <el-form-item label="正确答案：" prop="Correct" required>
        <tinymce v-model="form.Correct"></tinymce>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="success" @click="showQuestion">预览</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="questionShow.dialog" style="width: 100%;height: 100%">
      <QuestionShow :qType="questionShow.qType" :question="questionShow.question" :qLoading="questionShow.loading"/>
    </el-dialog>
  </div>
</template>

<script>
import QuestionShow from '../components/Show'
import { mapGetters, mapState, mapActions } from 'vuex'
import questionApi from '@/api/question'
import syllabusApi from '@/api/syllabus'
import examPaperApi from '@/api/examPaper'
import Tinymce from '@/components/Tinymce'

export default {
  components: {
    QuestionShow, Tinymce
  },
  data () {
    var notZero = (rule, value, callback) => {
      if (!value) {
        callback(new Error('该项未选择'))
      } else {
        callback()
      }
    }
    return {
      form: {
        ID: null,
        Organisation: null,
        QuestionType: 5,
        SubjectId: null,
        IsPastPaperQuestion: 1,
        Year: 0,
        Series: '',
        OrderNumber: 1,
        Title: '',
        Analyze: '',
        Correct: '',
        Score: '',
        Difficult: 1
      },
      formLoading: false,
      subjectList: [],
      syllabusList: [],
      pastPaperList: [],
      yearList: [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000],
      rules: {
        Organisation: [
          { required: true, validator: notZero, message: '请选择考试局', trigger: 'change' }
        ],
        SubjectId: [
          { required: true, validator: notZero, message: '请选择学科', trigger: 'change' }
        ],
        SyllabusId: [
          { required: true, validator: notZero, message: '请选择考纲', trigger: 'change' }
        ],
        Title: [
          { required: true, message: '请输入题干', trigger: 'blur' }
        ],
        Analyze: [
          { required: true, message: '请输入解析', trigger: 'blur' }
        ],
        Score: [
          { required: true, message: '请输入分数', trigger: 'blur' }
        ],
        Correct: [
          { required: true, message: '请选择正确答案', trigger: 'change' }
        ]
      },
      questionShow: {
        qType: 0,
        dialog: false,
        question: null,
        loading: false
      }
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    this.initSubject(function () {
      _this.subjectList = _this.subjects

      if (id && parseInt(id) !== 0) {
        _this.formLoading = true
        questionApi.select(id).then(re => {
          _this.form = re.data
          _this.form.Organisation = re.data.SyllabusType
          _this.searchSyllabus({Type: _this.form.Organisation, SubjectId: re.data.SubjectId})
          _this.formLoading = false
        })
      } else {
        _this.initSyllabus()
      }

    })
    
  },
  methods: {
    initSyllabus() {
      syllabusApi.list({}).then(res => {
        this.syllabusList = res.data.list
      })
    },
    submitForm () {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true
          questionApi.edit(this.form).then(re => {
            if (re.code === 200) {
              _this.$message.success(re.message)
              _this.delVisitedView(_this).then(() => {
                _this.$router.push('/exam/question/list')
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
    resetForm () {
      this.$refs['form'].resetFields()
    },
    organisationChange () {
      this.searchSyllabus()
    },
    subjectChange() {
      this.searchSyllabus()
    },
    syllabusChange() {
      this.searchPastPaper()
    },
    yearChange() {
      this.searchPastPaper()
    },
    seriesChange() {
      this.searchPastPaper()
    },
    searchPastPaper() {
      examPaperApi.pastPaperList({SyllabusId: this.form.SyllabusId, Year: this.form.Year, Series: this.form.Series, Code: this.form.Code}).then(res=> {
        this.pastPaperList = res.data.list
        var flag = false
        for (var i = 0; i < this.pastPaperList.length; i++) {
          if (this.form.PastPaperId === this.pastPaperList[i].ID) {
            flag = true
            break
          }
        }

        if (!flag) {
          this.form.PastPaperId = null
        }
      })
    },
    searchSyllabus() {
      syllabusApi.list({Type: this.form.Organisation ? this.form.Organisation : 0, SubjectId: this.form.SubjectId ? this.form.SubjectId: 0}).then(res => {
        this.syllabusList = res.data.list
      })
    },
    showQuestion () {
      let _this = this
      this.questionShow.dialog = true
      this.questionShow.loading = true
      questionApi.select(this.form.id).then(re => {
        _this.questionShow.qType = re.data.QuestionType
        _this.questionShow.question = re.data
        _this.questionShow.loading = false
      })
    },
    ...mapActions('exam', { initSubject: 'initSubject' }),
    ...mapActions('tagsView', { delVisitedView: 'delVisitedView' })
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      questionTypeEnum: state => state.exam.question.typeEnum,
      levelEnum: state => state.user.levelEnum
    }),
    ...mapState('exam', { subjects: state => state.subjects }),
    isPastPaperQuestion () {
      return this.form.IsPastPaperQuestion === 1
    }
  }
}
</script>
