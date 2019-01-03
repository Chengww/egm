<template>
  <div class="layout layout-horizontal layout-item">
    <slot name="dialog"></slot>
    <div class="list-left" :style="{ width: size.leftWidth}">
      <slot name="left"></slot>
    </div>
    <div class="layout layout-item">
      <div class="list-top">
        <slot name="top"></slot>
      </div>
      <div class="layout layout-horizontal layout-item list-bottom">
        <slot name="bottom"></slot>
        <div class="list-right" :style="{ width: size.rightWidth}">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hcList',
  props: {
    size: {
      type: Object,
      default () {
        return {
          leftWidth: '20%',
          rightWidth: '30%'
        }
      }
    }
  }
}
</script>
