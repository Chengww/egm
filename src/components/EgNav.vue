<template>
  <div class="layout">
    <el-menu
    :default-active="'1'"
    class="menu-list"
    mode="horizontal"
    background-color="teal"
    text-color="#fff"
    active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><span class="font-medium">我的工作台</span></template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
    <div class="user-info">
      <img src="@/assets/imgs/head.jpg">
      <div>
        <p>Scarecrow</p>
        <p>退出登录</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'egNav'
}
</script>
<style scoped>
.menu-list {
  border: 0px;
  text-align: center;
}
.el-menu {
  margin-left: 400px;
}
.el-menu-item {
  font-size: 18px;
}
.font-medium {
  font-size: 18px;
}
.user-info {
  position: absolute;
  right: 0px;
  float: right;
  width: 300px;
}
.user-info img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.user-info p {
  height: 20px;
}
.user-info div {
  float: right;
  margin-right: 110px;
  display:block;
}
</style>
