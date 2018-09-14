import * as types from './mutation-types'
import sessionstorage from '../../utils/sessionstorage'
import localstorage from '../../utils/localstorage'
import UserModel from '../../models/user'

export async function login ({ commit }, opts) {
  console.log('getToken')
  const val = opts
  await sessionstorage.setItem('token', val.access_token)
  await localstorage.setItem('token', val.access_token)

  const _opts = {
    token: val.access_token,
    systemId: 5
  }
  try {
    const userInfo = await UserModel.getUserInfo(_opts)
    commit(types.USER_INFO, userInfo)
    await sessionstorage.setItem('userInfo', userInfo.data)
    await localstorage.setItem('userInfo', userInfo.data)
  } catch (err) {
    commit(types.USER_INFO, null)
    throw err
  }
}
