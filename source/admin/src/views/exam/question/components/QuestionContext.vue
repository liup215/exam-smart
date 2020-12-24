<template>
  <div style="margin: 10px">
    <el-form-item label="分数">
      <el-input-number v-model="value.score" :min="1" :step="1"></el-input-number>
      <span style="color: red">***</span>如果有子问题可不填写
    </el-form-item>
    <el-form-item label="问题类型">
      <el-select v-model="value.questionType" clearable>
        <el-option v-for="item in questionType" :key="item.key" :value="item.key" :label="item.value"></el-option>
      </el-select>
      <span style="color: red">***</span>如果有子问题可不填写
    </el-form-item>
    <el-form-item label="题目难度">
      <el-input-number v-model="value.difficult" :min="1" :step="1"></el-input-number>
      <span style="color: red">***</span>如果有子问题可不填写
    </el-form-item>
    <el-form-item label="知识点">
      <el-cascader ref="chapterSelector" :options="chapters" :props="chaptereSelectorProps" v-model="value.chapters">
        <template slot-scope="{ node, data }">
          <span>{{data.name}}</span>
          <span v-if="!node.isLeaf"> ({{ data.childChapterList.length }}) </span>
        </template>
      </el-cascader>
    </el-form-item>
    <el-tabs type="border-card" tab-position="left">
      <el-tab-pane label="题干">
        <el-form-item label="题干">
          <tinymce v-model="value.context"></tinymce>
          <span style="color: red">***</span>如果有子问题可不填写
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="答案">
        <el-form-item label="答案">
          <div v-if="value.questionType === 1">
            <el-row>
              <el-col :span="24" v-for="(item, index) in value.singleChoice.choices" :key="index">
                <el-radio v-model="value.singleChoice.correct"  :label="index">
                {{choiceLabel[index]}}
                  <el-input type="textarea" v-model="value.singleChoice.choices[index]"></el-input>
                  <el-button type="text" @click="value.singleChoice.choices.splice(index, 1)">删除选项</el-button>
                </el-radio>
              </el-col>
            </el-row>
            <el-button type="text" @click="handleChoiceAdd(value.singleChoice.choices)">添加选项</el-button>
          </div>
          <div v-if="value.questionType === 2">
            <el-row>
              <el-col :span="24" v-for="(item, index) in value.multiChoice.choices" :key="index">
                <el-checkbox v-model="value.multiChoice.correct[index]"  :true-label="1" :false-label="0" class="custom-checkbox">
                {{choiceLabel[index]}}
                  <el-input type="textarea" v-model="value.multiChoice.choices[index]"></el-input>
                  <el-button type="text" @click="value.multiChoice.choices.splice(index, 1)">删除选项</el-button>
                </el-checkbox>
              </el-col>
            </el-row>
            <el-button type="text" @click="handleChoiceAdd(value.multiChoice.choices)">添加选项</el-button>
          </div>
          <div v-if="value.questionType === 3">
            <el-switch v-model="value.trueFalse.correct" active-text="正确" inactive-text="错误" :active-value="1" :inactive-value="0"></el-switch>
          </div>
          <div v-if="value.questionType === 4">
            <el-input v-model="value.gapFilling.correct[index]" v-for="(item, index) in value.gapFilling.correct" :key="index">
              <el-button slot="append" icon="el-icon-delete" @click="value.gapFilling.correct.splice(index, 1)"></el-button>
            </el-input>
            <el-button type="text" @click="handleGapAdd(value.gapFilling.correct)">添加答案</el-button>
          </div>
          <div v-if="value.questionType === 5">
            <tinymce v-model="value.shortAnswer.correct"></tinymce>
          </div>
        </el-form-item>
      </el-tab-pane>
      <el-tab-pane label="解析">
        <el-form-item label="解析">
          <tinymce v-model="value.analyze"></tinymce>
          <span style="color: red">***</span>如果有子问题可不填写
        </el-form-item>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import Tinymce from '@/components/Tinymce'

export default {
  components: {
    Tinymce
  },
  props: {
    value: {
      type: Object,
      default: function () {
        return {
          score: 1,
          questionType: 1,
          context: "这里输入题干"
      	}
      }
    },
    chapters: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      chaptereSelectorProps: {
        value: 'id',
        label: 'name',
        multiple: true,
        children: 'childChapterList'
      },
      choiceLabel: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]
    }
  },
  methods: {
    handleChaptersChange (data) {
      console.log(this.$refs['chapterSelector'])
    },
    handleChoiceAdd(choices) {
      if (choices.length >= 7) {
        this.$message("选项数量达到上限")
        return
      }
      choices.push("")
    },
    handleGapAdd (correct) {
      correct.push("")
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
.el-radio
{
  width: 80%
}

.custom-checkbox {
  width: 80%
}

.el-checkbox__label {
  width: 100%
}
</style>