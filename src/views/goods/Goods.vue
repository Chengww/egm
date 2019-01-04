<template>
<div>
  <h1>商品</h1>
  <el-button @click="pop">弹出plugin</el-button>
  <el-button @click="show = true">弹出</el-button>
  <hc-dialog :show="show" @close="close"></hc-dialog>
</div>
</template>
<script>
import EditUser from '../settings/EditUser'
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
    },
    pop () {
      this.$openDialog(EditUser)
    }
  }
}
</script>
