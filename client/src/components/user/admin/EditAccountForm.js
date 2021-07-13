import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../../contexts/client/AuthContext'
import { UserContext } from '../../../contexts/admin/UserContext'
import * as AUTH_TYPE from '../../../reducers/client/authType.js'
import * as USER_TYPE from '../../../reducers/admin/userType.js'

export default function EditAccountForm() {
  const [account, setAccount] = useState({
    username: '',
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  let { authState, dispatch } = useContext(AuthContext)
  let { dispatch: userDispatch } = useContext(UserContext)

  useEffect(() => {
    dispatch({
      type: AUTH_TYPE.SET_AUTH,
      payload: null,
    })
  }, [])

  useEffect(() => { 
    if (authState && authState.user && authState.user._doc) {
      setAccount({ ...account, username: authState.user._doc.username })
    }
  }, [authState])

  const onChange = async (e) => {
    const newaccount = { ...account, [e.target.name]: e.target.value }

    setAccount(newaccount)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (
      !account.username ||
      !account.password ||
      !account.newPassword ||
      !account.confirmNewPassword
    ) {
      alert('Dữ liệu không hợp lệ!')
      return
    }

    if (account.newPassword !== account.confirmNewPassword) {
      alert('Nhập lại mật khẩu không chính xác!')
      return
    }

    userDispatch({
      type: USER_TYPE.EDIT_ACCOUNT,
      payload: { account },
    })

    setAccount({
      ...account,
      password: '',
      newPassword: '',
      confirmNewPassword: '',
    })
  }

  return (
    <Form style={{width: '40%'}}>
      <FormGroup>
        <Label for='username'>Tài khoản</Label>
        <Input
          type='text'
          name='username'
          placeholder='Nhập tài khoản'
          value={account.username}
          onChange={(e) => onChange(e)}
          readOnly={true}
        />
      </FormGroup>
      <FormGroup>
        <Label for='password'>Mật khẩu cũ</Label>
        <Input
          type='password'
          name='password'
          placeholder='Nhập mật khẩu cũ'
          value={account.password}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='newPassword'>Mật khẩu mới</Label>
        <Input
          type='password'
          name='newPassword'
          placeholder='Nhập mật khẩu mới'
          value={account.newPassword}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='confirmNewPassword'>Xác nhận mật khẩu</Label>
        <Input
          type='password'
          name='confirmNewPassword'
          placeholder='Nhập lại mật khẩu mới'
          value={account.confirmNewPassword}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>

      <Button color='primary' className='mb-2' onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
      <br />
      <Link to='/admin'>Quay về</Link>
    </Form>
  )
}
