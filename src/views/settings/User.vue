<template>
  <hc-list>
    <div slot="left" class="layout layout-item">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
        <el-breadcrumb-item :to="{ name: 'user' }">设置</el-breadcrumb-item>
        <el-breadcrumb-item>人员管理</el-breadcrumb-item>
      </el-breadcrumb>
      <hc-filter v-model="filterParams" :data="filterData" @click-filter="clickFilter"></hc-filter>
    </div>
    <div slot="top" class="layout layout-item">
      <hc-tag v-model="filterParams" :data="filterData" @clear="clickFilter"></hc-tag>
      <div class="table">
        <el-row class="font-m-w">
          <el-col :span="4">未设角色</el-col>
          <el-col :span="4">已设角色</el-col>
          <el-col :span="4">员工</el-col>
          <el-col :span="4">经理</el-col>
          <el-col :span="4">合计</el-col>
        </el-row>
        <el-row class="font-m-b">
          <el-col :span="4">2</el-col>
          <el-col :span="4">3</el-col>
          <el-col :span="4">2</el-col>
          <el-col :span="4">1</el-col>
          <el-col :span="4">5</el-col>
        </el-row>
      </div>
      <div class="btn-box">
        <el-button type="primary" size="small" @click="add">添加人员</el-button>
        <el-button type="danger" size="small">批量删除</el-button>
      </div>
    </div>
    <hc-grid slot="bottom" :url="gridUrl">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </hc-grid>
    <div slot="right">
      <div class="btn-box">
        <el-button type="primary" size="small">保存</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </div>
      <el-form label-width="80px" class="detail">
        <el-form-item label="姓名姓名">
          <hc-input v-model="detail.name" />
        </el-form-item>
        <el-form-item label="性别">
          <hc-input v-model="detail.sex" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <hc-input v-model="detail.password" />
        </el-form-item>
      </el-form>
    </div>
  </hc-list>
</template>
<script>
import EditUser from './EditUser'
export default {
  name: 'user',
  data () {
    return {
      detail: {
        name: 'abc',
        sex: '男',
        password: '111'
      },
      filterParams: {
        queryName: null,
        role: [],
        sex: []
      },
      filterData: {
        role: {
          name: '角色',
          items: [{
            id: 'set',
            name: '已设角色'
          }, {
            id: 'noSet',
            name: '未设角色'
          }, {
            id: '03',
            name: 'BOSS'
          }, {
            id: '04',
            name: '员工'
          }, {
            id: 'se1t',
            name: '已设角色'
          }, {
            id: 'no2Set',
            name: '未设角色'
          }, {
            id: '031',
            name: 'BOSS'
          }, {
            id: '041',
            name: '员工'
          }]
        },
        sex: {
          name: '性别',
          items: [{
            id: '0',
            name: '男'
          }, {
            id: '1',
            name: '女'
          }]
        }
      },
      gridUrl: null,
      show: false
    }
  },
  methods: {
    clickFilter () {
      console.log(this.filterParams)
    },
    refreshGrid () {
      this.gridUrl = {
        url: '/user/userList',
        params: {
          time: new Date().getTime(),
          ...this.filterParams
        }
      }
    },
    add () {
      this.$openDialog(EditUser, {
        title: '新建人员'
      })
    },
    close () {
      this.show = false
    }
  },
  computed: {
    filterItems () {
      let result = []
      for (const key in this.filterData) {
        this.filterData[key].items.forEach(item => {
          if (this.filterParams[key].includes(item.id)) {
            result.push(item)
          }
        })
      }
      return result
    }
  },
  created () {
    this.refreshGrid()
  },
  components: {
    EditUser
  }
}
</script>
