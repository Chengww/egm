<template>
  <el-container class="layout layout-absolute">
    <el-header class="layout layout-horizontal">
      <h1>HC Merchant Assistant</h1>
      <eg-nav></eg-nav>
      <div class="header-right layout layout-horizontal">
        <span class="img"><img src="@/assets/imgs/head.jpg"></span>
        <p class="name"><span>Scarecrow</span>
          <br />
          <el-button size="mini" type="danger" round @click="logout">退出登录</el-button>
        </p>
      </div>
    </el-header>
    <el-main class="layout">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  methods: {
    logout () {
      this.$router.replace('/login')
    }
  }
}
</script>
