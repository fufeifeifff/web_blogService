<template>
  <el-dialog class="err-dialog" title="操作成功" width="366px" hight="182px" :visible.sync="isSuccess">
    <el-row :gutter="0">
      <el-col :span="24">
        <div class="dialog-content">
          <img src="../assets/img/icon_success.png">
          <span>{{successMsg}}</span>
        </div>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
export default {
  name: 'successDialog',
  data () {
    return {
      isSuccess: false,
      successMsg: ''
    }
  },
  methods: {
    // 执行成功的提示信息
    show (msg) {
      console.log('showSuccess')
      this.successMsg = msg
      this.isSuccess = true
      this.$emit('changeSuccessStatus', this.isSuccess)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
