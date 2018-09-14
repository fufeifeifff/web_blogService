/**
 * 日期处理
 * @param value  要处理的时间戳
 *        type  匹配格式
 */

export default function (value, type) {
  if (!value) {
    return
  }

  // 避免任何数值都能使用这个过滤器
  if (/[^0-9]/.test(value)) {
    return console.error('target value should be a number.')
  }

  if (!type) {
    // 若参数不存在或者参数无非匹配，则默认显示年月日
    type = 'yyyy-MM-dd'
  } else if (type === 'all') {
    // 参数：all，期望全部显示
    type = 'yyyy-MM-dd h:m:s'
  }

  /* eslint-disable no-extend-native */
  Date.prototype.format = function (format) {
    const date = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S+': this.getMilliseconds()
    }

    if (/(y+)/i.test(format)) {
      /* eslint-disable max-len, no-nested-ternary */
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
      /* eslint-enable */
    }

    for (let k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        /* eslint-disable max-len, no-nested-ternary */
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? (date[k].toString().length === 1 ? '0' + date[k] : date[k]) : ('00' + date[k]).substr(('' + date[k]).length))
        /* eslint-enable */
      }
    }
    return format
  }
  /* eslint-enable */

  return new Date(parseInt(value, 10)).format(type)
}
