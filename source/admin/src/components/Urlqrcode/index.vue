<template>
  <div :id="urlId" style="width:100%;display:flex;justify-content:center"></div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
  props: {
    url: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: function() {
        return 'url-qrcode-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
  },
  data() {
    return {
      urlId: this.id
    }
  },
  mounted() {
    this.qrcode()
  },
  methods: {
    qrcode() {
      let qrcode = new QRCode(this.urlId, {
        width: 100,  
        height: 100,
        text: this.url, // 二维码地址
        colorDark : "#000",
        colorLight : "#fff",
      })
    }
  }
}
</script>
