<template>
  <div class="app-container">
    <el-form :model="form" label-width="80px">
      <el-form-item label="名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="学科：">
        <el-select v-model="form.subjectId" clearable>
          <el-option v-for="item in subjects" :key="item.id" :value="item.id"
                 :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考试局">
        <el-select v-model="form.type">
          <el-option v-for="item in syllabusType" :key="item.key" :value="item.key" :label="item.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { syllabusType } from '@/config/education'
import { mapState, mapActions } from 'vuex'
import syllabusApi from '@/api/syllabus.js'

export default {
  data () {
    return {
      form: {},
      syllabusType: syllabusType,
      formLoading: false
    }
  },
  created () {
    this.initSubject()
    let id = this.$route.query.id
    let _this = this
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      syllabusApi.getById({id: parseInt(id)}).then(re => {
        _this.form = re.data
        _this.formLoading = false
      })
    }
  },
  methods: {
    submitForm () {
      let _this = this
      this.formLoading = true

      if (this.form.id) {
        syllabusApi.edit(this.form).then(data => {
          if (data.code === 200) {
            _this.$message.success(data.message)
            _this.$store.dispatch('tagsView/delView', {path: _this.$route.path}).then(() => {
              _this.$router.push('/education/syllabus/list')
            })
          } else {
            _this.$message.error(data.message)
            _this.formLoading = false
          }
        }).catch(() => {
          _this.formLoading = false
        })
      } else {
        syllabusApi.add(this.form).then(data => {
          if (data.code === 200) {
            _this.$message.success(data.message)

            _this.$store.dispatch('tagsView/delView', {path: _this.$route.path}).then(() => {
              _this.$router.push('/education/syllabus/list')
            })
          } else {
            _this.$message.error(data.message)
            _this.formLoading = false
          }
        }).catch(() => {
          _this.formLoading = false
        })
      } 
    },
    resetForm () {
      this.$refs['form'].resetFields()
    },
    ...mapActions('exam', { initSubject: 'initSubject' })
  },
  computed: {
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>