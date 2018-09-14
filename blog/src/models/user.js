import urls from '../config/urls'
import loginBase from './userBase'

class Login extends loginBase {
  getUserInfo (opts) {
    return this.httpGet({
      url: urls.user.getUserInfo,
      data: opts
    })
  }
  getToken (opts) {
    return this.httpPost({
      url: urls.user.getToken,
      params: opts
    })
  }
}

export default new Login()
