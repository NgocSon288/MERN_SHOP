import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

import CartAddress from './CartAddress'
import CartItem from './CartItem'
import { ProductSessionContext } from './../../../contexts/client/ProductSessionContext'
import * as PRODUCT_SESSION_TYPE from './../../../reducers/client/productSessionType'
import { AuthContext } from './../../../contexts/client/AuthContext'

import './Cart.css'

export default function Card() {
  let { productSessions, dispatch } = useContext(ProductSessionContext)
//   const [user, setUser] = useState({})
//   const { authState } = useContext(AuthContext)
  let [items, setItems] = useState([...productSessions])
  let [totalAll, setTotal] = useState({
    total: 0,
    totalDel: 0,
    totalSub: 0,
  })

//   useEffect(() => {
//     if (authState && authState.isAuthenticated) { 
//         console.log('user', user)
//       setUser({ ...authState.user._doc })
//     }
//   }, [authState])

  useEffect(() => {
    if (productSessions && productSessions.length >= 0) {
      setItems([...productSessions])
    }
  }, [productSessions])

  useEffect(() => {
    console.log(items)
  })

  useEffect(() => {
    setTotalAll()
  }, [items, productSessions])

  const onChangeAmount = () => {
    setTotalAll()
  }

  const setTotalAll = () => {
    let total = 0
    let totalDel = 0
    let totalSub = 0
    if (items) {
      items.forEach((item) => {
        total += item.price * item.amount
      })

      totalDel = total * 0.1
      totalSub = total - totalDel

      setTotal({
        total: total,
        totalDel: totalDel,
        totalSub: totalSub,
      })
    }
  }

  const onDeleteProduct = (item) => {
    dispatch({
      type: PRODUCT_SESSION_TYPE.DELETE_BY_ID,
      payload: { product: { ...item } },
    })

    setItems([...productSessions])
  }

  return (
    <>
      <div className='container mb-5 my-wrap'>
        <CartAddress></CartAddress>
        {(!items || items.length <= 0) && (
          <div className='my-empty-cart'>
            <img
              src='http://localhost:3000/images/admin/empty_cart.png'
              alt='empty-cart'
            ></img>
            <p className='my-empty-text'>Không có sản phẩm nào trong giỏ</p>
          </div>
        )}
        {items &&
          items.map((item) => (
            <CartItem
              item={item}
              onDeleteProduct={onDeleteProduct}
              onChangeAmount={onChangeAmount}
            ></CartItem>
          ))}
      </div>

      <h3 className='head-title'>Tiến hành đặt hàng</h3>

      <div className='container mb-5'>
        <div className='wrapper-item-gio-hang p-5 pt-3'>
          <div className='dat-hang'>
            <div className='group row'>
              <span className='col-md-3'>Họ và tên:</span>
              <div className='col-md-9'>
                <input
                  type='text'
                  id='name'
                  data-meta='Họ và tên'
                  placeholder='Họ và tên của người nhận'
                  value={1}
                  className='w-100 validate-input-dat-hang'
                />
              </div>
            </div>
            <div className='group row my-3'>
              <span className='col-md-3'>Số điện thoại:</span>
              <div className='col-md-9'>
                <input
                  type='text'
                  id='phone'
                  data-meta='Số điện thoại'
                  placeholder='Số điện thoại người nhận'
                  value={1}
                  className='w-100 validate-input-dat-hang'
                />
              </div>
            </div>
            <div className='group row my-3'>
              <span className='col-md-3'>Địa chỉ:</span>
              <div className='col-md-9'>
                <input
                  type='text'
                  id='address'
                  data-meta='Địa chỉ'
                  placeholder='Địa chỉ người nhận'
                  value={1}
                  className='w-100 validate-input-dat-hang'
                />
              </div>
            </div>
            <div className='group row my-3'>
              <span className='col-md-3'>Yêu cầu về shop:</span>
              <div className='col-md-9'>
                <textarea
                  name=''
                  id=''
                  rows='3'
                  className='w-100'
                  placeholder='Yêu cầu khác (không bắt buộc)'
                ></textarea>
              </div>
            </div>
            <div className='group row my-3'>
              <span className='col-md-3'>Hình thức thanh toán:</span>
              <div className='col-md-9'>
                <select name='' id=''>
                  <option value='1'>Tiền mặt khi nhận hàng</option>
                  <option value='2'>Cà thẻ khi nhận hàng</option>
                  <option value='3'>Thanh toán qua internet Banking</option>
                  <option value='4'>Thanh toán qua thẻ Visa</option>
                  <option value='5'>Thanh toán qua QR Code</option>
                </select>
              </div>
            </div>

            <hr></hr>

            <div className='d-flex justify-content-between foot'>
              <span>Tổng tiền:</span>
              <span id='total'>{totalAll.total} đ</span>
            </div>
            <div className='d-flex justify-content-between foot'>
              <span>Giảm giá:</span>
              <del>
                <span id='total-del'>{totalAll.totalDel} đ</span>
              </del>
            </div>
            <div className='d-flex justify-content-between foot'>
              <span>
                <strong>Cần thanh toán:</strong>
              </span>
              <span>
                <strong id='total-sub' className='text-danger'>
                  {totalAll.totalSub} đ
                </strong>
              </span>
            </div>

            <hr></hr>

            <div className='foot-button row'>
              <div className='col-6'>
                <Link className='btn btn-dat-hang w-100 py-3' to='/product'>
                  TIẾP TỤC MUA HÀNG
                </Link>
              </div>
              <div className='col-6'>
                <button className='btn w-100 py-3 btn-mua-hang' id='dat-hang'>
                  ĐẶT HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
