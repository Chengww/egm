<template>
  <div class="layout layout-horizontal layout-item">
    <div class="list-left" :style="{ width: size.leftWidth}">
      <slot name="left"></slot>
    </div>
    <div class="layout layout-item">
      <div class="list-top" :style="{ height: size.topHeight }">
        <slot name="top"></slot>
      </div>
      <div class="layout layout-horizontal layout-item">
        <div class="list-bottom" :style="{ width: size.bottomWidth }">
          <slot name="bottom"></slot>
        </div>
        <div class="list-right">
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
          bottomWidth: '70%'
        }
      }
    }
  }
}
</script>
