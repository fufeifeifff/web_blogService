/**
 * 用于替换url中的变量
 */

const VARS_REG = /\${([^{]+)}/g

export default function (sourceStr, vars) {
  vars = vars || {}
  return sourceStr.replace(VARS_REG, (m, key) => {
    return vars[key]
  })
}
