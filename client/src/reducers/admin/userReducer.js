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
    case TYPE.EDIT_PERMISSION_BY_ID: {
      try {
        const { _id } = payload

        const res = await userService.updatePermission(_id)

        const user = state.find((u) => u._id === _id)

        if (res.success) {
          setTimeout(() => {
            alert(res.message)
          }, 200)
        }

        user.categoryUser = {
          ...res.data,
        }

        state = [...state]

        return state
      } catch (error) {
        console.log('error', error.response.data.message)
        alert(error.response.data.message)
        return state
      }
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

    case TYPE.DELETE_BY_ID: {
      try {
        const { _id } = payload

        const res = await userService.delete(_id)

        if (res.success) {
          setTimeout(() => {
            alert(res.message)
          }, 200)
        }
        state = state.filter((u) => u._id !== _id)

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
