/**
 *所有API接口url
 */
const urls = {}

/**
 * 业务部分
 * @name urls.search
 */
urls.search = {
  get: '/get'
}

/**
 * 登陆及用户部分
 * @name urls.user
 */
urls.user = {
  getUserInfo: '/getUserInfo', // 获取用户信息
  getToken: '/token'
}
export default urls
