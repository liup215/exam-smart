<template>
  <div class="app-container">

    <el-form :model="form" ref="form" label-width="100px" v-loading="formLoading" :rules="rules">
      <el-form-item label="用户名："  prop="username" required>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：" required>
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="状态：" required>
        <el-select v-model="form.status" placeholder="状态">
          <el-option v-for="item in statusEnum" :key="item.key" :value="item.key" :label="item.value"></el-option>
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
import { mapGetters, mapState, mapActions } from 'vuex'
import { selectUser, createUser, updateUser } from '@/api/user'

export default {
  data () {
    return {
      form: {
        uid: null,
        username: '',
        password: '',
        status: 1,
      },
      formLoading: false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    let id = this.$route.query.id
    let _this = this
    if (id && parseInt(id) !== 0) {
      _this.formLoading = true
      selectUser(id).then(re => {
        _this.form.uid = re.data.uid
        _this.form.username = re.data.username
        _this.status = re.data.status
        _this.formLoading = false
      })
    }
  },
  methods: {
    submitForm () {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true

          if (this.form.uid !== 0) {
            updateUser(this.form).then(data => {
              if (data.code == 200) {
                _this.form.uid = data.data.uid
                _this.form.username = data.data.username
                _this.form.status = data.data.status
                _this.formLoading = false
                _this.$message.success(data.message)
              }
            }).catch(() => {
              _this.formLoading = false
            })
          } else {
            createUser(this.form).then(data => {
              if (data.code === 1) {
                _this.form.uid = data.response.id
                _this.$message.success(data.message)
                _this.delCurrentView(_this).then(() => {
                  _this.$router.push('/user/admin/list')
                })
              } else {
                _this.$message.error(data.message)
                _this.formLoading = false
              }
            }).catch(() => {
              _this.formLoading = false
            })
          }
          
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs['form'].resetFields()
    },
    ...mapActions('tagsView', { delCurrentView: 'delCurrentView' })
  },
  computed: {
    ...mapGetters('enumItem', [
      'enumFormat'
    ]),
    ...mapState('enumItem', {
      statusEnum: state => state.user.statusEnum
    })
  }
}
</script>
