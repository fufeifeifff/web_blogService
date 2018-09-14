<template>
  <el-dialog class="err-dialog" title="操作失败" width="366px" hight="182px" :visible.sync="isErr">
    <el-row :gutter="0">
      <el-col :span="24">
        <div class="dialog-content">
          <img src="../assets/img/icon_err.png">
          <span>{{err.message && err.message.indexOf('timeout') >= 0 ? '连接超时' : err.message}}</span>
        </div>
      </el-col>
      <el-col v-if="err.code!=undefined"  :span="24">
        <div class="dialog-bottom">
          <span >错误代码[{{err.code}}]</span>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
export default {
  name: 'errorDialog',
  data () {
    return {
      isErr: false,
      err: {}
    }
  },
  methods: {
    // 错误或者失败的提示信息
    show (error) {
      console.log('showError')
      this.err = error
      this.isErr = true
      console.log(error.code)
      this.$emit('changeErrDialogShow', this.isErr)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
