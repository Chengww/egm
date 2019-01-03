<template>
  <div class="layout layout-item">
    <div class="layout-item">
      <div class="layout layout-absolute">
        <el-table
          :data="gridData"
          height="250"
          style="width:100%">
          <slot />
        </el-table>
      </div>
    </div>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[2, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="sizeChange"
      @current-change="currentChange"
      @prev-click="prevClick"
      @next-click="nextClick">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'hcGrid',
  props: {
    data: {},
    url: {},
    pageSize: {
      type: Number,
      default () {
        return 2
      }
    }
  },
  data () {
    return {
      startIndex: 0,
      total: 0,
      gridData: []
    }
  },
  methods: {
    sizeChange (size) {
      this.pageSize = size
      this.startIndex = 0
      this.getData()
    },
    currentChange (currentPage) {
      this.startIndex = (currentPage - 1) * this.pageSize
      this.getData()
    },
    prevClick (currentPage) {
      // console.log('pc' + currentPage)
    },
    nextClick (currentPage) {
      // console.log('nc' + currentPage)
    },
    getData () {
      if (this.url) {
        let params = {
          page: this.currentPage,
          size: this.pageSize,
          ...this.url.params
        }
        this.$axios.get(this.url.url, { params }).then(({ data }) => {
          this.total = data.total
          this.gridData = data.records
        })
      } else {
        let [min, max] = [this.startIndex - 1, this.startIndex + this.pageSize]
        this.gridData = []
        this.data.forEach((item, index) => {
          if (index > min && index < max) {
            this.gridData.push(item)
          }
        })
      }
    },
    initByData () {
      this.total = this.data.length
      this.getData()
    },
    initByUrl () {
      this.getData()
    }
  },
  computed: {
    currentPage () {
      return Math.floor(this.startIndex / this.pageSize) + 1
    }
  },
  mounted () {
    if (this.url) {
      this.initByUrl()
    } else {
      this.initByData()
    }
  },
  watch: {
    data () {
      this.initByData()
    },
    'url.params.time' (nv) {
      if (nv) {
        this.initByUrl()
      }
    }
  }
}
</script>
