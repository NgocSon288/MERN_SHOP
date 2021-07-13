import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './CartItem.css'
import { ProductSessionContext } from './../../../contexts/client/ProductSessionContext'
import * as PRODUCT_SESSION_TYPE from './../../../reducers/client/productSessionType'

export default function CartItem({ item, onDeleteProduct, onChangeAmount: onChangeAmountParent }) {
  let { productSessions, dispatch } = useContext(ProductSessionContext)
  const [amount, setAmount] = useState(item.amount)

  useEffect(() => {
    if (item) {
      setAmount(item.amount)
    }
  })

  const descreaseAmount = () => {
    if (item.amount <= 1) {
      return
    }
    dispatch({
      type: PRODUCT_SESSION_TYPE.EDIT_BY_ID,
      payload: { product: { ...item }, newAmount: item.amount - 1 },
    })
    setAmount(item.amount)
    onChangeAmountParent();
  }
  const increaseAmount = () => {
    dispatch({
      type: PRODUCT_SESSION_TYPE.EDIT_BY_ID,
      payload: { product: { ...item }, newAmount: item.amount + 1 },
    })
    setAmount(item.amount)
    onChangeAmountParent()
  }

  const onChangeAmount = (e) => {
    let value = e.target.value
    let newAmount = Number(value)
    if (isNaN(value) || Number(value) <= 0) {
      newAmount = 1
      return
    }

    dispatch({
      type: PRODUCT_SESSION_TYPE.EDIT_BY_ID,
      payload: { product: { ...item }, newAmount: newAmount },
    })
    setAmount(item.amount)
    onChangeAmountParent()
  }

  const deleteAmount = () => {
    // eslint-disable-next-line no-restricted-globals
    const check = confirm('Bạn có muốn xoá sản phẩm?')

    if (check) {
      onDeleteProduct(item)
    }
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
        arr.unshift(money.slice(n - i, n - i + 3))
      }
    }

    arr.unshift(money.slice(0, n - j))

    return arr.join(char)
  }

  if (amount <= 0) {
    return <></>
  }

  return (
    <div>
      <div className='wrapper-item-gio-hang card-san-pham'>
        <div className='content w-100 d-flex p-3 pr-5 row my-cart-item-content'>
          <div className='col-md-3 text-center'>
            <a href='chitietsanpham.html' className='my-image-link'>
              {item && item.image && (
                <img
                  src={`http://localhost:3000/images/product/${
                    item.image.split('|')[0]
                  }`}
                  alt={item.image.split('|')[0]}
                  width='100%'
                  height='100%'
                />
              )}
            </a>
          </div>

          <div className='thong-tin col-md-9'>
            <Link to={`/product-detail/${item._id}`}>
              <h3 className='ten mt-0'>{item.name}</h3>
            </Link>

            <h4 className='nha-cung-cap mt-3'>
              Cung cấp bởi {item && item.brand && item.brand.name}
            </h4>
            <p className='status lead my-3'>{item.description}</p>
            <span
              className='gia gia-span'
              data-gia='38990000'
              data-for='input1'
            >
              {convertMoney(",",item.price)} <span className='badge vnd'>đ</span>
            </span>
            <del className='my-del-price'>
              <span className='gia'>
                {convertMoney(",", item.promotion)}{' '}
                <span className='badge vnd'>đ</span>
              </span>
            </del>
            <div className='d-flex row mt-1'>
              <div className='so-luong d-flex justify-content-start align-items-center col-md-6'>
                <span className='my-lbl-amount'>Số lượng: </span>
                <div
                  className='so-luong-btn tru'
                  data-for='input1'
                  onClick={descreaseAmount}
                >
                  -
                </div>
                <input
                  className='so-luong-number'
                  value={amount}
                  onChange={onChangeAmount}
                  type='text'
                  maxlength='9'
                  id='input1'
                  data-max='121'
                ></input>
                <div
                  className='so-luong-btn cong'
                  data-for='input1'
                  onClick={increaseAmount}
                >
                  +
                </div>
              </div>
              <p className='col-md-6 mt-3 text-md-right'>
                Nhận hàng trong vòng 3-5 ngày
              </p>
            </div>
          </div>
        </div>
        <button
          className='close close-gio-hang'
          id='data-close-1'
          data-close='0'
        >
          <span onClick={deleteAmount}>X</span>
        </button>
      </div>
    </div>
  )
}
