<template>
  <div class="top-filter">
    <el-button size="small" type="warning" @click="clearAll" v-show="filterItems.length > 0">清除</el-button>
    <el-tag
      v-for="tag in filterItems"
      :key="tag.id"
      closable
      type="info"
      @close="clearTag(tag)">
      {{tag.name}}
    </el-tag>
  </div>
</template>
<script>
export default {
  name: 'hcTag',
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    data: {}
  },
  methods: {
    clearTag (tag) {
      this.value[tag.type].remove(tag.id)
      this.clear()
    },
    clearAll () {
      Object.keys(this.value).forEach(key => {
        if (this.value[key] instanceof Array) {
          this.value[key] = []
        } else {
          this.value[key] = null
        }
      })
      this.clear()
    },
    clear () {
      this.$emit('clear')
    }
  },
  computed: {
    filterItems () {
      let result = []
      for (const key in this.data) {
        this.data[key].items.forEach(item => {
          if (this.value[key].includes(item.id)) {
            result.push(Object.assign({ type: key }, item))
          }
        })
      }
      return result
    }
  }
}
</script>
