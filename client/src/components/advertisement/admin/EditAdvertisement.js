import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { AdvertisementContext } from '../../../contexts/admin/AdvertisementContext'
import * as ADVERTISEMENT_TYPE from '../../../reducers/admin/advertisementType'

export default function EditAdvertisement() {
  const [data, setData] = useState({
    name: '',
    description: '',
    image: '',
    url: '',
    displayOrder: 0,
    _id: '',
    fileUpload: null,
  })
  const { advertisements, dispatch } = useContext(AdvertisementContext)

  useEffect(() => {
    var location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const id = location.substring(index)

    if (advertisements && advertisements.length > 0) {
      const advertisement = advertisements.find((b) => b._id === id)
      setData({
        ...data,
        name: advertisement.name,
        description: advertisement.description,
        image: advertisement.image,
        url: advertisement.url,
        displayOrder: advertisement.displayOrder,
        _id: advertisement._id,
      })
    }
  }, [advertisements])

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
        type: ADVERTISEMENT_TYPE.EDIT_BY_ID,
        payload: {
          advertisement: { ...data },
        },
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
            [...advertisements].map((_, item) => {
              if (item == data.displayOrder)
                return <option selected>{item}</option>
              else return <option>{item}</option>
            })}
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
              width='800'
            />
          )}
          {!data.fileUpload && (
            <img
              src={`http://localhost:3000/images/advertisement/${data.image}`}
              alt={data.image}
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
