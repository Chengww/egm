<template>
  <el-form label-width="80px">
    <el-row :span="24">
      <el-col :span="12">
        <el-form-item label="姓名">
          <hc-input v-model="user.name"></hc-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="性别">
          <hc-input v-model="user.sex"></hc-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :span="24">
      <el-col :span="12">
        <el-form-item label="角色">
          <hc-input v-model="user.role"></hc-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="电话">
          <hc-input v-model="user.phone"></hc-input>
        </el-form-item>
      </el-col>
    </el-row>
    <template v-if="user.role">
      <el-row :span="24">
        <el-col :span="12">
          <el-form-item label="身份证">
            <hc-input v-model="user.cardCode"></hc-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出生日期">
            <hc-input v-model="user.birthday"></hc-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="12">
          <el-form-item label="年龄">
            <hc-input v-model="user.age"></hc-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="入职日期">
            <hc-input v-model="user.registrationDate"></hc-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :span="24">
        <el-col :span="12">
          <el-form-item label="登录账号">
            <hc-input v-model="user.cardCode"></hc-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="登录密码">
            <hc-input v-model="user.phone"></hc-input>
          </el-form-item>
        </el-col>
      </el-row>
    </template>
    <el-form-item label="住址">
      <hc-input v-model="user.address"></hc-input>
    </el-form-item>
    <el-row :span="24">
      <el-col :span="12">
        <el-form-item label="邮箱">
          <hc-input v-model="user.email"></hc-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="微信">
          <hc-input v-model="user.contactWay"></hc-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="备注">
      <hc-input type="textarea" v-model="user.remark"></hc-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'EditUser',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    submit (a) {
      console.log(a)
    }
  }
}
</script>
