import React, { useContext, useEffect, useState } from 'react'
import { Link, history } from 'react-router-dom'
import { AuthContext } from './../../../contexts/client/AuthContext'
import * as AUTH_TYPE from './../../../reducers/client/authType'

import './LoginForm.css'

export default function LoginForm() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const { authState, dispatch } = useContext(AuthContext)
 
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: AUTH_TYPE.LOGIN,
      payload: { user },
    })
  }



  return (
    <div className='body-class'>
      <div className='content'>
        <div className='block text'>
          <div className='login-form'>
            <h1 className='text-center'>Đăng nhập</h1>
            <div>
              <form action='' method='' onSubmit={(e) => onSubmit(e)}>
                <p>Tài khoản</p>
                <input
                  type='text'
                  className='name color-transparent text-input'
                  name='username'
                  value={user.username}
                  onChange={(e) => onChange(e)}
                />
                <p className='mt-5'>Mật khẩu</p>
                <input
                  type='password'
                  className='password color-transparent text-input'
                  name='password'
                  value={user.password}
                  onChange={(e) => onChange(e)}
                />
                <label className='anim'>
                  <input type='checkbox' />
                  <span> Nhớ tài khoản?</span>
                </label>
                <input
                  type='submit'
                  className='btn-login w-100'
                  value='Đăng nhập'
                ></input>
              </form>
            </div>
            <div className='foot-login row mt-4 w-100'>
              <h6 className='col-6'>
                <Link>Quên mật khẩu?</Link>
              </h6>
              <h6 className='col-6 text-right'>
                <Link to='/account/register'>Đăng ký</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
