<template>
  <div v-loading="qLoading" style="line-height:1.8">
    <div v-if="qType==1||qType==2||qType==3||qType==4||qType==5">
      <div v-if="qType==1" v-loading="qLoading">
        <div class="q-content">
          <span :key="item.ID" v-for="item in question.Items" class="q-item-contain">
            <span class="q-item-prefix">{{item.Prefix}}</span>
            <span v-html="item.Content" class="q-item-content"></span>
            <br/>
          </span>
        </div>
      </div>
      <div v-else-if="qType==2" v-loading="qLoading">
        <div class="q-title" v-html="question.Title"/>
        <div class="q-content">
          <span :key="item.ID" v-for="item in question.Items" class="q-item-contain">
            <span class="q-item-prefix">{{item.Prefix}}</span>
            <span v-html="item.Content" class="q-item-content"></span>
          </span>
        </div>
      </div>
      <div v-else-if="qType==3" v-loading="qLoading">
        <div class="q-title" v-html="question.Title" style="display: inline;margin-right: 10px"/>
        <span>（</span>
        <span :key="item.ID" v-for="item in question.Items">
          <span v-html="item.Content" class="q-item-content"></span>
        </span>
        <span>）</span>
      </div>
      <div v-else-if="qType==4" v-loading="qLoading">
        <div class="q-title" v-html="question.Title"/>
      </div>
      <div v-else-if="qType==5" v-loading="qLoading">
      </div>
      <div v-else>
      </div>

      <el-tabs value="source">
        <el-tab-pane label="题目来源" name="source">
          <div class="question-answer-show-item">
            <span class="question-show-item">学科：</span>
            <span>{{question.SubjectName}}</span>
          </div>
          <div class="question-answer-show-item">
            <span class="question-show-item">考纲：</span>
            <span>({{question.SyllabusTypeName}}) {{question.SyllabusName}}</span>
          </div>
          <div class="question-answer-show-item">
            <span class="question-show-item">真题信息：</span>
            <span v-if="question.IsPastPaperQuestion === 1">{{question.Year}}-{{question.Series}}-{{question.Code}}-{{question.OrderNumber}}</span>
            <span v-else>原创试题</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="基本信息" name="info">
          <div class="question-answer-show-item">
            <span class="question-show-item">题型：</span>
            <span>{{question.QuestionTypeName}}</span>
          </div>
          <div class="question-answer-show-item">
            <span class="question-show-item">分数：</span>
            <span>{{question.Score}}</span>
          </div>
          <div class="question-answer-show-item">
            <span class="question-show-item">难度：</span>
            <span>{{question.Difficult}}</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="章节管理" name="chapters">
          <el-tag v-for="(chapter, index) in question.Chapters" :key="chapter.ID" closable @close="removeChapter(chapter.ID, index)">{{chapter.ChapterName}}</el-tag>
          <br/>
          <el-cascader :options="chapters" :props="props" v-model="addChapterValue" @change="addChapter"></el-cascader>
        </el-tab-pane>
        <el-tab-pane label="题目解析" name="analyze">
          <div class="question-answer-show-item">
            <div style="margin-left: 2.5rem"><span v-html="question.Analyze" class="q-item-span-content"/></div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="正确答案" name="correct">
          <div class="question-answer-show-item">
            <div style="margin-left: 2.5rem">
              <span v-if="qType==1||qType==2 ||qType==5" v-html="question.Correct" class="q-item-span-content"/>
              <span v-if="qType==3" v-html="trueFalseFormatter(question)" class="q-item-span-content"/>
              <span v-if="qType==4">{{question.correctArray}}</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'
import chapterApi from '@/api/chapter'
import questionToChapterApi from '@/api/questionToChapter'
export default {
  name: 'QuestionShow',
  props: {
    question: {
      type: Object,
      default: function () {
        return {}
      }
    },
    answer: {
      type: Object,
      default: function () {
        return { id: null, content: '', contentArray: [], doRight: false }
      }
    },
    qLoading: {
      type: Boolean,
      default: false
    },
    qType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      props: {
        label: 'Name',
        value: 'ID',
        children: 'Children',
        leaf: 'IsLeaf',
        expandTrigger: 'hover'
      },
      chapters: [],
      addChapterValue: []
    }
  },
  created() {
    chapterApi.chapterTree({SyllabusId: this.question.SyllabusId}).then(res => {
      this.chapters = res.data.list
    })
  },
  methods: {
    trueFalseFormatter (question) {
      return question.Items.filter(d => d.Prefix === question.Correct)[0].Content
    },
    doRightTagFormatter (status) {
      return this.enumFormat(this.doRightTag, status)
    },
    doRightTextFormatter (status) {
      return this.enumFormat(this.doRightEnum, status)
    },
    addChapter(value) {
      questionToChapterApi.add({QuestionId: this.question.ID, ChapterId: value[value.length - 1]}).then(res=>{
        this.addChapterValue = []
        this.question.Chapters.push(res.data)
        this.$message.success(res.message)
      }, err => {
        this.addChapterValue = []
        this.$message.error(err.response.data.message)
      })
    },
    removeChapter(qToCId, index) {
      questionToChapterApi.delete({ID: qToCId}).then(res => {
        this.question.Chapters.splice(index, 1)
        this.$message.success(res.message)

      })
    }
  },
  computed: {
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      doRightEnum: state => state.exam.question.answer.doRightEnum,
      doRightTag: state => state.exam.question.answer.doRightTag
    })
  }
}
</script>
<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>
