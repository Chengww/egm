<template>
  <el-input :value="value" @input="inputHandler" ref="input" :clearable="clearable" @clear="focusHandler" @keydown.native.enter="enterHandler"></el-input>
</template>
<script>
export default {
  name: 'egInput',
  props: {
    value: {},
    focus: {
      type: Boolean,
      default: false
    },
    clearable: {}
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
    }
  },
  mounted () {
    if (this.focus) {
      this.focusHandler()
    }
  }
}
</script>
