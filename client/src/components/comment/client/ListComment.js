import React, { useEffect, useContext, useState } from 'react'
import { Table, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaStar, FaRegStar } from 'react-icons/fa'
import './ListComment.css'
import $ from 'jquery'
import { CommentContext } from './../../../contexts/client/commentContext'
import { ProductContext } from '../../../contexts/client/ProductContext'
import * as COMMENT_TYPE from './../../../reducers/client/commentType'
export default function ListComment() {
  const [data, setData] = useState({
    starNumber: 0,
    reason: '',
    description: '',
    product: '', // hiện tại thì cho một compobox sản phẩm
    fileUpload: null,
  })
  let { comments, dispatch } = useContext(CommentContext)
  const { products } = useContext(ProductContext)
  var location = window.location.href
  const index = location.lastIndexOf('/') + 1
  const id = location.substring(index)
  useEffect(() => {
    dispatch({
      type: COMMENT_TYPE.GET_ID_PRODUCT,
      payload: { _id: id },
    })
  }, [])
  useEffect(() => {
    for (var i = 0; i < comments.length; i++) $('#my-comment' + i).hide()
  }, [comments])
  const showComment = (i) => {
    $('#my-comment' + i).slideToggle(400)
  }
  const tBComment = () => {
    var s = 0
    for (var i = 0; i < comments.length; i++) {
      var s = s + comments[i].starNumber
    }
    var tb = s / comments.length
    return tb
  }
  const thongKe = (star) => {
    var count = 0
    for (var i = 0; i < comments.length; i++) {
      if (comments[i].starNumber == star) count++
    }
    var thongke = (count / comments.length) * 100
    return thongke + '%'
  }
  return (
    <div>
      <h2 id='danh-gia-kh' className='head-title'>
        KHÁCH HÀNG ĐÁNH GIÁ
      </h2>
      <div class='danh-gia-sao w-100' style={{ padding: '20px' }}>
        <h3 class='my-danh-gia'>Đánh giá</h3>
        <div class='row'>
          <div
            class='col-4 d-flex flex-column text-center align-items-center'
            style={{ borderRight: '1px solid gray' }}
          >
            <span style={{ fontSize: '50px', color: 'black' }}>
              {tBComment()}
            </span>
            <ul class='list-unstyled list-inline'>
              {[...Array(5)].map((star, i) => {
                const rating = i + 1
                return tBComment() >= rating ? (
                  <li>
                    <FaStar size={25} color={'#ffc107'} />
                  </li>
                ) : (
                  <li>
                    <FaRegStar size={25} color={'#ffc107'} />
                  </li>
                )
              })}
            </ul>
            <span style={{ fontSize: '20px', color: 'black' }}>
              {comments.length} đánh giá
            </span>
          </div>
          <div class='col-8 d-flex flex-column justify-content-center'>
            <div class='my-line'>
              <ul class='list-unstyled list-inline mb-0'>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
              </ul>
              <div class='progress w-50'>
                <div
                  class='progress-bar bg-warning'
                  style={{ width: thongKe(5) }}
                ></div>
              </div>
            </div>
            <div class='my-line'>
              <ul class='list-unstyled list-inline mb-0'>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
              </ul>
              <div class='progress w-50'>
                <div
                  class='progress-bar bg-warning'
                  style={{ width: thongKe(4) }}
                ></div>
              </div>
            </div>
            <div class='my-line'>
              <ul class='list-unstyled list-inline mb-0'>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
              </ul>
              <div class='progress w-50'>
                <div
                  class='progress-bar bg-warning'
                  style={{ width: thongKe(3) }}
                ></div>
              </div>
            </div>
            <div class='my-line'>
              <ul class='list-unstyled list-inline mb-0'>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
              </ul>
              <div class='progress w-50'>
                <div
                  class='progress-bar bg-warning'
                  style={{ width: thongKe(2) }}
                ></div>
              </div>
            </div>
            <div class='my-line'>
              <ul class='list-unstyled list-inline mb-0'>
                <li>
                  <i class='fa fa-star my-act' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='far fa-star star-font' aria-hidden='true'></i>
                </li>
              </ul>
              <div class='progress w-50'>
                <div
                  class='progress-bar bg-warning'
                  style={{ width: thongKe(1) }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <h3
          className='my-binh-luan text-left'
          style={{ fontSize: '26px', marginTop: '50px' }}
        >
          Bình luận
        </h3>
        <script src='../../../assets/admin/js/hidecomment.js'></script>
        {comments &&
          comments.map((item, i) => (
            <div className='binh-luan mt-5'>
              <div className='binh-luan-header d-flex'>
                <div className='icon-kh mr-3 d-flex align-items-center'>
                  <img
                    src={
                      item.user.image &&
                      `http://localhost:3000/images/user/${item.user.image}`
                    }
                    alt=''
                  />
                </div>
                <div className='thong-tin-kh' style={{ width: '250px' }}>
                  <p style={{ color: 'black' }}>{item.user.name}</p>
                  <p>Nhận xét vào {item.createdAt.slice(0, 10)}</p>
                </div>
              </div>
              <div className='my-line mb-4' style={{ justifyContent: 'start' }}>
                <ul
                  className='list-unstyled list-inline mb-0'
                  style={{ marginLeft: '65px' }}
                >
                  {[...Array(5)].map((star, i) => {
                    const rating = i + 1
                    return item.starNumber >= rating ? (
                      <li>
                        <FaStar size={25} color={'#ffc107'} />
                      </li>
                    ) : (
                      <li>
                        <FaRegStar size={25} color={'#ffc107'} />
                      </li>
                    )
                  })}
                </ul>
              </div>
              <span
                className='conment'
                style={{ fontSize: '14px', fontWeight: 'bold' }}
              >
                {item.reason}
              </span>
              <p style={{ paddingTop: '5px' }}>{item.description}</p>
              {comments.image &&
                comments.image.split('|').map(
                  (item) =>
                    item && (
                      <div className='cocntainer-img d-flex justify-content-star align-items-center'>
                        <img
                          src={
                            data.image &&
                            `http://localhost:3000/images/product/${item}`
                          }
                          alt=''
                          className='w-25 mr-3'
                          style={{ maxHeight: '268px' }}
                        />
                      </div>
                    )
                )}
              <div style={{ marginTop: '20px' }}>
                <span
                  className='thaoluan'
                  id={'my-binh-luan-coll' + i}
                  onClick={() => showComment(i)}
                >
                  Thảo luận
                </span>
                <a href=''>
                  <span style={{ fontSize: '14px' }}>
                    <i className='fa fa-thumbs-up mr-1' aria-hidden='true'></i>
                    Hữu ích (13)
                  </span>
                </a>
              </div>
              <div id={'my-comment' + i} className='w-100'>
                <textarea
                  className='form-control'
                  rows='5'
                  placeholder='Bình luận của tôi...'
                  style={{ fontSize: '15px' }}
                ></textarea>
                <div
                  className='foot w-100 d-flex justify-content-between px-3 py-1'
                  style={{ backgroundColor: 'white' }}
                >
                  <div className='text-primary' style={{ fontSize: '16px' }}>
                    <a href='#'>
                      <i
                        className='fa fa-camera text-primary mr-2'
                        aria-hidden='true'
                      ></i>
                      Gửi ảnh
                    </a>
                  </div>
                  <button className='btn btn-primary px-2'>GỬI</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
