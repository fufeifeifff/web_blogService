/**
 * 对sessionStorage的封装
 */
export default {
  /**
   * 获取sessionStorage
   * @param {string} name - 名称
   * @returns {promise} 获取到的值
   */
  getItem (name) {
    return new Promise((resolve) => {
      const value = global.sessionStorage.getItem(name)
      if (value) {
        let storage = null
        try {
          storage = JSON.parse(value)
        } catch (e) {
          storage = value
        }
        resolve(storage)
      } else {
        resolve(null)
      }
    })
  },

  /**
   * 设置 获取sessionStorage
   * @param {string} name - 设置名称
   * @param {object} json - 设置值
   * @returns {promise} 设置成功的值
   */
  setItem (name, json) {
    return new Promise((resolve) => {
      const jsonString = typeof json === 'object' ? JSON.stringify(json) : json
      global.sessionStorage.setItem(name, jsonString)
      resolve(json)
    })
  },

  /**
  * 删除sessionStorage
  * @param {string} name - 名称
  * @returns {promise} 删除成功
  */
  removeItem (name) {
    global.sessionStorage.removeItem(name)
    return Promise.resolve()
  }
}
