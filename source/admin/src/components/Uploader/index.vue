<template>
  <el-upload
    action="https://upload-z1.qiniup.com/"
    :multiple="multiple"
    :list-type="listType"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :before-upload="beforeUpload"
    :data="uploadData"
    :limit="limit"
    >
    <i class="el-icon-plus"></i>
  </el-upload>
</template>
<script>
import { uploadToken } from '@/api/system/file.js'
export default {
  props: {
    multiple: {
      type: Boolean,
      default: true,
      required: false
    },
    listType: {
      type: String,
      default: '',
      required: false
    },
    limit: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      uploadData: {
        token: '',
      },
      tokenValid: false
    }
  },
  methods: {
    handlePreview(file) {
      this.$emit('onPreview', file)
    },
    handleSuccess(response, file, fileList) {
      this.$emit('onSuccess', response, file, fileList)
    },
    handleRemove(file, fileList) {
      this.$emit('onRemove', file, fileList)
    },
    beforeUpload(file) {
      const nameArr = file.name.split('.')
      return uploadToken().then(response => {
        this.uploadData.token = response.data.token
        this.uploadData.key = response.data.key + '.' + nameArr[nameArr.length - 1]
        this.tokenValid = true
      })
    }
  }
}
</script>
