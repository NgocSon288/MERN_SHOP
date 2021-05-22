import React, { createContext, useEffect } from 'react'

import { orderReducer } from '../../reducers/admin/orderReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as ORDER_TYPE from '../../reducers/admin/orderType'

export const OrderContext = createContext()

export default function OrderContextProvider({ children }) {
  const [orders, dispatch] = useAsyncReducer(orderReducer, [])

  useEffect(() => { 
    dispatch({
      type: ORDER_TYPE.SET_ORDERS,
      payload: null,
    }) 
  }, [])

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
