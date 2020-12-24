<template>
  <div class="upload-container">
    <el-upload
      :data="dataObj"
      :multiple="false"
      list-type="picture-card"
      :show-file-list="false"
      :on-success="handleImageSuccess"
      class="image-uploader"
      action="https://upload-z1.qiniup.com"
      :before-upload="beforeUpload"
    >
      <i class="el-icon-upload" />
    </el-upload>
    <div class="image-preview" v-show="imageUrl.length>(baseUrl.length + 1)">
      <div class="image-preview-wrapper">
        <img v-if="imageUrl.length>(baseUrl.length + 1)" :src="imageUrl">
        <div class="image-preview-action">
          <i class="el-icon-delete" @click="rmImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadToken } from '@/api/system/file.js'

export default {
  name: 'SingleImageUpload',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tempUrl: '',
      dataObj: { token: '', key: '' },
      baseUrl: 'https://cdn.wenluokeji.com',
    }
  },
  computed: {
    imageUrl() {
      return this.baseUrl + '/' +this.value
    },
  },
  methods: {
    rmImage() {
      this.emitInput('')
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    handleImageSuccess(response) {
      this.emitInput(response.key)
    },
    beforeUpload(file) {
      const nameArr = file.name.split('.')
      return uploadToken().then(response => {
        this.dataObj.token = response.data.token
        this.dataObj.key = response.data.key + '.' + nameArr[nameArr.length - 1]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "~@/styles/mixin.scss";
    .upload-container {
        width: 100%;
        position: relative;
        @include clearfix;
        .image-uploader {
            width: 40%;
            float: left;
        }
        .image-preview {
            width: 30%;
            position: relative;
            border: 1px dashed #d9d9d9;
            float: left;
            margin-left: 50px;
            .image-preview-wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .image-preview-action {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                cursor: default;
                text-align: center;
                color: #fff;
                opacity: 0;
                font-size: 20px;
                background-color: rgba(0, 0, 0, .5);
                transition: opacity .3s;
                cursor: pointer;
                text-align: center;
                line-height: 200px;
                .el-icon-delete {
                    font-size: 36px;
                }
            }
            &:hover {
                .image-preview-action {
                    opacity: 1;
                }
            }
        }
    }

</style>
