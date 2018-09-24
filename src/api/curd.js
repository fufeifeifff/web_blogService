import request from '@/utils/request'

export default function crud(prefix) {
  var path = prefix
  if (path.indexOf('/') !== 0) {
    path = prefix
  }

  return {
    importData: function(formdata) {
      return request.post(path + '/import', formdata)
    },
    importDataOrder: function(formdata) {
      return request.post(path + '/importorder', formdata)
    },
    importDataxml: function(formdata) {
      return request.post(path + '/importxml/data', formdata)
    },
    list: function(params) {
      console.log('api list')
      return request.post(path + '/list', params)
    },
    filter: function(params) {
      console.log('api filter')
      return request.get(path, { params: params })
    },
    checkCardId: function(params) {
      return request.post(path + '/' + params)
    },
    delete: function(id) {
      return request.delete(path + '/' + id)
    },
    get: function(id) {
      // console.log('api list')
      return request.get(path + '/' + id)
    },
    create: function(domain) {
      return request.post(path + '/add', domain)
    },
    update: function(domain) {
      return request.put(path + '/' + domain.id, domain)
    },
    getServiceR: function(domain) {
      return request.post(path + '/service', domain)
    }
  }
}
