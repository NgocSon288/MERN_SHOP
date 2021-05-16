import React, { useState, useEffect, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

import { CategoryContext } from '../../../contexts/admin/CategoryContext'
import * as CATEGORY_TYPE from '../../../reducers/admin/categoryType.js'

export default function CreateCategory({ title }) {
  const [data, setData] = useState({
    name: '',
    description: '',
  })
  let { name, description } = data

  const { dispatch } = useContext(CategoryContext)

  useEffect(() => {
    document.title = title
  })

  const onChange = async (e) => {
    const newData = { ...data, [e.target.name]: e.target.value }

    setData(newData)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!data.name || !data.description) {
        alert('Data can not empty')
        return
      }

      dispatch({
        type: CATEGORY_TYPE.CREATE,
        payload: { data },
      })

      setData({
        name: '',
        description: '',
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='container'>
      <h2 className='text-center mb-4'>Cập nhật loại sản phẩm</h2>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for='name'>Tên sản phẩm</Label>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder='Nhập tên'
            value={name}
            onChange={(e) => onChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='description'>Mô tả</Label>
          <Input
            type='textarea'
            name='description'
            id='description'
            placeholder='Nhập mô tả'
            value={description}
            onChange={(e) => onChange(e)}
          />
        </FormGroup>

        <Button color='primary' className='mb-2'>
          Submit
        </Button>
        <br />
        <Link to='/admin/category'>Quay về</Link>
      </Form>
    </div>
  )
}
