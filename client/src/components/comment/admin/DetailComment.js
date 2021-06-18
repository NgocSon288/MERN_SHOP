import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import { CommentContext } from './../../../contexts/admin/CommentContext'
import * as COMMENT_TYPE from './../../../reducers/admin/commentType'

export default function CreateComment() {
  const [comment, setData] = useState({})

  const { comments, dispatch } = useContext(CommentContext)

  useEffect(() => {}, [comment])

  useEffect(() => {
    if (comments && comments.length > 0) {
      var location = window.location.href
      const index = location.lastIndexOf('/') + 1
      const id = location.substring(index)

      setData({
        ...comments.find((item) => item._id === id),
      })
    }
  }, [comments])

  const onDeleteComment = (e) => {
    e.preventDefault()
    const check = window.confirm('Are you sure you want to remove')

    if(check){
        dispatch({
          type: COMMENT_TYPE.DELETE_BY_ID,
          payload: {
            _id: comment._id,
          },
        })

        window.location.href = '/admin/comment'
    }
  }

  return (
    <Form style={{width: '40%'}}>
      <FormGroup>
        <Label for='reason'>Lý đo</Label>
        <Input
          type='text'
          name='reason'
          placeholder='Nhập lý do đánh giá'
          value={comment.reason}
          readonly
        />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Mô tả</Label>
        <Input
          type='text'
          name='description'
          placeholder='Nhập mô tả'
          value={comment.description}
          readonly
        />
      </FormGroup>
      <FormGroup>
        <Label for='starNumber'>Số sao</Label>
        <Input
          type='text'
          name='starNumber'
          placeholder='Nhập số sao'
          value={comment.starNumber}
          readonly
        />
      </FormGroup>
      <FormGroup>
        <Label for='product'>Sản phẩm</Label>
        <Input
          type='text'
          name='product'
          readonly
          value={comment && comment.product && comment.product.name}
        ></Input>
      </FormGroup>

      <FormGroup>
        <Label for='image'>Hình ảnh</Label>

        <div className='d-flex'>
          {/* // eslint-disable-next-line array-callback-return */}
          <Row className='w-100 ml-1'>
            {comment.image &&
              comment.image.split('|').map(
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
                      </div>
                    </Col>
                  )
              )}
            {!comment.image && (
              <p className='ml-0 pl-0 text-danger'>Không có hình ảnh</p>
            )}
          </Row>
        </div>
      </FormGroup>

      <Button
        color='primary'
        className='mb-2'
        type='button'
        onClick={(e) => onDeleteComment(e)}
      >
        Delete
      </Button>
      <br />
      <Link to='/admin/comment'>Quay về</Link>
    </Form>
  )
}
