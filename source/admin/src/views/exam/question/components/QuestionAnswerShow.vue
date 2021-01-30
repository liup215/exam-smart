<template>
  <div v-loading="qLoading" style="line-height:1.8">
    <div v-if="qType==1||qType==2||qType==3||qType==4||qType==5">
      <div v-if="qType==1" v-loading="qLoading">
        <div class="q-content">
          <span :key="item.id" v-for="item in question.items" class="q-item-contain">
            <span class="q-item-prefix">{{item.prefix}}</span>
            <span v-html="item.content" class="q-item-content"></span>
            <br/>
          </span>
        </div>
      </div>
      <div v-else-if="qType==2" v-loading="qLoading">
        <div class="q-title" v-html="question.title"/>
        <div class="q-content">
          <span :key="item.id" v-for="item in question.items" class="q-item-contain">
            <span class="q-item-prefix">{{item.prefix}}</span>
            <span v-html="item.content" class="q-item-content"></span>
          </span>
        </div>
      </div>
      <div v-else-if="qType==3" v-loading="qLoading">
        <div class="q-title" v-html="question.title" style="display: inline;margin-right: 10px"/>
        <span>（</span>
        <span :key="item.id" v-for="item in question.items">
          <span v-html="item.content" class="q-item-content"></span>
        </span>
        <span>）</span>
      </div>
      <div v-else-if="qType==4" v-loading="qLoading">
        <div class="q-title" v-html="question.title"/>
      </div>
      <div v-else-if="qType==5" v-loading="qLoading">
      </div>
      <div v-else>
      </div>

      <el-tabs value="source">
        <el-tab-pane label="题目来源" name="source">
          <div class="question-answer-show-item">
            <span class="question-show-item">学科：</span>
            <span>{{question.subjectName}}</span>
          </div>
          <div class="question-answer-show-item">
            <span class="question-show-item">考纲：</span>
            <span>({{question.syllabusTypeName}}) {{question.syllabusName}}</span>
          </div>
          <div class="question-answer-show-item">
            <span class="question-show-item">真题信息：</span>
            <span v-if="question.isPastPaperQuestion === 1">{{question.yearName}}-{{question.seriesName}}-{{question.codeName}}-{{question.orderNumber}}</span>
            <span v-else>原创试题</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="基本信息" name="info">
          <div class="question-answer-show-item">
            <span class="question-show-item">题型：</span>
            <span>{{question.questionTypeName}}</span>
          </div>
          <div class="question-answer-show-item">
            <span class="question-show-item">分数：</span>
            <span>{{question.score}}</span>
          </div>
          <div class="question-answer-show-item">
            <span class="question-show-item">难度：</span>
            <span>{{question.difficult}}</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="章节管理" name="chapters">
          <el-tag v-for="(chapter, index) in question.chapters" :key="chapter.id" closable @close="removeChapter(chapter.id, index)">{{chapter.chapterName}}</el-tag>
          <br/>
          <el-cascader :options="chapters" :props="props" v-model="addChapterValue" @change="addChapter"></el-cascader>
        </el-tab-pane>
        <el-tab-pane label="题目解析" name="analyze">
          <div class="question-answer-show-item">
            <div style="margin-left: 2.5rem"><span v-html="question.analyze" class="q-item-span-content"/></div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="正确答案" name="correct">
          <div class="question-answer-show-item">
            <div style="margin-left: 2.5rem">
              <span v-if="qType==1||qType==2 ||qType==5" v-html="question.correct" class="q-item-span-content"/>
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
        label: 'name',
        value: 'id',
        children: 'children',
        leaf: 'isLeaf',
        expandTrigger: 'hover'
      },
      chapters: [],
      addChapterValue: []
    }
  },
  created() {
    chapterApi.chapterTree({syllabusId: this.question.syllabusId}).then(res => {
      this.chapters = res.data.list
    })
  },
  methods: {
    trueFalseFormatter (question) {
      return question.items.filter(d => d.prefix === question.correct)[0].content
    },
    doRightTagFormatter (status) {
      return this.enumFormat(this.doRightTag, status)
    },
    doRightTextFormatter (status) {
      return this.enumFormat(this.doRightEnum, status)
    },
    addChapter(value) {
      questionToChapterApi.add({questionId: this.question.id, chapterId: value[value.length - 1]}).then(res=>{
        this.addChapterValue = []
        this.question.chapters.push(res.data)
        this.$message.success(res.message)
      }, err => {
        this.addChapterValue = []
        this.$message.error(err.response.data.message)
      })
    },
    removeChapter(qToCId, index) {
      questionToChapterApi.delete({id: qToCId}).then(res => {
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
