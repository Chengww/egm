<template>
  <el-header height="70px">
    <img src="@/assets/imgs/logo2.png">
    <slot></slot>
  </el-header>
</template>

<script>
export default {
  name: 'egHeader'
}
</script>
<style scoped>
.el-header {
  line-height: 70px;
  background-color:teal;
}

.el-header img {
  margin: 5px 10px;
}
</style>
