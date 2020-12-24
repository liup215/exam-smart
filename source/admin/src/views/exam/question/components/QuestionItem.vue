<template>
  <el-card class="question-boder" shadow="always">
    <div slot="header">
      <span style="font-family: Arial; font-weight: bold; font-size: 1.5rem">{{question.ID}}</span>
      <div style="float: right;" >
        <el-button style="padding: 8px 5px" type="primary" @click="editQuestion(question)">编辑</el-button>
        <el-button style="padding: 8px 5px" type="primary">加入试卷</el-button>
      </div>
    </div>

    <div class="q-title" v-html="question.Title"/>
    
    <question-answer-show :question="question" :qType="question.QuestionType"></question-answer-show>
    
  </el-card>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import QuestionAnswerShow from './QuestionAnswerShow'

export default {
  components: { QuestionAnswerShow },
  props: {
    question: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  methods: {
    editQuestion (q) {
      let url = this.enumFormat(this.editUrlEnum, q.QuestionType)
      this.$router.push({ path: url, query: { id: q.ID } })
    }
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

<style>
  .question-boder {
    margin: 10px;
  }

  p {
    margin: 0px;
  }
</style>