<template>
  <div class="app-container">
    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="考试局：" prop="Organisation">
        <el-select v-model="form.organisation" @change="organisationChange">
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
        <el-select v-model="form.syllabusId" @change="syllabusChange">
          <el-option :value="0" label="---请选择---"></el-option>
          <el-option v-for="item in syllabusList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否是真题" required>
        <el-switch v-model="form.isPastPaperQuestion" active-text="是" inactive-text="否" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item>
      <el-form-item label="年份" v-if="isPastPaperQuestion">
        <el-select v-model="form.year" @change="yearChange">
          <el-option :value="0" label="---请选择---"></el-option>
          <el-option v-for="(item, index) in yearList" :key="index" :value="item">{{item}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="月份" v-if="isPastPaperQuestion">
        <el-select v-model="form.series" @change="seriesChange">
          <el-option value="" label="---请选择---"></el-option>
          <el-option value="January" label="January"></el-option>
          <el-option value="June" label="June"></el-option>
          <el-option value="October" label="October"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="真题列表" v-if="isPastPaperQuestion">
        <el-select v-model="form.pastPaperId">
          <el-option :value="0" label="---请选择---"></el-option>
          <el-option v-for="(pastPaper, index) in pastPaperList" :key="index" :value="pastPaper.id" :label="pastPaper.year + '-' + pastPaper.series + '-' + pastPaper.code">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题号" v-if="isPastPaperQuestion">
        <el-input-number v-model="form.orderNumber" :min="1" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="题干：" prop="Title" required>
        <Tinymce v-model="form.title"/>
      </el-form-item>
      <el-form-item label="选项：" required>
        <el-form-item :label="item.prefix" :key="item.prefix"  v-for="(item,index) in form.items"  label-width="50px" class="question-item-label">
          <el-input v-model="item.prefix"  style="width:50px;" />
          <el-input v-model="item.content" class="question-item-content-input"/>
           <el-button type="danger" size="mini" class="question-item-remove" icon="el-icon-delete" @click="questionItemRemove(index)"></el-button>
        </el-form-item>
      </el-form-item>
      <el-form-item label="解析：" prop="Analyze" required>
        <tinymce v-model="form.analyze"  @focus="inputClick(form,'analyze')" />
      </el-form-item>
      <el-form-item label="分数：" prop="Score" required>
        <el-input-number v-model="form.ccore" :min="1" :step="1"/>
      </el-form-item>
      <el-form-item label="难度：" required>
        <el-rate v-model="form.difficult" class="question-item-rate"></el-rate>
      </el-form-item>
      <el-form-item label="正确答案：" prop="Correct" required>
        <el-radio-group v-model="form.correct">
          <el-radio  v-for="item in form.items"  :key="item.prefix"  :label="item.prefix">{{item.prefix}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button type="success" @click="questionItemAdd">添加选项</el-button>
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
        id: 0,
        organisation: null,
        questionType: 1,
        subjectId: null,
        isPastPaperQuestion: 1,
        pastPaperId: 0,
        year: 0,
        series: '',
        orderNumber: 1,
        title: '',
        items: [
          { prefix: 'A', content: '' },
          { prefix: 'B', content: '' },
          { prefix: 'C', content: '' },
          { prefix: 'D', content: '' }
        ],
        analyze: '',
        correct: '',
        score: '',
        difficult: 1,
        syllabusId: 0
      },
      formLoading: false,
      subjectList: [],
      syllabusList: [],
      pastPaperList: [],
      yearList: [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000],
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

      if (id && parseInt(id) !== 0) {
        _this.formLoading = true
        questionApi.select(id).then(re => {
          _this.form = re.data
          _this.form.organisation = re.data.syllabusType
          _this.searchSyllabus({type: _this.form.organisation, subjectId: re.data.subjectId})
          _this.searchPastPaper()
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
    questionItemRemove (index) {
      this.form.items.splice(index, 1)
    },
    questionItemAdd () {
      let items = this.form.items
      let last = items[items.length - 1]
      let newLastPrefix = String.fromCharCode(last.prefix.charCodeAt() + 1)
      items.push({ id: null, prefix: newLastPrefix, content: '' })
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
      this.form.syllabusId = null
    },
    subjectChange() {
      this.searchSyllabus()
      this.form.syllabusId = null
    },
    searchSyllabus() {
      syllabusApi.list({type: this.form.organisation ? this.form.organisation : 0, subjectId: this.form.subjectId ? this.form.subjectId: 0}).then(res => {
        this.syllabusList = res.data.list
      })
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
      examPaperApi.pastPaperList({syllabusId: this.form.syllabusId, year: this.form.year, series: this.form.series, code: this.form.code}).then(res=> {
        this.pastPaperList = res.data.list
        var flag = false
        for (var i = 0; i < this.pastPaperList.length; i++) {
          if (this.form.pastPaperId === this.pastPaperList[i].id) {
            flag = true
            break
          }
        }

        if (!flag) {
          this.form.pastPaperId = null
        }
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
