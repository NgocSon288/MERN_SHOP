import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { ProductContext } from './../../../contexts/admin/ProductContext'
import { CategoryContext } from './../../../contexts/admin/CategoryContext'
import { BrandContext } from './../../../contexts/admin/BrandContext'
import * as PRODUCT_TYPE from './../../../reducers/admin/productType'

import './EditProduct.css'

export default function EditProduct() {
  const [data, setData] = useState({
    name: '',
    price: '',
    content: '',
    category: {},
    promotion: '', //1
    description: '', // 1
    isInstallment: false, //
    isFreeship: false, //
    brand: {}, //
    parameter: [],
    image: '',
    _id: '',
    fileUpload: null,
  })

  const { categories } = useContext(CategoryContext)
  const { products, dispatch } = useContext(ProductContext)
  const { brands } = useContext(BrandContext)

  useEffect(() => {
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
      if (product.parameter.length === 0) {
        product.parameter.push({ name: '', value: '' })
      }
      setData({ ...product })
    }
  }, [categories, products])

  const onSubmit = async (e) => {
    convertParameter()
    if (
      !data.name ||
      !data.price ||
      !data.content ||
      !data.promotion ||
      !data.description
    ) {
      alert('Dữ liệu không hợp lệ!')
      return
    }
    try {
      dispatch({
        type: PRODUCT_TYPE.EDIT_BY_ID,
        payload: {
          product: {
            ...data,
            parameter: [...data.parameter.filter((p) => p.name && p.value)],
          },
        },
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const convertParameter = () => {
    setData({
      ...data,
      parameter: [
        ...data.parameter
          .filter((p) => p.name && p.value)
          .map((p) => {
            return { name: p.name.trim(), value: p.value.trim() }
          }),
      ],
    })
  }

  const onChange = async (e) => {
    if (e.target.type === 'checkbox') {
      setData({ ...data, [e.target.name]: e.target.checked })
    } else {
      setData({ ...data, [e.target.name]: e.target.value })
    }
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
      let arrImage = data.image.split('|')
      arrImage = arrImage.filter((item) => item !== e.target.dataset.item)
      setData({ ...data, image: arrImage.join('|') })
    } else {
      const fileU = [...data.fileUpload].filter(
        (item) => item.key != e.target.dataset.key
      )
      setData({ ...data, fileUpload: fileU })
    }
  }

  const onSelectCategoryChanged = (e) => {
    const value = e.target.value
    const categoryNew = categories.find((item) => item.name === value)

    setData({ ...data, category: { ...categoryNew } })
  }

  const onSelectBrandChanged = (e) => {
    const value = e.target.value
    const brandNew = brands.find((item) => item.name === value)

    setData({ ...data, brand: { ...brandNew } })
  }

  const onAddParameter = (e) => {
    setData({
      ...data,
      parameter: [...data.parameter, { name: '', value: '' }],
    })
  }

  const onDeleteParameter = (e) => {
    const index = e.target.dataset.index
    const newParam = [...data.parameter.filter((p, i) => i !== Number(index))]

    setData({
      ...data,
      parameter: [...newParam],
    })
  }

  const onParamItemChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    const index = Number(e.target.dataset.index)
    const paramItem = data.parameter.find((p, i) => i === index)

    const newParam = [
      ...data.parameter.slice(0, index),
      { ...paramItem, [name]: value },
      ...data.parameter.slice(index + 1),
    ]

    setData({
      ...data,
      parameter: [...newParam],
    })
  }

  return (
    <Form>
      <FormGroup style={{ width: '40%' }}>
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
      <FormGroup style={{ width: '40%' }}>
        <Label for='price'>Giá</Label>
        <Input
          type='text'
          name='price'
          id='price'
          placeholder='Nhập giá'
          value={data.price}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup style={{ width: '40%' }}>
        <Label for='promotion'>Giảm giá</Label>
        <Input
          type='text'
          name='promotion'
          id='promotion'
          placeholder='Nhập giá giảm'
          value={data.promotion}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup style={{ width: '40%' }}>
        <Label check className='ml-3'>
          <Input
            type='checkbox'
            onChange={(e) => onChange(e)}
            name='isInstallment'
            checked={data.isInstallment}
          />{' '}
          Cho phép trả góp
        </Label>
      </FormGroup>
      <FormGroup style={{ width: '40%' }}>
        <Label check className='ml-3'>
          <Input
            type='checkbox'
            onChange={(e) => onChange(e)}
            name='isFreeship'
            checked={data.isFreeship}
          />{' '}
          Cho phép miễn phí vận chuyển
        </Label>
      </FormGroup>
      <FormGroup style={{ width: '40%' }}>
        <Label for='price'>Mô tả</Label>
        <Input
          type='text'
          name='description'
          id='description'
          placeholder='Nhập mô tả'
          value={data.description}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup style={{ width: '40%' }}>
        <Label for='category'>Loại sản phẩm</Label>
        <Input
          type='select'
          name='category'
          id='category'
          onChange={(e) => onSelectCategoryChanged(e)}
        >
          {categories &&
            [...categories].map((item) => {
              if (item._id === data.category._id)
                return <option selected>{item.name}</option>
              else return <option>{item.name}</option>
            })}
        </Input>
      </FormGroup>
      <FormGroup style={{ width: '40%' }}>
        <Label for='category'>Nhãn hiệu</Label>
        <Input
          type='select'
          name='brand'
          id='brand'
          onChange={(e) => onSelectBrandChanged(e)}
        >
          {brands &&
            [...brands].map((item) => {
              if (data.brand && item._id === data.brand._id)
                return <option selected>{item.name}</option>
              else return <option>{item.name}</option>
            })}
        </Input>
      </FormGroup>
      <FormGroup style={{ width: '40%' }}>
        <Label for='content'>Nội dung</Label>
        <CKEditor
          editor={ClassicEditor}
          data={data.content}
          onBlur={(event, editor) => {
            const value = editor.getData()
            setData({ ...data, content: value })
          }}
        />
      </FormGroup>
      <FormGroup style={{ width: '40%' }}>
        <Label for='content'>Thông số kỹ thuật</Label>
        <table className='table table-bordered table-striped'>
          <tr>
            <th>Tên tham số</th>
            <th>Giá trị</th>
            <th>Modified</th>
          </tr>
          {data.parameter &&
            [...data.parameter].map((item, i) => (
              <tr key={i}>
                <td>
                  <Input
                    type='text'
                    placeholder='Nhập tên tham số'
                    style={{ border: '1px solid' }}
                    name='name'
                    value={item.name}
                    data-index={i}
                    onChange={(e) => onParamItemChange(e)}
                  />
                </td>
                <td>
                  <Input
                    type='text'
                    placeholder='Nhập giá trị'
                    style={{ border: '1px solid' }}
                    name='value'
                    value={item.value}
                    data-index={i}
                    onChange={(e) => onParamItemChange(e)}
                  />
                </td>
                <td>
                  <button
                    type='button'
                    className='btn btn-danger'
                    style={{ border: '1px solid red', color: 'red' }}
                    data-index={i}
                    onClick={(e) => onDeleteParameter(e)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
        </table>
        <button
          className='btn btn-info'
          type='button'
          onClick={(e) => onAddParameter(e)}
        >
          Thêm
        </button>
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
            {data.image &&
              data.image.split('|').map(
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
                          x
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
                      X
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
