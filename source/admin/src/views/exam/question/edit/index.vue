<template>
  <div class="app-container">
    <el-form ref="questionForm" v-model="question" label-position="left" label-width="80px">
      <el-form-item label="考纲" style="margin: 10px" prop="syllabus" :rules="[{required: true, message: '请选择考纲', trigger: 'blur'}]">
        <el-select v-model="question.syllabusId" clearable @change="handleSyllabusChange">
          <el-option v-for="item in syllabusList" :key="item.key" :value="item.id" :label="item.name"></el-option>
        </el-select>

        <el-button type="text" @click="levelSubjectDialogVisible=true">选择学科</el-button>
      </el-form-item>
      <question-context v-model="question.questionContext" :chapters="chapters"></question-context>
  
      <!-- 子问题(Part) -->
      <el-form-item label="子问题">
        <el-form-item v-for="(item, index) in question.parts" :key="index" :label="partSecquence[index]">
          <el-row :gutter="2">
            <el-col :span="20">
              <question-context v-model="question.parts[index].questionContext" :chapters="chapters"></question-context>
              <!-- 子问题(Subpart) -->
              <el-form-item label="子问题">
                <el-form-item v-for="(subpart, subIndex) in question.parts[index].subparts" :key="subIndex" :label="subpartSecquence[subIndex]">
                  <el-row :gutter="2">
                    <el-col :span="20">
                      <question-context v-model="question.parts[index].subparts[subIndex].questionContext" :chapters="chapters"></question-context>
                    </el-col>
                    <el-col :span="2">
                      <el-button type="danger" @click="question.parts[index].subparts.splice(subIndex, 1)">删除子问题-{{partSecquence[index]}}-{{subpartSecquence[subIndex]}}</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-button @click="addSubpart(question.parts[index])" type="danger">添加subpart</el-button>
                </el-form-item>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-button @click="question.parts.splice(index, 1)">删除子问题{{partSecquence[index]}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button @click="addPart" type="danger">添加part</el-button>
        </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>

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
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="levelSubjectDialogVisible=false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import QuestionContext from "../components/QuestionContext"
import syllabusApi from '@/api/syllabus'
import chapterApi from '@/api/chapter'
import questionApi from "@/api/question"

export default {
  components: {
    QuestionContext
  },
  data () {
    return {
      question: {
        questionContext: {
          score: 1,
          questionType: 1,
          context: "",
          default: 1,
          correct: "",
          analyze: "",
          chapters: [],
          singleChoice: {
            choices: ["", "", "", ""]
          },
          multiChoice: {
            choices: ["", "", "", ""],
            correct: []
          },
          trueFalse: {
            correct: 1
          },
          gapFilling: {
            correct: []
          },
          shortAnswer: {
            correct: ""
          }
        },
        syllabusId: null,
        parts: []
      },
      syllabusList: null,
      syllabusQueryParam: {
        level: null,
        subjectId: null
      },
      subjectFilter: null,
      levelSubjectDialogVisible: false,
      partSecquence: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
      subpartSecquence: ["i", "ii", "iii", "iv", "v", "vi", "vii", "xiii", "ix", "x"],
      chapters: []
    }
  },
  created () {
    this.initSubject()
  },
  methods: {
    levelChange () {
      this.syllabusQueryParam.subjectId = null
      this.subjectFilter = this.subjects.filter(data => data.level === this.syllabusQueryParam.level)
    },
    subjectChange () {
      syllabusApi.list({subjectId: this.syllabusQueryParam.subjectId}).then(res => {
        this.syllabusList = res.data.list
        this.question.syllabusId = null
      })
    },
    submit () {
      this.$refs['questionForm'].validate((valid) => {
        if (valid) {
          questionApi.add(this.question).then(()=>{
          })
        } else {
          this.$message('数据校验失败')
          return false
        }
      })
      
    },
    subjectFormatter (row, column, cellValue) {
      return this.subjectEnumFormat(cellValue)
    },
    addPart () {
      var context = {
        score: 1,
        questionType: 1,
        context: "",
        default: 1,
        correct: "",
        analyze: "",
        chapters: [],
        singleChoice: {
          choices: ["", "", "", ""],
          correct: []
        },
        multiChoice: {
          choices: ["", "", "", ""],
          correct: []
        },
        trueFalse: {
          correct: 1
        },
        gapFilling: {
          correct: []
        },
        shortAnswer: {
          correct: ""
        }
      }
      this.question.parts.push({
        questionContext: context,
        subparts: []
      })
    },
    addSubpart (item) {
      var context = {
        score: 1,
        questionType: 1,
        context: "",
        default: 1,
        analyze: "",
        chapters: [],
        singleChoice: {
          choices: ["", "", "", ""]
        },
        multiChoice: {
          choices: ["", "", "", ""]
        },
        trueFalse: {
          correct: 1
        },
        gapFilling: {
          correct: []
        },
        shortAnswer: {
          correct: ""
        }
      }
      item.subparts.push({
        questionContext: context
      })
    },
    handleSyllabusChange () {
      chapterApi.chapterTree({syllabusId: this.question.syllabusId}).then(res => {
        this.chapters = res.data.list
      })
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