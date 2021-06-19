import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

import AdminHeader from './../components/partials/admin/AdminHeader'
import AdminFooter from '../components/partials/admin/AdminFooter'
import AdminSideBarMenu from './../components/partials/admin/AdminSideBarMenu'
import { AuthContext } from './../contexts/client/AuthContext'
import { Spinner } from 'reactstrap'
import * as AUTH_TYPE from './../reducers/client/authType'

import './../assets/admin/css/style.css'
import './AdminLayout.css'

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
      <div className='d-flex justify-content-center align-items-center mt-2 my-loading'>
        <div className='text-center'>
          <Spinner color='primary' />
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }

  if (!authState.isAuthenticated) return <Redirect to='/account/login' />

  if (authState.permission !== 'ADMIN') return <Redirect to='/' />

  if (authState.isAuthenticated) {
    return (
      <React.Fragment>
        <div className='page-container'>
          <div className='left-content'>
            <div className='mother-grid-inner'>
              <AdminHeader />

              <div className='inner-block'>
                <div className='blank'>{props.children}</div>
              </div>

              <AdminFooter />
            </div>
          </div>
          <AdminSideBarMenu />
          <div className='clearfix'> </div>
        </div>
      </React.Fragment>
    )
  }
}
