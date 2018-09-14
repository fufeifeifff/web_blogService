import urls from '../config/urls'
import Base from '../models/base'

class Search extends Base {
  get (opts) {
    return this.httpGet({
      url: urls.search.get,
      data: opts
    })
  }
}

export default new Search()
