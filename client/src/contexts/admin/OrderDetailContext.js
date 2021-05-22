import React, { createContext} from 'react'

import { orderDetailReducer } from '../../reducers/admin/orderDetailReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function

export const OrderDetailContext = createContext()

export default function OrderDetailContextProvider({ children }) {
  const [orderDetails, dispatch] = useAsyncReducer(orderDetailReducer, [])

  const orderDetailContextData = {
    orderDetails,
    dispatch,
  }

  return (
    <OrderDetailContext.Provider value={orderDetailContextData}>
      {children}
    </OrderDetailContext.Provider>
  )
}
