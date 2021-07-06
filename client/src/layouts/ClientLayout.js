import React from 'react'

import ClientHeader from './../components/partials/client/ClientHeader'
import ClientFooter from '../components/partials/client/ClientFooter'
import CategoryContextProvider from './../contexts/client/CategoryContext'
import ProductContextProvider from './../contexts/client/ProductSessionContext'
export default function ClientLayout(props) {
  return (
    <React.Fragment>
      <ProductContextProvider>
        <CategoryContextProvider>
          <ClientHeader />
        </CategoryContextProvider>
      </ProductContextProvider>
      {props.children}

      <ClientFooter />
    </React.Fragment>
  )
}
