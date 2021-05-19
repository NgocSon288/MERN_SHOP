import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Spinner } from 'reactstrap'

import RegisterForm from '../../../components/user/client/RegisterForm.js'
import { AuthContext } from '../../../contexts/client/AuthContext'
import * as AUTH_TYPE from '../../../reducers/client/authType'

export default function RegisterAccount() {
  const { authState, dispatch } = useContext(AuthContext)

  let body = <></>

  useEffect(() => {
    dispatch({
      type: AUTH_TYPE.SET_AUTH,
      payload: null,
    })
  }, [])
  useEffect(() => {}, [authState])

  if (authState.authLoading) {
    body = (
      <div
        className='d-flex justify-content-center mt-2'
        style={{ height: '100%' }}
      >
        <Spinner color='primary' />
      </div>
    )
  } else if (authState.isAuthenticated) {
    body = <Redirect to='/' />
  } else {
    body = <RegisterForm />
  }

  return body
}
