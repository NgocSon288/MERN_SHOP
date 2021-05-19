import React, { createContext, useEffect } from 'react'

import { userReducer } from '../../reducers/admin/userReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as USER_TYPE from './../../reducers/admin/userType'

export const UserContext = createContext()

export default function UserContextProvider({ children }) {
  const [users, dispatch] = useAsyncReducer(userReducer, [])

  useEffect(() => {
    dispatch({
      type: USER_TYPE.SET_USERS,
      payload: null,
    })
  }, [])

  const userContextData = {
    users,
    dispatch,
  }

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  )
}
