<template>
  <div class="filter">
    <div class="filter-title title">筛选</div>
    <hc-input v-model="value.queryName" placeholder="请输入关键字" search focus @btn-click="searchHandler"></hc-input>
    <div class="filter-items layout layout-horizontal" v-for="(filter, key) in data" :key="key">
      <div class="filter-item-title title">
        <span>{{filter.name}}</span>
      </div>
      <div class="layout-item">
        <a v-for="item in filter.items" :key="item.id"
         @click="clickItemHandler(key, item.id)"
         :class="['filter-item', { 'is-active': value[key].includes(item.id) }]">
         {{item.name}}
        </a>
        <el-button class="clear" size="mini" type="warning" round @click="clearItemHandler(key)">清除</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hcFilter',
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    clickItemHandler (type, id) {
      let itemIds = this.value[type] || []
      if (itemIds.includes(id)) {
        itemIds = itemIds.filter(option => option !== id)
      } else {
        itemIds.push(id)
      }
      this.value[type] = itemIds
      this.searchHandler()
    },
    searchHandler () {
      this.$emit('click-filter')
    },
    clearItemHandler (type) {
      this.value[type] = []
      this.searchHandler()
    }
  }
}
</script>
