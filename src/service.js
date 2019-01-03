import Vue from 'vue'
import store from './store'

const openDialog = () => {
// function (component, options, closeCallback) {
  let dom = document.createElement('div')
  let dialog = '<el-dialog width="30%" :visible="show" ' +
    'title="提示"><span>需要注意的是内容是默认不居中的</span></el-dialog>'
  // let content = '<dialog-content @close="closeDialog" @confirm="confirmDialog" ' +
  //   '@close-dialog="closeDialog" @update-title="updateTitle" ref="dialog-content" :params="params" v-bind="params" ></dialog-content>'
  // let title = '<span slot="title" class="el-dialog__title">{{title}}&nbsp;</span>'
  // let footer = '<span slot="footer" class="dialog-footer"><ut-button @btn-click="closeDialog" name="关闭" v-if="buttons[0]==1" />' +
  //   '<ut-button :btn-plain="false" @btn-click="confirmDialog(\'saveClose\')" name="保存关闭" v-if="buttons[1]==1" />' +
  //   '<ut-button type="primary" :btn-plain="false" @btn-click="confirmDialog(\'save\')" name="保存" v-if="buttons[2]==1" />' +
  //   '<ut-button type="primary" :btn-plain="false" @btn-click="confirmDialog(\'send\')" name="发送" v-if="buttons[3]==1" />' +
  //   '<ut-button type="primary" :btn-plain="false" @btn-click="confirmDialog(\'save\')" name="确定" v-if="buttons[4]==1" /></span>'

  document.getElementsByTagName('body')[0].appendChild(dom)

  /* eslint-disable no-new */
  new Vue({
    el: dom,
    store,
    data: function () {
      return {
        ...{
          title: '123',
          show: true,
          width: '50%',
          top: '6vh',
          buttons: [1, 0, 1],
          value: null
        }// ,
        // ...options,
        // params: {
        //   isDialog: true,
        //   ...options.params
        // }
      }
    },
    template: dialog// , // .format(content, title, footer),
    // methods: {
    //   handleClose (done) {
    //     done()
    //   },
    //   close () {
    //     closeCallback && closeCallback(this.value)
    //     this.$destroy()
    //     this.$el.remove()
    //   },
    //   closeDialog (value) {
    //     this.value = value
    //     this.show = false
    //   },
    //   confirmDialog (type) {
    //     this.$refs['dialog-content'].confirm && this.$refs['dialog-content'].confirm(type)
    //   },
    //   updateTitle (title) {
    //     this.title = title
    //   }
    // },
    // components: {
    //   dialogContent: component
    // }
  })
}

export default {
  openDialog
}
