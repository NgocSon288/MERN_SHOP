import userService from '../../services/userService'
import * as TYPE from './authType'
import setAuthToken from '../../utils/setAuthToken'
import { LOCAL_STORAGE_TOKEN_NAME } from './../../common/constants'

const loadState = async (state) => {
  setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])

  try {
    const res = await userService.checkAuth()

    if (res.success) {
      state = {
        authLoading: false,
        isAuthenticated: true,
        permission: res.data._doc.categoryUser.name,
        user: res.data,
      }
    }
  } catch (error) {
    console.log('error', error)
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
    setAuthToken(null)
    state = {
      authLoading: false,
      isAuthenticated: false,
      permission: '',
      user: null,
    }
  }
  return state
}

export const authReducer = async (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE.SET_AUTH: {
      return await loadState(state)
    }

    case TYPE.LOGIN: {
      const { user } = payload 
      try {
        const res = await userService.login(user) 

        if (res.success) { 
          localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.accessToken)
        } 
        return await loadState(state)
      } catch (error) {
        console.log('error', error)
        alert(error.response.data.message)
        if (error.message) return error.message
        else return { success: false, message: error.message }
      }
    }

    case TYPE.REGISTER: {
      const { user } = payload
      try {
        const res = await userService.create(user)
        if (res.success)
          localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.accessToken)

        return await loadState(state)
      } catch (error) {
        if (error.res.data) return error.res.data
        else return { success: false, message: error.message }
      }
    }

    case TYPE.EDIT: {
      const { user } = payload
      console.log(user)
      try {
        const res = await userService.update(user) 
        setTimeout(() => {
          alert("Cập nhật thành công")
        }, 200)

        return await loadState(state)
      } catch (error) {
          console.log(error.response.data)
        if (error.response.data) return error.response.data
        else return { success: false, message: error.message }
      }
    }

    case TYPE.LOGOUT: {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
      state = {
        authLoading: false,
        isAuthenticated: false,
        permission: '',
        user: null,
      }

      return state
    }

    default:
      return state
  }
}
