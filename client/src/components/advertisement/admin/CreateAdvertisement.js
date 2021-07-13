import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { AdvertisementContext } from '../../../contexts/admin/AdvertisementContext'
import * as ADVERTISEMENT_TYPE from '../../../reducers/admin/advertisementType'

export default function CreateAdvertisement() {
  const [data, setData] = useState({
    name: '',
    description: '',
    fileUpload: null,
    url: '',
    displayOrder: 0,
  })
  const { advertisements, dispatch } = useContext(AdvertisementContext)

  useEffect(() => {}, [advertisements])

  const onChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onChangeImage = (e) => {
    setData({ ...data, fileUpload: e.target.files[0] })
  }

  const onSubmit = async (e) => {

    if (!data.name || !data.description || !data.fileUpload) {
      alert('Dữ liệu không hợp lệ')
      return
    }

    try {
      dispatch({
        type: ADVERTISEMENT_TYPE.CREATE,
        payload: {
          advertisement: { ...data },
        },
      })
      setData({
        name: '',
        description: '',
        fileUpload: null,
        url: '',
        displayOrder: 0,
      })
      dispatch({
          type: ADVERTISEMENT_TYPE.SET_ADVERTISEMENTS,
          payload: null
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const onSelectChanged = (e) => {
    const value = e.target.value

    setData({ ...data, displayOrder: value })
  }
  return (
    <Form style={{ width: '40%' }}>
      <FormGroup>
        <Label for='name'>Tên slide</Label>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Nhập tên slide'
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
        <Label for='url'>URL</Label>
        <Input
          type='text'
          name='url'
          id='url'
          placeholder='Nhập mô đường dẫn'
          value={data.url}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='displayOrder'>Thứ tự</Label>
        <Input
          type='select'
          name='displayOrder'
          id='displayOrder'
          onChange={(e) => onSelectChanged(e)}
        >
          {advertisements &&
            Array.from(Array(advertisements.length + 1)).map((_, item) => {
              if (item === data.displayOrder)
                return <option selected>{item}</option>
              else return <option>{item}</option>
            })}
          {advertisements && advertisements.length === 0 && (
            <option selected>0</option>
          )}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='image'>Hình ảnh</Label>
        <Input type='file' name='image' onChange={(e) => onChangeImage(e)} />
        <div className='d-flex'>
          {data.fileUpload && (
            <img
              src={URL.createObjectURL(data.fileUpload)}
              alt={data.fileUpload}
              width='100%'
            />
          )}
        </div>
      </FormGroup>

      <Button color='primary' className='mb-2' onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
      <br />
      <Link to='/admin/advertisement'>Quay về</Link>
    </Form>
  )
}
