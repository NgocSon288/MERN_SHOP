import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { BrandContext } from './../../../contexts/admin/BrandContext'
import * as BRAND_TYPE from './../../../reducers/admin/brandType'

export default function EditBrand() {
  const [data, setData] = useState({
    name: '',
    description: '',
    logo: '',
    _id: '',
    fileUpload: null,
  })
  const { brands, dispatch } = useContext(BrandContext)

  useEffect(() => {
    var location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const id = location.substring(index)

    if (brands && brands.length > 0) {
      const brand = brands.find((b) => b._id === id)
      setData({
        ...data,
        name: brand.name,
        description: brand.description,
        logo: brand.logo,
        _id: brand._id,
      })
    }
  }, [brands])

  const onChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onChangeImage = (e) => {
    setData({ ...data, fileUpload: e.target.files[0] })
  }

  const onSubmit = async (e) => {
    if (!data.name || !data.description) {
      alert('Dữ liệu không hợp lệ!')
      return
    }

    try {
      dispatch({
        type: BRAND_TYPE.EDIT_BY_ID,
        payload: {
          brand: { ...data },
        },
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Form style={{width: '40%'}}>
      <FormGroup>
        <Label for='name'>Tên nhãn hiệu</Label>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Nhập tên nhãn hiệu'
          value={data.name}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Mô tả</Label>
        <Input
          type='text'
          name='description'
          id='description'
          placeholder='Nhập mô tả'
          value={data.description}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='image'>Hình ảnh</Label>
        <Input type='file' name='image' onChange={(e) => onChangeImage(e)} />
        <div className='d-flex'>
          {data.fileUpload && (
            <img
              src={URL.createObjectURL(data.fileUpload)}
              alt={data.fileUpload}
              width='220'
              height='48'
            />
          )}
          {!data.fileUpload && (
            <img
              src={`http://localhost:3000/images/brand/${data.logo}`}
              alt={data.logo}
              width='220'
              height='48'
            />
          )}
        </div>
      </FormGroup>

      <Button color='primary' className='mb-2' onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
      <br />
      <Link to='/admin/brand'>Quay về</Link>
    </Form>
  )
}
