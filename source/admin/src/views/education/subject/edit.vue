<template>
  <div class="app-container">
    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading">
      <el-form-item label="学科：" required>
        <el-input v-model="form.Name"></el-input>
      </el-form-item>
      <el-form-item label="排序">
        <el-input-number v-model="form.ItemOrder"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import subjectApi from '@/api/subject'

export default {
  data () {
    return {
      form: {
        ID: null,
        Name: '',
        ItemOrder: 0
      },
      formLoading: false
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      subjectApi.select(id).then(re => {
        _this.form = re.data
        _this.formLoading = false
      })
    }
  },
  methods: {
    submitForm () {
      let _this = this
      this.formLoading = true

      if (this.form.ID) {
        subjectApi.edit(this.form).then(data => {
          if (data.code === 200) {
            _this.$message.success(data.message)
            _this.$store.dispatch('tagsView/delView', {path: _this.$route.path}).then(() => {
              _this.$router.push('/education/subject/list')
            })
          } else {
            _this.$message.error(data.message)
            _this.formLoading = false
          }
        }).catch(() => {
          _this.formLoading = false
        })
      } else {
        subjectApi.add(this.form).then(data => {
          if (data.code === 200) {
            _this.$message.success(data.message)

            _this.$store.dispatch('tagsView/delView', {path: _this.$route.path}).then(() => {
              _this.$router.push('/education/subject/list')
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
    ...mapActions('tagsView', { delCurrentView: 'delView' })
  }
}
</script>
