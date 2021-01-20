<template>
  <div class="app-container">
    <h1 style="text-align: center">{{examPaper.name}}</h1>
    <el-row :gutter="1" :key="titleIndex" v-for="titleItem, titleIndex in examPaper.titleItems" style="font-size: 20px">
      <el-col :span="1" style="font-weight: bold;">{{titleIndex+1}}</el-col>
      <el-col :span="23">
        <div style="font-weight: bold;">{{titleItem.name}}</div>
        <div style="" v-for="question, index in titleItem.questionItems">
          <el-row :gutter="1">
            <el-col :span="1"><p>{{index+1}}</p></el-col>
            <el-col :span="23"><div v-html="question.question.title"></div></el-col>
          </el-row>
          <el-row :gutter="1" v-if="question.question.questionType == 1">
            <el-col :span="1">&nbsp;</el-col>
            <el-col :span="23" >
              <el-row style="margin: 5pt 0pt" :gutter="1" :key="optionIndex" v-for="option, optionIndex in question.question.items">
                <el-col :span="1" style="font-weight: bold">{{option.prefix}}</el-col>
                <el-col :span="23">{{option.content}}</el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import examPaperApi from '@/api/examPaper'

export default {
  data () {
    return {
      examPaper: {}
    }
  },
  created () {
    let id = this.$route.query.id
    if (id) {
      examPaperApi.select(parseInt(id)).then(res => {
        this.examPaper = res.data
      })
    }
  }
}
</script>
