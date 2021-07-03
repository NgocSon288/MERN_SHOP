import userService from '../../services/userService'
import * as TYPE from './userType'

export const userReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_USERS: {
        const res = await userService.getAll()
        state = [...res.data]
        return state
      }
    case TYPE.GET_USERS_BY_ID: {
      const { _id } = payload
      const res = await userService.getById(_id)
      state = res.data
      console.log(state)
      return state
    }
    case TYPE.EDIT_ACCOUNT: {
      try { 
        const {account}  = payload
        const res = await userService.updateAccount(account)
 

        if (res.success) {
          setTimeout(() => {
            alert(res.message)
          }, 200)
        }
  
        return state
      } catch (error) {
        console.log('error', error.response.data.message)
        alert(error.response.data.message)
        return state
      }
    }
    default:
      return state
  }
}
