<template>
<div>
  <h1>商品</h1>
  <el-button @click="pop">弹出plugin</el-button>
  <el-button @click="show = true">弹出</el-button>
</div>
</template>
<script>
export default {
  name: 'goods',
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      this.show = false
    },
    pop () {
      this.$axios.post('/test/helloWorld2', {
        // params: {
        //   // a: 3
        //   a: { name: 'aa' } // ['a', 'b', 'c']
        // }
        // user: this.user,
        // a: 123
        // name: 'aa'
        a: {
          name: 'aa'
        }
        // b: ['a', 'b', 'c']
      }).then(data => {
        console.log(data)
      })
    }
  }
}
</script>
