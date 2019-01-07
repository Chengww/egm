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
      show: false,
      users: [{
        name: 'aa'
      }, {
        name: 'bb'
      }]
    }
  },
  methods: {
    close () {
      this.show = false
    },
    pop () {
      this.$axios.post('/test/helloWorld', {
        // params: {
        //   a: 3
        //   // a: { name: 'aa' }
        //   // a: this.users
        // }
        // user: this.user,
        // a: null
        // name: 'aa'
        // a: {
        //   name: 'aa'
        // }
        a: this.users
      }).then(data => {
        console.log(data)
        console.log(this.users)
      })
    }
  }
}
</script>
