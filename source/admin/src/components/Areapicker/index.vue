<template>
  <div>
  <el-cascader 
    expand-trigger="hover"
    :options="areas"
    v-model="avalue"
    :props="props"
    @change="handlePickerChange">
  </el-cascader>
  <br/>
  <el-input v-model="detail" @change="handleDetailChange"></el-input>
  </div>
</template>
<script>
import Area from './area.js'
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      areas: [],
      props: {
        value: 'areaname',
        label: 'areaname',
        children: 'children'
      },
      avalue: ['北京市', '市辖区', '东城区'],
      detail: '',
      location: []
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    value(val) {
      if (val.province !== '' && val.city !== '' && val.district !== '') {
        this.avalue = [val.province, val.city, val.district]
      } else {
        this.avalue = ['北京市', '市辖区', '东城区']
      }
      this.detail = val.detail
    }
  },
  computed: {
    address() {
      return {
        province: this.avalue.length > 0 ? this.avalue[0] : '',
        city: this.avalue.length > 1 ? this.avalue[1] : '',
        district: this.avalue.length > 2 ? this.avalue[2] : '',
        detail: this.detail,
      }
    }
  },
  methods: {
    fetchData() {
      this.areas = Area
    },
    handlePickerChange(val) {
      this.emitValue()
      
    },
    handleDetailChange(val) {
      // this.address.detail = val
      this.emitValue()
    },
    emitValue() {
      console.log(this.address)
      this.$emit('input', this.address)
    }
  }
}
</script>

