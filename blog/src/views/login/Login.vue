<template>
  <div class="login-container">
    <div class="login-logo"></div>
    <el-form :model="loginForm" ref="loginForm" auto-complete="on" label-position="left" label-width="0px" class="login-form">
      <div class="title">博客系统</div>
      <div class="error" v-if="errorMessage"><i class="el-icon-warning"></i><span>&nbsp;{{errorMessage}}</span></div>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input name="password" type="password" v-model="loginForm.password" @keyup.enter.native="handleLogin" auto-complete="new-password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item class="rememberme">
        <el-checkbox v-model="loginForm.rememberme">一周内免登录</el-checkbox>
      </el-form-item>
      <el-form-item class="confirm">
        <el-button class="confirm-btn" type="primary" :loading="loading" @click.native.prevent="handleLogin">登 录
        </el-button>
      </el-form-item>
    </el-form>
    <div class="login-foot">
      无法登录？<a class="support-link" href="#">联系管理员</a>
    </div>
    <err-dialog ref="err_dlg" v-on:changeErrDialogShow="changeErrStatus($event)"></err-dialog>
  </div>
</template>
<script type="text/babel">
import {mapActions} from 'vuex'
import ErrDialog from '../../components/ErrDialog'

export default {
  data () {
    return {
      loginForm: {
        username: 'admin', // 'admin',
        password: '12345678', // '12345678',
        rememberme: false
      },
      errorMessage: '',
      loading: false,
      isErr: false,
      err: []
    }
  },
  components: {
    ErrDialog
  },

  methods: {
    ...mapActions(['login']),
    // 用户登陆
    async handleLogin () {
      if (!this.loginForm.username) {
        this.errorMessage = '请输入用户名'
        return
      }

      if (!this.loginForm.password) {
        this.errorMessage = '请输入密码'
        return
      }

      this.loading = true
      this.errorMessage = ''

     /* try {
        await this.login(this.loginForm)
        this.$router.replace({
          name: 'dashboard'
        })
        console.log('登陆成功')
      } catch (error) {
        this.$refs.err_dlg.show(error)
      }*/
      this.$router.push({
        path: '/index'
      })

      this.loading = false
    },
    // 错误提示信息
    changeErrStatus (data) {
      this.isErr = data
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../../assets/img/login-bg.jpg') center center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .login-logo {
      width: 130px;
      height: 122px;
      // background: url('../../assets/img/login-logo@2x.png') center center no-repeat;
      background-size: cover;
    }

    .login-form {
      border-radius: 5px;
      background: #fafafa;
      box-shadow: 5px 5px 120px rgba(0, 0, 0, 0.15);
      width: 640px;
      margin-top: 30px;
      padding: 42px 75px;

      .title {
        font-size: 24px;
        font-weight: bold;
        color: #000000;
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 44px;
      }

      .error {
        color: #ff5722;
        text-align: center;
        margin-bottom: 30px;
      }

      .el-input__inner {
        border-radius: 3px;
        padding: 23px;
        font-size: 16px;
        height: 70px;
        border: none;
        background: #ffffff;
        color: #000000;
        border: 1px solid #c9c9c9;
      }

      .el-input__inner:focus {
        border: 1px solid #d22833;
      }

      .el-input__inner::-webkit-input-placeholder {
        color: #000000;
      }

      .el-input__inner:-moz-placeholder {
        color: #000000;
      }

      .el-input__inner::-moz-placeholder {
        color: #000000;
      }

      .el-input__inner:-ms-input-placeholder {
        color: #000000;
      }

      .rememberme {
        padding-left: 10px;

        .el-checkbox__label {
          font-size: 16px;
        }

        .el-checkbox__inner {
          border-radius: 50%;
        }
      }

      .confirm {
        margin-bottom: 0;
      }

      .confirm-btn {
        box-shadow: 0px 15px 50px rgba(0, 0, 0, 0.35);
        border: none;
        border-radius: 3px;
        font-size: 18px;
        width: 100%;
        height: 70px;
        background-color: #de0516;
      }
    }

    .login-foot {
      color: rgba(256, 256, 256, 0.75);
      font-size: 14px;
      margin-top: 50px;

      a {
        color: rgba(256, 256, 256, 0.75);
        text-decoration: underline;
      }
    }
  }
</style>
