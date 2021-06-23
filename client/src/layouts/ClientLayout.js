import React from 'react'

import ClientHeader from './../components/partials/client/ClientHeader'
import ClientFooter from '../components/partials/client/ClientFooter'
import CategoryContextProvider from './../contexts/client/CategoryContext.js'
// import ProductContextProvider from './../contexts/client/ProductSessionContext'
export default function ClientLayout(props) {
  return (
    <React.Fragment>
      <CategoryContextProvider>
        <ClientHeader />
      </CategoryContextProvider>
      {props.children}

      <ClientFooter />
    </React.Fragment>
  )
}
