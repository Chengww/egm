<template>
  <div class="layout layout-item align-center">
    <el-menu
    :default-active="navId"
    class="menu-list"
    router
    mode="horizontal"
    background-color="teal"
    text-color="#fff"
    active-text-color="#ffd04b">
      <el-menu-item index="/goods/goods">商品</el-menu-item>
      <el-submenu :index="nav.id" v-for="nav in navs" :key="nav.id">
        <template slot="title">{{nav.name}}</template>
        <el-menu-item :index="subNav.id" v-for="subNav in nav.subNavs" :key="subNav.id">{{subNav.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
const navs = [{
  id: '2',
  name: '销售',
  subNavs: [{
    id: '2-1',
    name: '销售登记'
  }, {
    id: '2-2',
    name: '销售明细'
  }, {
    id: '2-3',
    name: '销售报表'
  }]
}, {
  id: '3',
  name: '采购',
  subNavs: [{
    id: '3-1',
    name: '采购登记'
  }, {
    id: '3-2',
    name: '采购明细'
  }, {
    id: '3-3',
    name: '采购报表'
  }]
}, {
  id: '4',
  name: '记账',
  subNavs: [{
    id: '4-1',
    name: '记账登记'
  }, {
    id: '4-2',
    name: '记账明细'
  }, {
    id: '4-3',
    name: '记账报表'
  }]
}, {
  id: '5',
  name: '报表',
  subNavs: [{
    id: '5-1',
    name: '汇总报表'
  }, {
    id: '5-2',
    name: '采购报表'
  }, {
    id: '5-3',
    name: '销售报表'
  }, {
    id: '5-4',
    name: '记账报表'
  }]
}, {
  id: '/settings',
  name: '设置',
  subNavs: [{
    id: '6-2',
    name: '系统设置'
  }, {
    id: '/settings/user',
    name: '人员'
  }]
}]
export default {
  name: 'egNav',
  data () {
    return {
      navId: '/goods/goods',
      navs: navs
    }
  }
}
</script>
