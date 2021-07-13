import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { ProductContext } from './../../../contexts/admin/ProductContext'
import { CommentContext } from './../../../contexts/admin/CommentContext'
import * as COMMENT_TYPE from './../../../reducers/admin/commentType'

export default function Createproduct() {
  const [data, setData] = useState({
    starNumber: 0,
    reason: '',
    description: '',
    product: '', // hiện tại thì cho một compobox sản phẩm
    fileUpload: null,
  })

  const { products, dispatch } = useContext(ProductContext)
  const { dispatch: dispatchComment } = useContext(CommentContext)

  useEffect(() => {}, [data])

  useEffect(() => {
    if (products && products.length > 0) {
      setData({
        ...data,
        product: products[0]._id,
      })
    }
  }, [products])

  const onSubmit = async (e) => {
    try {
      dispatchComment({
        type: COMMENT_TYPE.CREATE,
        payload: { data },
      })

      setData({
        starNumber: 0,
        reason: '',
        description: '',
        product: products[0]._id, // hiện tại thì cho một compobox sản phẩm
        fileUpload: null,
      })  
    } catch (error) {
      alert(error.message)
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

  const onSelectChanged = (e) => {
    const value = e.target.value
    const productIdNew = products.find((item) => item.name === value)._id

    setData({ ...data, product: productIdNew })
  }
  const onChange = async (e) => {
    const newData = { ...data, [e.target.name]: e.target.value }

    setData(newData)
  }

  return (
    <Form>
      <FormGroup>
        <Label for='reason'>Lý đo</Label>
        <Input
          type='text'
          name='reason'
          placeholder='Nhập lý do đánh giá'
          value={data.reason}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Mô tả</Label>
        <Input
          type='text'
          name='description'
          placeholder='Nhập mô tả'
          value={data.description}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='starNumber'>Nhập số sao (do test nên nhập số)</Label>
        <Input
          type='text'
          name='starNumber'
          placeholder='Nhập số sao'
          value={data.starNumber}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <FormGroup>
        <Label for='product'>Sản phẩm cần đánh giá</Label>
        <Input
          type='select'
          name='product'
          onChange={(e) => onSelectChanged(e)}
        >
          {products &&
            [...products].map((item) => <option>{item.name}</option>)}
        </Input>
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
            {data.fileUpload &&
              [...data.fileUpload].map((item) => (
                <Col xm='3' sm='3' className='mt-4'>
                  <div className='wrap-image'>
                    <img
                      src={URL.createObjectURL(item.val)}
                      alt={item}
                      width='200'
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
      <Link to='/admin/comment'>Quay về</Link>
    </Form>
  )
}
