<template>
  <el-dialog
    :title="title"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEsc"
    :visible.sync="show"
    :width="width"
    center>
    <slot></slot>
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
    title: '',
    width: '60%',
    closeOnPressEsc: {
      type: Boolean,
      default () {
        return false
      }
    },
    closeOnClickModal: {
      type: Boolean,
      default () {
        return false
      }
    },
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
