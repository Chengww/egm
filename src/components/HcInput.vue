<template>
  <el-input :value="value" @input="inputHandler" ref="input" :clearable="clearable" :type="type" @clear="clearHandler" @keydown.native.enter="enterHandler" :placeholder="placeholder">
    <el-button v-if="search" slot="append" icon="el-icon-search" @click="btnClickHandler"></el-button>
  </el-input>
</template>
<script>
export default {
  name: 'hcInput',
  props: {
    value: {},
    focus: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    search: {
      type: Boolean,
      default: false
    },
    type: {}
  },
  methods: {
    inputHandler (value) {
      this.$emit('input', value)
    },
    focusHandler () {
      this.$refs.input.$refs.input.focus()
    },
    enterHandler () {
      this.$emit('enter-click')
      this.btnClickHandler()
    },
    btnClickHandler () {
      this.$emit('btn-click')
    },
    clearHandler () {
      this.focusHandler()
      this.btnClickHandler()
    }
  },
  mounted () {
    if (this.focus) {
      this.focusHandler()
    }
  }
}
</script>
