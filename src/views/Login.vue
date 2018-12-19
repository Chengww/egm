<template>
  <el-container class="layout layout-absolute">
    <el-header height="70px">
      <img src="@/assets/imgs/logo2.png">
      <div>
        <el-button type="info" size="small" @click="login(false)">游客</el-button>
      </div>
    </el-header>
    <el-main>
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
      <span>@2018 Copyright 韩城眼镜商行 网址:www.hcegm.com</span>
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
<style scoped>
.el-main {
  background: 100% 100% no-repeat url('../assets/imgs/bg1.jpg');
  background-color: brown;
}
.el-header {
  line-height: 70px;
  background-color:teal;
}
.el-header img {
  margin: 5px 10px;
}
.el-header div {
  margin-right: 100px;
  float: right;
}
.el-header div span {
  margin-right: 20px;
}
.el-main span {
  bottom: 0px;
  position:absolute;
  margin-bottom: 10px;
  left: 40%;
}
.login-form {
  width: 350px;
  height: 450px;
  background-color: #90CAF9;
  padding: 0px 10px;
  float: right;
  margin: 150px 150px;
}

.login-form img {
  margin-left: 60px;
}
</style>
