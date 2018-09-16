import crud from './builder'
import request from '@/utils/request'

var API = {}

API.user = crud('user')


API.app = {
  login: function(param) {
    return request.post('/login', param)
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

}

API.fs = {}
API.fs.filter = function(filter) {
  return request.get('/files', { params: filter })
}
API.fs.delete = function(id) {
  return request.delete('/files/' + id)
}

API.fs.upload = function(params) {
  return request.post('/files', params)
}

export default API
