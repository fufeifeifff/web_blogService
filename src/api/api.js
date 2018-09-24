import crud from './curd'
import request from '@/utils/request'

var API = {}

API.user = crud('op-users')
API.app = {
  login: function(param) {
    return request.post('/login/', param)
  },
  getInfo: function() {
    return request({
      url: '/me',
      method: 'post'
    })
  },
  logout: function() {
    return request({
      url: '/logout',
      method: 'post'
    })
  },
  resetPassword: function(params) {
    return request.post('/op-users/resetPassword', params)
  }
}
API.role = function() {
  return request.get('/op-roles/all')
}

export default API
