<template>
  <el-select :value="value" @input="selectHandler" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
</template>
<script>
import Constant from '@/constant'
export default {
  name: 'HcSelect',
  props: {
    value: {},
    url: {},
    data: {
      type: Array,
      default () {
        return []
      }
    },
    dictType: {}
  },
  data () {
    return {
      options: []
    }
  },
  methods: {
    selectHandler (value) {
      this.$emit('input', value)
    },
    loadOptions () {
      this.$axios.get(this.url.url, {
        params: this.url.params
      }).then(({ data }) => {
        this.options = data
      })
    },
    refreshOptions () {
      if (this.dictType) {
        this.options = Constant[this.dictType] || []
      } else if (this.url.url) {
        this.loadOptions()
      } else {
        this.options = this.data
      }
    }
  },
  watch: {
    dictType () {
      this.refreshOptions()
    },
    'url.params' (nv, ov) {
      console.log(nv, ov)
    },
    data (nv) {
      this.refreshOptions()
    }
  },
  mounted () {
    this.refreshOptions()
  }
}
</script>
