import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ProductContext } from './../../../contexts/client/ProductContext'
import { CommentContext } from './../../../contexts/client/commentContext'
import * as COMMENT_TYPE from './../../../reducers/client/commentType'
import ReactStars from 'react-rating-stars-component'
import star from 'react-rating-stars-component/dist/star'
export default function CreateComment() {
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
    var location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const id = location.substring(index)
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
  const onChangeStar= (newValue)=>{
    setData({...data, starNumber: newValue})
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
    <div style={{marginTop:"70px"}}>
        <h2 class="text-left" style={{fontSize: "26px",marginBottom: "20px"}}>Phản hồi của tôi</h2>
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
        
   <ReactStars
   size= {50}
   count= {10}
   color= {"black"}
   activeColor= {"red"}
   value= {0}
   emptyIcon= {<i className="far fa-star" />}
   filledIcon= {<i className="fa fa-star" />}
   onChange={newValue => {
     onChangeStar(newValue)}
  }
  />,
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
    </div>
  )
}
