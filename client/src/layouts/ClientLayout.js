import React from 'react'

import ClientHeader from './../components/partials/client/ClientHeader'
import ClientFooter from '../components/partials/client/ClientFooter'

export default function ClientLayout(props) {
  return (
    <React.Fragment>
      <ClientHeader /> 
      
      {props.children}
      
      <ClientFooter />
    </React.Fragment>
  )
}
