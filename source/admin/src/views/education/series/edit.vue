<template>
  <div class="app-container">
    <el-form :model="form" label-width="80px">
      <el-form-item label="名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
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
        <el-select v-model="form.syllabusId">
          <el-option :value="0" label="---请选择---"></el-option>
          <el-option v-for="item in syllabusList" :key="item.id" :value="item.id" :label="item.name"></el-option>
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
import seriesApi from '@/api/series.js'
import syllabusApi from '@/api/syllabus.js'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        name: null,
        syllabusId: null
      },
      formLoading: false,
      syllabusList: [],
      subjectList: []
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    

    this.initSubject(function () {
      _this.subjectList = _this.subjects

      if (id && parseInt(id) !== 0) {
        _this.formLoading = true
        if (id && parseInt(id) !== 0) {
          seriesApi.getById(parseInt(id)).then(re => {
            _this.form = re.data
            _this.formLoading = false
            _this.form.organisation = re.data.syllabusType
            _this.searchSyllabus({type: _this.form.organisation, subjectId: re.data.subjectId})
          })
        }
        _this.formLoading = false
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
      this.formLoading = true

      if (this.form.id) {
        seriesApi.edit(this.form).then(data => {
          if (data.code === 200) {
            _this.$message.success(data.message)
            _this.$store.dispatch('tagsView/delView', {path: _this.$route.path}).then(() => {
              _this.$router.push('/education/series/list')
            })
          } else {
            _this.$message.error(data.message)
            _this.formLoading = false
          }
        }).catch(() => {
          _this.formLoading = false
        })
      } else {
        seriesApi.add(this.form).then(data => {
          if (data.code === 200) {
            _this.$message.success(data.message)

            _this.$store.dispatch('tagsView/delView', {path: _this.$route.path}).then(() => {
              _this.$router.push('/education/series/list')
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
    ...mapActions('exam', { initSubject: 'initSubject' })
  },
  computed: {
    ...mapState('exam', { subjects: state => state.subjects })
  }
}
</script>