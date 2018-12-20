<template>
  <el-container class="layout layout-absolute">
    <eg-header class="layout layout-horizontal">
      <eg-menu></eg-menu>
      <div class="user-info">123</div>
    </eg-header>
    <el-main></el-main>
  </el-container>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.el-menu {
  line-height: 70px;
  display: inline-block;
}
.user-info {
  right: 50px;
  position: absolute;
  width: 300px;
}
</style>
