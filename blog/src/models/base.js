/**
 * 此为model基类,所有业务层model都要继承此类
 */
import axios from 'axios'
import replaceVars from '../utils/replace-vars.js'
// import date from '../utils/date.js'

/**
 * 默认查询query参数配置
 */
// const DEFAULT_PARAMS = {
//   CLIENT: 'web', // 开发模式下，没有 cordova 对象，默认给值 'browser'
//   TIMESTAMP: date(+new Date(), 'yyyy-MM-dd h:m:s')
// }

// const signBase = {
//   client: DEFAULT_PARAMS.CLIENT,
//   timestamp: DEFAULT_PARAMS.TIMESTAMP
// }

const handleError = error => {
  const message = (error.data && error.data.message) || error.message || 'Unknow Error'
  const code = (error.data && error.data.code) || error.code || error.status || 400
  const err = new Error(message)
  err.code = code
  err.data = error.data
  console.log('[ERROR]', err.code, err.message)
  return err
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 50000
})

// 请求拦截器
// service.interceptors.request.use(async (config) => {
//   const token = await sessionstorage.getItem('token')
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`
//   }
//   return config
// }, err => {
//   return Promise.reject(err)
// })

// 响应拦截器
service.interceptors.response.use(response => {
  return response.data
}, err => {
  const response = err.response

  if (response) {
    const {status} = response
    if (status === 401 && global.location.hash !== '/index') {
      global.location.replace('/index')
    }
    return Promise.reject(handleError(response))
  } else {
    return Promise.reject(handleError(err))
  }
})

/**
 * 数据模型，用来封装业务数据请求
 */
export default class Base {
  /**
   * 解析 params
   * @param {Object} _signParams
   * @returns {String}
   */
  _makeURLParams (_signParams) {
    const _params = Object.keys(_signParams)
    let _urlParams = '?'
    for (let i = 0; i < _params.length; i++) {
      _urlParams += `${_params[i]}=${_signParams[_params[i]]}`
      if (i < _params.length - 1) _urlParams += '&'
    }
    return _urlParams
  }

  /**
   * 拼接参数url
   */
  _handleURLConnectionParams (url, data) {
    var reg = new RegExp(/{[a-zA-Z]*}/, 'g')
    var parameters = url.match(reg)
    if (parameters != null && parameters.length > 0) {
      parameters.forEach(function (item, index) {
        var tmp = item.replace('{', '').replace('}', '')
        if (data === undefined) {
          url = encodeURI(encodeURI(url.replace('/' + item, '')))
        } else {
          url = encodeURI(encodeURI(url.replace(item, data[tmp])))
        }
      })
    }
    return url
  }

  /**
   * 组织接口参数
   * @param {Object} options
   * @returns {Object}
   */
  _handleHttpOptions (options) {
    let {url, vars = {}, params = {}} = options
    if (!url) throw new Error('please set param  "url" ! ')
    if (~url.indexOf('${')) {
      url = replaceVars(url, vars)
    }
    url += this._makeURLParams({...params})
    url = this._handleURLConnectionParams(url, options.data)
    options.url = encodeURI(encodeURI(url))
    return options
  }

  async httpGet (options) {
    let {url, data, params = {}} = options
    if (!url) throw new Error('please set param  "url" ! ')
    url += this._makeURLParams({...params, ...data})
    url = this._handleURLConnectionParams(url, options.data)
    url = encodeURI(url)
    return service({method: 'get', url})
  }

  async httpDownload (options) {
    let {url, data, params = {}} = options
    if (!url) throw new Error('please set param  "url" ! ')
    url += this._makeURLParams({...params, ...data})
    url = this._handleURLConnectionParams(url, options.data)
    return service({method: 'get', url, responseType: 'blob'})
  }

  async httpPost (options) {
    options = this._handleHttpOptions(options)
    return service({
      method: 'post',
      url: options.url,
      data: options.data
    })
  }

  async httpPut (options) {
    options = this._handleHttpOptions(options)
    return service({
      method: 'put',
      url: options.url,
      data: options.data
    })
  }

  async httpDelete (options) {
    options = this._handleHttpOptions(options)
    return service({
      method: 'delete',
      url: options.url,
      data: options.data
    })
  }
}
