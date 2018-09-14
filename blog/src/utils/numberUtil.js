export function fixnum (value) {
  let result = ''
  let num = Number((value || '').toString() || 0).toFixed(2)
  let numAry = num.toString().split('.')
  let preNum = numAry[0]
  let lastNum = numAry[1]

  while (preNum.length > 3) {
    result = ',' + preNum.slice(-3) + result
    preNum = preNum.slice(0, preNum.length - 3)
  }

  if (preNum) {
    result = preNum + result
  }

  return result + '.' + lastNum
}
