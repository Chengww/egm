<template>
  <el-container class="layout layout-absolute">
    <el-header class="layout layout-horizontal">
      <img class="small-logo" src="@/assets/imgs/logo2.png">
      <div class="layout layout-item align-center"><h1>HC 商家助手</h1></div>
      <div class="header-right">
        <el-button type="info" size="small" @click="login(false)">游客</el-button>
      </div>
    </el-header>
    <el-main class="login-main">
      <div class="login-form">
        <img src="@/assets/imgs/logo1.png" class="img_big">
        <el-form ref="loginForm" label-width="80px" label-position="left" :model="loginData" :rules="rules">
          <el-form-item label="用户名" prop="userName">
            <eg-input v-model="loginData.userName" clearable focus></eg-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <eg-input type="password" v-model="loginData.password" clearable @enter-click="login(true)"></eg-input>
          </el-form-item>
          <el-form-item></el-form-item>
          <el-form-item label-width="100px">
            <el-row>
              <el-col :span="10"><el-button type="primary" round @click="login(true)">登录</el-button></el-col>
              <el-col :span="10"><el-button type="info" round @click="login(false)">游客</el-button></el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </div>
      <p>@2018 Copyright 商家助手 Merchant Assistant 网址:www.hcma.com</p>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginData: {},
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (isEmployee) {
      if (isEmployee) {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            this.$notify.success({
              title: '成功',
              message: '登录成功',
              duration: 2000
            })
            this.toIndex(isEmployee)
          } else {
            return false
          }
        })
      } else {
        this.toIndex(isEmployee)
      }
    },
    toIndex (isEmployee) {
      this.$router.push({
        name: 'index',
        params: {
          isEmployee: isEmployee
        }
      })
    }
  }
}
</script>
