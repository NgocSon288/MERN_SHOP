import React, { useContext, useEffect, useState } from 'react'
import { Link, history } from 'react-router-dom'
import { AuthContext } from './../../../contexts/client/AuthContext'
import * as AUTH_TYPE from './../../../reducers/client/authType'

import './RegisterForm.css'

export default function RegisterForm() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    address: '',
    phone: '',
    image: null,
    fileUpload: null,
  })

  const { authState, dispatch } = useContext(AuthContext)

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onChangeImage = (e) => {
    setUser({ ...user, fileUpload: e.target.files[0] }) // set nguyên files vì chọn nhiềus
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (
      !user.name ||
      !user.username ||
      !user.password ||
      !user.email ||
      !user.address ||
      !user.fileUpload ||
      !user.phone
    ) {
      alert('Vui lòng nhập đầy đủ thông tin!') 
      return
    }

    dispatch({
      type: AUTH_TYPE.REGISTER,
      payload: { user },
    })
  }

  return (
    <div className='body-class'>
      <div className='content'>
        <div className='block block-register text'>
          <div className='registers-form my-registers-form'>
            <h1 className='text-center'>Đăng ký</h1>
            <div>
              <form
                action=''
                method=''
                className='row'
                onSubmit={(e) => onSubmit(e)}
              >
                <div className='col'>
                  <p>Họ và tên</p>
                  <input
                    type='text'
                    className='name color-transparent text-input'
                    name='name'
                    value={user.name}
                    onChange={(e) => onChange(e)}
                  />
                  <p className='mt-5'>Tài khoản</p>
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
                  <p className='mt-5'>Email</p>
                  <input
                    type='text'
                    className='name color-transparent text-input'
                    name='email'
                    value={user.email}
                    onChange={(e) => onChange(e)}
                  />
                  <p className='mt-5'>Số điện thoại</p>
                  <input
                    type='text'
                    className='name color-transparent text-input'
                    name='phone'
                    value={user.phone}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='col'>
                  <p className=''>Địa chỉ</p>
                  <input
                    type='text'
                    className='name color-transparent text-input'
                    name='address'
                    value={user.address}
                    onChange={(e) => onChange(e)}
                  />
                  <p className='mt-5'>Hình ảnh</p>
                  <input
                    type='file'
                    className='name color-transparent text-input w-100'
                    name='image'
                    onChange={(e) => onChangeImage(e)}
                  />
                  {user.fileUpload && (
                    <img
                      src={URL.createObjectURL(user.fileUpload)}
                      alt='Avatar'
                      width='100%'
                      height='330'
                      className='mt-2'
                    />
                  )}

                  {!user.fileUpload && (
                    <img
                      src='http://localhost:3000/images/common/user-register-icon.jpeg'
                      alt='Avatar'
                      width='100%'
                      height='330'
                      className='mt-2'
                    />
                  )}
                  <input
                    type='submit'
                    className='btn-register w-100'
                    value='Đăng ký'
                  ></input>
                </div>
              </form>
            </div>
            <div className='foot-login row mt-4 w-100'>
              <h6 className='col-6'>{/* <Link>Quên mật khẩu?</Link> */}</h6>
              <h6 className='col-6 text-right'>
                <Link to='/account/login'>Đăng nhập</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
