<template>
<div>
  <h1>商品</h1>
  <el-button @click="show = true">弹出</el-button>
  <hc-dialog :show="show" @close="close"></hc-dialog>
</div>
</template>
<script>
export default {
  name: 'goods',
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>
