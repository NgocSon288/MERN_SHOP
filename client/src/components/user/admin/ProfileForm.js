import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../../contexts/client/AuthContext'
import * as AUTH_TYPE from '../../../reducers/client/authType'

export default function ProfileForm() {
  const [user, setUser] = useState({})

  const { authState, dispatch } = useContext(AuthContext)

  useEffect(() => {
    dispatch({
      type: AUTH_TYPE.SET_AUTH,
      payload: null,
    })
  }, [])
  useEffect(() => {
    if (authState && authState.user) {
      setUser({ ...authState.user._doc })
    }
  }, [authState])

  const onChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onChangeImage = (e) => {
    setUser({ ...user, fileUpload: e.target.files[0] })
  }

  const onSubmit = async (e) => {
    if (!user.name || !user.address || !user.email || !user.phone) {
      alert('Dữ liệu không hợp lệ!')
      return
    } 
    try {
      dispatch({
        type: AUTH_TYPE.EDIT,
        payload: {
          user: { ...user },
        },
      })
    
      window.location.reload()
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Form style={{width: '40%'}}>
      <FormGroup>
        <Label for='name'>Tên</Label>
        <Input
          type='text'
          name='name'
          placeholder='Nhập tên'
          value={user.name}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='name'>Địa chỉ</Label>
        <Input
          type='text'
          name='address'
          placeholder='Nhập địa chỉ'
          value={user.address}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='name'>Email</Label>
        <Input
          type='text'
          name='email'
          placeholder='Nhập email'
          value={user.email}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='name'>Số điện thoại</Label>
        <Input
          type='text'
          name='phone'
          placeholder='Nhập số điện thoại'
          value={user.phone}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='name'>Loại thành viên</Label>
        <Input
          type='text'
          name='category'
          value={user.categoryUser && user.categoryUser.name}
          readonly
        />
      </FormGroup>

      <FormGroup>
        <Label for='image'>Hình ảnh</Label>
        <Input type='file' name='image' onChange={(e) => onChangeImage(e)} />
        <div className='d-flex'>
          {user.fileUpload && (
            <img
              src={URL.createObjectURL(user.fileUpload)}
              alt={user.fileUpload}
              width='400'
            />
          )}
          {!user.fileUpload && (
            <img
              src={`http://localhost:3000/images/user/${user.image}`}
              alt={user.image}
              width='100%'
            />
          )}
        </div>
      </FormGroup>

      <Button color='primary' className='mb-2' onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
      <br />
      <Link to='/admin/'>Quay về</Link>
    </Form>
  )
}
