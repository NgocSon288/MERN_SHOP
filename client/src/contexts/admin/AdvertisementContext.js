import React, { createContext, useEffect } from 'react'

import { advertisementReducer } from '../../reducers/admin/advertisementReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as ADVERTISEMENT_TYPE from '../../reducers/admin/advertisementType'

export const AdvertisementContext = createContext()

export default function BrandContextProvider({ children }) {
  const [advertisements, dispatch] = useAsyncReducer(advertisementReducer, [])

  useEffect(() => {
    dispatch({
      type: ADVERTISEMENT_TYPE.SET_ADVERTISEMENTS,
      payload: null,
    })
  }, [])

  const advertisementContextData = {
    advertisements,
    dispatch,
  }

  return (
    <AdvertisementContext.Provider value={advertisementContextData}>
      {children}
    </AdvertisementContext.Provider>
  )
}
