import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

import CartAddress from './CartAddress'
import CartItem from './CartItem'
import { ProductSessionContext } from './../../../contexts/client/ProductSessionContext'
import * as PRODUCT_SESSION_TYPE from './../../../reducers/client/productSessionType'
import { AuthContext } from './../../../contexts/client/AuthContext'
import { OrderContext } from './../../../contexts/client/OrderContext'
import * as ORDER_TYPE from './../../../reducers/client/orderType'
import $ from 'jquery'
import './Cart.css'

export default function Card() {
  let { productSessions, dispatch } = useContext(ProductSessionContext)
  let { dispatch: orderDispatch } = useContext(OrderContext)
  const [user, setUser] = useState({ name: '', phone: '', address: '' })
  const { authState } = useContext(AuthContext)
  let [items, setItems] = useState([])
  let [totalAll, setTotal] = useState({
    total: 0,
    totalDel: 0,
    totalSub: 0,
  })
  let [orderInfo, setOrderInfo] = useState({
    message: '',
    paymentMethod: 'Tiền mặt khi nhận hàng',
  })

  useEffect(() => {}, [user])

  useEffect(() => {
    if (authState && authState.isAuthenticated) {
      setUser({ ...authState.user._doc })
    } else {
      setUser({ name: '', phone: '', address: '' })
    }
  }, [authState])

  useEffect(() => {
    if (productSessions && productSessions.length >= 0) {
      setItems([...productSessions])
    }
  }, [productSessions])

  useEffect(() => {})

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
    let amountOrder = 0
    if (items) {
      items.forEach((item) => {
        total += item.price * item.amount
        amountOrder += item.amount
      })

      totalDel = total * 0.1
      totalSub = total - totalDel

      setTotal({
        total: total,
        totalDel: totalDel,
        totalSub: totalSub,
      })

      $("#amountOrder").text(amountOrder)
    }
  }

  const onDeleteProduct = (item) => {
    dispatch({
      type: PRODUCT_SESSION_TYPE.DELETE_BY_ID,
      payload: { product: { ...item } },
    })

    setItems([...productSessions])
  }
  const onChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onOrder = () => {
    if (!authState || !authState.isAuthenticated) {
      alert('Vui lòng đăng nhập trước khi đặt hàng!')
      return
    }

    if (items.length <= 0) {
      alert('Không có sản phẩm nào trong giỏ')

      return
    }

    // eslint-disable-next-line no-restricted-globals
    const check = confirm('Bạn có muốn đặt hàng!')
    if (!check) {
      return
    }

    var data = {
      ...orderInfo,
      orderDetails: [
        ...items.map((m) => {
          return { count: m.amount, product: m._id }
        }),
      ],
    }
    dispatch({
      type: PRODUCT_SESSION_TYPE.DELETE_ALL,
      payload: null,
    })
    orderDispatch({
      type: ORDER_TYPE.CREATE,
      payload: { data },
    })

    setItems([])
    setOrderInfo({
      message: '',
      paymentMethod: 'Tiền mặt khi nhận hàng',
    })
  }


  const convertMoney = (char, money) => {
    money = money.toString()
    let arr = []
    let n = money.length
    let i = 1
    let j = 3

    while (i < n) {
      if (++i % 3 === 0) {
        j = i

        if(money.slice(n - i, n - i + 3)){
            arr.unshift(money.slice(n - i, n - i + 3))
        }
      }
    }

    if(money.slice(0, n - j))
    {
        arr.unshift(money.slice(0, n - j)) 
    }
    console.log(arr);
    return arr.join(char)
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
                  name='name'
                  value={user.name}
                  onChange={(e) => onChange(e)}
                  disabled
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
                  name='phone'
                  data-meta='Số điện thoại'
                  placeholder='Số điện thoại người nhận'
                  value={user.phone}
                  onChange={(e) => onChange(e)}
                  disabled
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
                  name='address'
                  data-meta='Địa chỉ'
                  placeholder='Địa chỉ người nhận'
                  value={user.address}
                  disabled
                  onChange={(e) => onChange(e)}
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
                  value={orderInfo.message}
                  onChange={(e) => {
                    setOrderInfo({ ...orderInfo, message: e.target.value })
                  }}
                  placeholder='Yêu cầu khác (không bắt buộc)'
                ></textarea>
              </div>
            </div>
            <div className='group row my-3'>
              <span className='col-md-3'>Hình thức thanh toán:</span>
              <div className='col-md-9'>
                <select
                  name=''
                  onChange={(e) =>
                    setOrderInfo({
                      ...orderInfo,
                      paymentMethod: e.target.value,
                    })
                  }
                >
                  <option value='Tiền mặt khi nhận hàng'>
                    Tiền mặt khi nhận hàng
                  </option>
                  <option value='Cà thẻ khi nhận hàng'>
                    Cà thẻ khi nhận hàng
                  </option>
                  <option value='Thanh toán qua internet Banking'>
                    Thanh toán qua internet Banking
                  </option>
                  <option value='Thanh toán qua thẻ Visa'>
                    Thanh toán qua thẻ Visa
                  </option>
                  <option value='Thanh toán qua QR Code'>
                    Thanh toán qua QR Code
                  </option>
                </select>
              </div>
            </div>

            <hr></hr>

            <div className='d-flex justify-content-between foot'>
              <span>Tổng tiền:</span>
              <span id='total'>{convertMoney(",", totalAll.total)} đ</span>
            </div>
            <div className='d-flex justify-content-between foot'>
              <span>Giảm giá:</span>
              <del>
                <span id='total-del'>{convertMoney(",", totalAll.totalDel)} đ</span>
              </del>
            </div>
            <div className='d-flex justify-content-between foot'>
              <span>
                <strong>Cần thanh toán:</strong>
              </span>
              <span>
                <strong id='total-sub' className='text-danger'>
                  {convertMoney(",", totalAll.totalSub)} đ
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
                <button
                  className='btn w-100 py-3 btn-mua-hang'
                  id='dat-hang'
                  onClick={onOrder}
                >
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
