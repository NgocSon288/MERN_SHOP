import React, { createContext, useEffect } from 'react'

import { orderReducer } from '../../reducers/client/orderReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as ORDER_TYPE from './../../reducers/client/orderType'

export const OrderContext = createContext()

export default function ClientOrderContextProvider({ children }) {
  const [orders, dispatch] = useAsyncReducer(orderReducer, [])

  useEffect(() => {}, [])

  const orderContextData = {
    orders,
    dispatch,
  }

  return (
    <OrderContext.Provider value={orderContextData}>
      {children}
    </OrderContext.Provider>
  )
}
