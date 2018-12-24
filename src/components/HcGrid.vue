<template>
  <div class="layout layout-item">
    <div class="layout-item">
      <div class="layout layout-absolute">
        <el-table
          :data="data"
          height="250"
          style="width: 100%">
          <slot />
        </el-table>
      </div>
    </div>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[50, 100, 150, 200]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'hcGrid',
  props: {
    initParams: {
      type: Object,
      default () {
        return {
          height: 300
        }
      }
    },
    data: {}
  },
  data () {
    return {
      currentPage: 2,
      total: 100
    }
  }
}
</script>
