<template>
  <div class="app-container">
    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="考试局：" prop="Organisation">
        <el-select v-model="form.syllabusType">
          <el-option :value="1" label="CIE"></el-option>
          <el-option :value="2" label="Edexcel"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学科：" prop="subjectId">
        <el-select v-model="form.subjectId" placeholder="学科">
          <el-option v-for="item in subjectList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考纲" prop="syllabusId">
        <el-select v-model="form.syllabusId" @change="syllabusChange">
          <template v-for="item in syllabusList">
          <el-option v-if="item.type === form.syllabusType && item.subjectId === form.subjectId" :key="item.id" :value="item.id" :label="item.name"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="是否是真题" required>
        <el-switch v-model="form.isPastPaperQuestion" active-text="是" inactive-text="否" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item>
      <el-form-item label="年份" v-if="form.isPastPaperQuestion">
        <el-select v-model="form.yearId" @change="yearChange">
          <el-option v-for="item in yearList" :key="item.id" :value="item.id" :label="item.name">{{item.name}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考试季" v-if="form.isPastPaperQuestion">
        <el-select v-model="form.seriesId" @change="seriesChange">
          <template v-for="item in seriesList">
          <el-option v-if="item.syllabusId === form.syllabusId" :key="item.id" :value="item.id" :label="item.name">{{item.name}}</el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="试卷代码" v-if="form.isPastPaperQuestion">
        <el-select v-model="form.codeId" @change="codeChange">
          <template v-for="item in codeList">
          <el-option v-if="item.syllabusId === form.syllabusId" :key="item.id" :value="item.id" :label="item.name"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="真题列表" v-if="form.isPastPaperQuestion">
        <el-select v-model="form.pastPaperId">
          <el-option v-for="pastPaper in pastPaperList" :key="pastPaper.id" :value="pastPaper.id" :label="pastPaper.name">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题号" v-if="isPastPaperQuestion">
        <el-input-number v-model="form.orderNumber" :min="1" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="题干：" prop="Title" required>
        <Tinymce v-model="form.title"/>
      </el-form-item>
      <el-form-item label="解析：" prop="Analyze" required>
        <tinymce v-model="form.analyze"  @focus="inputClick(form,'analyze')" />
      </el-form-item>
      <el-form-item label="分数：" prop="Score" required>
        <el-input-number v-model="form.score" :min="1" :step="1"/>
      </el-form-item>
      <el-form-item label="难度：" required>
        <el-rate v-model="form.difficult" class="question-item-rate"></el-rate>
      </el-form-item>
      <el-form-item label="正确答案：" prop="Correct" required>
        <tinymce v-model="form.correct"></tinymce>
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
import Tinymce from '@/components/Tinymce'
import examPaperApi from '@/api/examPaper'
import yearApi from '@/api/year'
import seriesApi from '@/api/series'
import codeApi from '@/api/code'


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
        id: null,
        syllabusType: null,
        syllabusId: null,
        questionType: 5,
        subjectId: null,
        isPastPaperQuestion: 1,
        yearId: null,
        seriesId: null,
        orderNumber: 1,
        title: '',
        analyze: '',
        correct: '',
        score: '',
        difficult: 1
      },
      formLoading: false,
      subjectList: [],
      syllabusList: [],
      pastPaperList: [],
      yearList: [],
      seriesList: [],
      codeList: [],
      rules: {
        organisation: [
          { required: true, validator: notZero, message: '请选择考试局', trigger: 'change' }
        ],
        subjectId: [
          { required: true, validator: notZero, message: '请选择学科', trigger: 'change' }
        ],
        syllabusId: [
          { required: true, validator: notZero, message: '请选择考纲', trigger: 'change' }
        ],
        title: [
          { required: true, message: '请输入题干', trigger: 'blur' }
        ],
        analyze: [
          { required: true, message: '请输入解析', trigger: 'blur' }
        ],
        score: [
          { required: true, message: '请输入分数', trigger: 'blur' }
        ],
        correct: [
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
    })
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      questionApi.select(id).then(re => {
        _this.form = re.data
        _this.searchPastPaper()
        _this.formLoading = false
      })
    }
    syllabusApi.getAll().then(res => {
      _this.syllabusList = res.data.list
    })
    yearApi.getAll().then(res => {
      _this.yearList = res.data.list
    })
    seriesApi.getAll().then(res => {
      _this.seriesList = res.data.list
    })
    codeApi.getAll().then(res => {
      _this.codeList = res.data.list
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
    syllabusChange() {
      this.form.seriesId = null
      this.form.codeId = null
      this.form.pastPaperId = null
      this.pastPaperList = []
      this.seriesList = []
      this.codeList = []
    },
    yearChange() {
      this.searchPastPaper()
    },
    seriesChange() {
      this.searchPastPaper()
    },
    codeChange() {
      this.searchPastPaper()
    },
    searchPastPaper() {
      examPaperApi.pastPaperList({syllabusId: this.form.syllabusId, year: this.form.year, series: this.form.series, code: this.form.code}).then(res=> {
        this.pastPaperList = res.data.list
        var flag = false
        for (var i = 0; i < this.pastPaperList.length; i++) {
          if (this.form.pastPaperId === this.pastPaperList[i].ID) {
            flag = true
            break
          }
        }

        if (!flag) {
          this.form.pastPaperId = null
        }
      })
    },
    searchSyllabus() {
      syllabusApi.list({type: this.form.organisation ? this.form.organisation : 0, subjectId: this.form.subjectId ? this.form.subjectId: 0}).then(res => {
        this.syllabusList = res.data.list
      })
    },
    showQuestion () {
      let _this = this
      this.questionShow.dialog = true
      this.questionShow.loading = true
      questionApi.select(this.form.id).then(re => {
        _this.questionShow.qType = re.data.questionType
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
