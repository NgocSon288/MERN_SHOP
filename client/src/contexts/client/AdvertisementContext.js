import React, { createContext, useEffect } from 'react'

import { advertisementReducer } from '../../reducers/client/advertisementReducer'
import useAsyncReducer from '../../reducers/useAsyncReducer' //  dùng để gọi async function
import * as ADVERTISEMENT_TYPE from '../../reducers/client/advertisementType'

export const ClientAdvertisementContext = createContext()

export default function ClientAdvertisementContextProvider({ children }) {
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
    <ClientAdvertisementContext.Provider value={advertisementContextData}>
      {children}
    </ClientAdvertisementContext.Provider>
  )
}
