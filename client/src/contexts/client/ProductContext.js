import React, { createContext, useEffect } from 'react'

import { productReducer } from '../../reducers/client/productReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as PRODUCT_TYPE from './../../reducers/client/productType'

export const ProductContext = createContext()

export default function ProductContextProvider({ children }) {
  const [products, dispatch] = useAsyncReducer(productReducer, [])

  useEffect(() => {
    dispatch({
      type: PRODUCT_TYPE.SET_PRODUCTS,
      payload: null,
    })
  }, [])

  const productContextData = {
    products,
    dispatch,
  }

  return (
    <ProductContext.Provider value={productContextData}>
      {children}
    </ProductContext.Provider>
  )
}
