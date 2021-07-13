import React, { useEffect, useState, useContext } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ProductContext } from './../../../contexts/client/ProductContext'
import { CommentContext } from './../../../contexts/client/commentContext'
import * as COMMENT_TYPE from './../../../reducers/client/commentType'
import ReactStars from 'react-rating-stars-component'
import {FaStar,FaRegStar} from "react-icons/fa"
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
    if (products && products.length > 0) {
      var location = window.location.href
      const index = location.lastIndexOf('/') + 1
      const id = location.substring(index)
      const f=products.find((p) => p._id === id)
      if(f){
      setData({
        ...data,
        product: f._id,
      })
    }
    }
  }, [products])

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

  const onChangeStar=async (newValue)=>{
    setData({...data, starNumber: newValue})
  }
  const onChange = async (e) => {
    const newData = { ...data, [e.target.name]: e.target.value }
    setData(newData)
  }
  const setTime = ()=>{
    var time=new Date();
    var date="Ngày "+ time.getDate()+' tháng '+(time.getMonth()+1)+','+time.getFullYear()
    return date
  }

  const onSubmit = async (e) => {
    try {
      if(data.starNumber!=0&&data.reason!=''&&data.description!='')
      {
        dispatchComment({
          type: COMMENT_TYPE.CREATE,
          payload: { data },
        })
      }
      else
      {
        if(data.starNumber==0)
          alert("Bạn phải nhập số sao")
        if(data.reason=='')
          alert("Bạn phải điền vào lý do đánh giá")
        if(data.description=='')
          alert("Bạn phải điền vào mô tả đánh giá")
      }
      setData({
        ...data,
        starNumber: parseInt(0),
        reason: '',
        description: '', // hiện tại thì cho một compobox sản phẩm
        fileUpload: null,
      })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div style={{marginTop:"20px",padding: "20px"}}>
        <h2 className="text-left" style={{fontSize: "26px",marginBottom: "20px"}}>Phản hồi của tôi</h2>
        <div className="my-line" style={{justifyContent: "start"}}>
        <ul className="list-unstyled list-inline mb-0 my-comment-start ml-0"> 
        <FormGroup>
        <ReactStars
        size= {27}
        count= {5}
        key = {data.starNumber}
        value = {data.starNumber}
        emptyIcon= {<li><FaRegStar/></li>}
        filledIcon= {<li><FaStar/></li>}
        onChange={newValue => {
          onChangeStar(newValue)}
       }
       />
        </FormGroup>
        </ul>
           <span id="date-time" style={{color: "#777", fontSize: "14px", marginLeft:"15px", lineHeight: "14px", marginTop: "18px"}}>{setTime()}</span>
        </div>
    <Form>
      <FormGroup>
        <Label for='reason'>Lý do</Label>
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
          type='textarea'
          name='description'
          placeholder='Nhập mô tả'
          value={data.description}
          onChange={(e) => onChange(e)}
        />
      </FormGroup>
      <Label for='description'>Hình ảnh</Label>
      <div className="foot w-100 d-flex justify-content-between px-3 py-1" style={{backgroundColor: "white"}}>
									<div class="text-primary" style={{fontSize:"16px"}}>
                    <FormGroup>
                          <Input
                            type='file'
                            name='image'
                            id='image'
                            onChange={(e) => onChangeImage(e)}
                            multiple
                          />
                          <div classNameName='d-flex'>
                            {/* // eslint-disable-next-line array-callback-return */}
                            <Row classNameName='w-100 ml-1'>
                              {data.fileUpload &&
                                [...data.fileUpload].map((item) => (
                                  <Col xm='3' sm='3' classNameName='mt-4'>
                                    <div classNameName='wrap-image'>
                                      <img
                                        src={URL.createObjectURL(item.val)}
                                        alt={item}
                                        width='200'
                                        height='200'
                                      />
                                      <button
                                        classNameName='btn btn-danger'
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
                  </div> 
			</div>
      <Button color='primary' classNameName='mb-2' onClick={(e) => onSubmit(e)}>
        Gửi
      </Button>
      <br />
    </Form>
    </div>
  )
}
