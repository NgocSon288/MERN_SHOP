import React, { createContext, useEffect } from 'react'

import { authReducer } from '../../reducers/client/authReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as AUTH_TYPE from '../../reducers/client/authType'

export const AuthContext = createContext()

export default function AccountContextProvider({ children }) {
  const [authState, dispatch] = useAsyncReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    permission: '',
    user: null,
  })

  useEffect(() => {
    // dispatch({
    //   type: AUTH_TYPE.SET_AUTH,
    //   payload: null,
    // })
  },[])

  const authContextData = {
    authState,
    dispatch,
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}
