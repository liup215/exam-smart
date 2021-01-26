<template>
  <div class="app-container">
    <el-form :model="form" label-width="80px">
      <el-form-item label="名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import yearApi from '@/api/year.js'

export default {
  data () {
    return {
      form: {},
      formLoading: false
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      yearApi.getById(parseInt(id)).then(re => {
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
        yearApi.edit(this.form).then(data => {
          if (data.code === 200) {
            _this.$message.success(data.message)
            _this.$store.dispatch('tagsView/delView', {path: _this.$route.path}).then(() => {
              _this.$router.push('/education/year/list')
            })
          } else {
            _this.$message.error(data.message)
            _this.formLoading = false
          }
        }).catch(() => {
          _this.formLoading = false
        })
      } else {
        yearApi.add(this.form).then(data => {
          if (data.code === 200) {
            _this.$message.success(data.message)

            _this.$store.dispatch('tagsView/delView', {path: _this.$route.path}).then(() => {
              _this.$router.push('/education/year/list')
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
    }
  }
}
</script>