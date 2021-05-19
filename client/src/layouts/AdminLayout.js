import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import AdminHeader from './../components/partials/admin/AdminHeader'
import AdminFooter from '../components/partials/admin/AdminFooter'
import { AuthContext } from './../contexts/client/AuthContext'
import { Spinner } from 'reactstrap'
import * as AUTH_TYPE from './../reducers/client/authType'

export default function ClientLayout(props) {
  const { authState, dispatch } = useContext(AuthContext)

  useEffect(() => {
    dispatch({
      type: AUTH_TYPE.SET_AUTH,
      payload: null,
    })
  }, [])
  useEffect(() => {}, [authState])

  if (authState.authLoading) {
    return (
      <div className='d-flex justify-content-center mt-2'>
        <Spinner color='primary' />
        <h1>Loading...</h1>
      </div>
    )
  }

  if (!authState.isAuthenticated) return <Redirect to='/account/login' />

  if (authState.permission !== 'ADMIN') return <Redirect to='/' />

  if (authState.isAuthenticated) {
    return (
      <React.Fragment>
        <AdminHeader />
        {props.children}
        <AdminFooter />
      </React.Fragment>
    )
  }
}
