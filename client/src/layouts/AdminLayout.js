import React from 'react'

import AdminHeader from './../components/partials/admin/AdminHeader'
import AdminFooter from '../components/partials/admin/AdminFooter'

export default function ClientLayout(props) {
  return (
    <React.Fragment>
      <AdminHeader />
        {props.children}
      <AdminFooter />
    </React.Fragment>
  )
}
