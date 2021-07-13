import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

import { CategoryContext } from '../../../contexts/admin/CategoryContext'
import * as CATEGORY_TYPE from '../../../reducers/admin/categoryType.js'

export default function EditCategory() {
  const [data, setData] = useState({
    name: '',
    description: '',
    _id: '',
  })

  let { categories, dispatch } = useContext(CategoryContext)

  useEffect(() => { 

    var location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const id = location.substring(index)

    if (categories && categories.length > 0) {
      const res = categories.find((item) => item._id === id)
      setData({ ...res })
    }
  }, [categories])

  useEffect(() => { 
  }, [data])

  const onChange = async (e) => {
    const newData = { ...data, [e.target.name]: e.target.value }

    setData(newData)
  }

  const onSubmit = async (e) => {
    e.preventDefault() 
    if (!data.name || !data.description) {
      alert('Dữ liệu không hợp lệ!')
      return
    }

    dispatch({
      type: CATEGORY_TYPE.EDIT_BY_ID,
      payload: { data },
    })
  }

  return (
      <Form style={{width: '40%'}}>
        <FormGroup>
          <Label for='name'>Tên sản phẩm</Label>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder='Nhập tên'
            value={data.name}
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
            value={data.description}
            onChange={(e) => onChange(e)}
          />
        </FormGroup>

        <Button color='primary' className='mb-2' onClick={(e) => onSubmit(e)}>
          Submit
        </Button>
        <br />
        <Link to='/admin/category'>Quay về</Link>
      </Form>
  )
}
