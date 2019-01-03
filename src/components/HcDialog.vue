<template>
  <el-dialog
    title="提示"
    :visible.sync="show"
    width="30%"
    center>
    <span>464645646</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'HcDialog',
  props: {
    show: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    close () {
      this.$emit('close')
    },
    save () {
      this.$emit('save')
    }
  }
}
</script>
