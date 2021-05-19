import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { ProductContext } from './../../../contexts/admin/ProductContext'
import { CategoryContext } from './../../../contexts/admin/CategoryContext'
import * as PRODUCT_TYPE from './../../../reducers/admin/productType'

export default function Editproduct({ title }) {
  const [data, setData] = useState({
    name: '',
    price: '',
    content: '',
    category: {},
    image: '',
    _id: '',
    fileUpload: null,
  })

  const { categories } = useContext(CategoryContext)
  const { products, dispatch } = useContext(ProductContext)

  let { name, price, image, content } = data

  useEffect(() => {
    document.title = title

    var location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const id = location.substring(index)

    if (
      products &&
      categories &&
      products.length > 0 &&
      categories.length > 0
    ) {
      const product = products.find((pro) => pro._id === id)
      setData({ ...product })
    }
  }, [categories, products])

  const onSubmit = async (e) => {
    try {
      dispatch({
        type: PRODUCT_TYPE.EDIT_BY_ID,
        payload: {
          product: { ...data },
        },
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const onChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onChangeImage = (e) => {
    const fu = [...e.target.files].map((file) => {
      return {
        key: Math.random() * 1000000,
        val: file,
      }
    })

    setData({ ...data, fileUpload: fu }) // set nguyên files vì chọn nhiềus
  }

  const onClickDeleteImage = (e) => {
    e.preventDefault()

    const swt = e.target.dataset.switch

    if (swt === 'img') {
      let arrImage = image.split('|')
      arrImage = arrImage.filter((item) => item !== e.target.dataset.item)
      setData({ ...data, image: arrImage.join('|') })
    } else {
      const fileU = [...data.fileUpload].filter(
        (item) => item.key != e.target.dataset.key
      )
      setData({ ...data, fileUpload: fileU })
    }
  }

  const onSelectChanged = (e) => {
    const value = e.target.value
    const categoryNew = categories.find((item) => item.name === value)

    setData({ ...data, category: { ...categoryNew } })
  }

  return (
    <Form>
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
        <Label for='price'>Giá</Label>
        <Input
          type='text'
          name='price'
          id='price'
          placeholder='Nhập giá'
          value={price}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='category'>Loại sản phẩm</Label>
        <Input
          type='select'
          name='category'
          id='category'
          onChange={(e) => onSelectChanged(e)}
        >
          {categories &&
            [...categories].map((item) => {
              if (item._id === data.category._id)
                return <option selected>{item.name}</option>
              else return <option>{item.name}</option>
            })}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='content'>Nội dung</Label>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onBlur={(event, editor) => {
            const value = editor.getData()
            setData({ ...data, content: value })
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for='image'>Hình ảnh</Label>
        <Input
          type='file'
          name='image'
          id='image'
          onChange={(e) => onChangeImage(e)}
          multiple
        />
        <div className='d-flex'>
          {/* // eslint-disable-next-line array-callback-return */}
          <Row className='w-100 ml-1'>
            {image &&
              image.split('|').map(
                (item) =>
                  item && (
                    <Col xm='3' sm='3' className='mt-4 px-1'>
                      <div className='wrap-image px-0'>
                        <img
                          src={`http://localhost:3000/images/product/${item}`}
                          alt={item}
                          width='100%'
                          height='200'
                        />
                        <button
                          className='btn btn-danger'
                          data-item={item}
                          data-switch='img'
                          onClick={(e) => onClickDeleteImage(e)}
                        >
                          Delete
                        </button>
                      </div>
                    </Col>
                  )
              )}
            {data.fileUpload &&
              [...data.fileUpload].map((item) => (
                <Col xm='3' sm='3' className='mt-4 px-1'>
                  <div className='wrap-image'>
                    <img
                      src={URL.createObjectURL(item.val)}
                      alt={item}
                      width='100%'
                      height='200'
                    />
                    <button
                      className='btn btn-danger'
                      data-key={item.key}
                      data-switch='file'
                      onClick={(e) => onClickDeleteImage(e)}
                    >
                      Delete
                    </button>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </FormGroup>

      <Button color='primary' className='mb-2' onClick={(e) => onSubmit(e)}>
        Submit
      </Button>
      <br />
      <Link to='/admin/product'>Quay về</Link>
    </Form>
  )
}
