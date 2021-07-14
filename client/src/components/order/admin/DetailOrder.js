import React, { useEffect, useContext, useState } from 'react'
import { Table, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

import { OrderDetailContext } from '../../../contexts/admin/OrderDetailContext'
import { OrderContext } from '../../../contexts/admin/OrderContext'
import * as ORDER_DETAIL_TYPE from '../../../reducers/admin/orderDetailType.js'
import * as ORDER_TYPE from '../../../reducers/admin/orderType.js'

export default function DetailOrder() {
  const [order, setOrder] = useState()
  let { orderDetails, dispatch } = useContext(OrderDetailContext)
  let { orders } = useContext(OrderContext)

  useEffect(() => {
    var location = window.location.href
    const index = location.lastIndexOf('/') + 1
    const orderId = location.substring(index)

    dispatch({
      type: ORDER_DETAIL_TYPE.SET_ORDER_DETAILS,
      payload: {
        orderId,
      },
    })
  }, [])

  useEffect(() => {
    if (
      orders &&
      orderDetails &&
      orders.length > 0 &&
      orderDetails.length > 0
    ) {
      var location = window.location.href
      const index = location.lastIndexOf('/') + 1
      const orderId = location.substring(index)

      const ord = orders.find((o) => o._id === orderId) 

      setOrder({
        ...ord,
      })
    }
  }, [orderDetails, orders])

  const removeItem = (_id) => {
    const check = window.confirm('Are you sure you want to remove')

    if (check) {
      dispatch({
        type: ORDER_DETAIL_TYPE.DELETE_BY_ID,
        payload: { _id: _id },
      })
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

  return (
    <div>
      <Form style={{ width: '40%' }}>
        <FormGroup className='mt-4'>
          <Label for='name' className='bold'>
            Tên khách hàng
          </Label>
          {order && (
            <Input type='text' name='name' value={order.user?order.user.name:'Khách hàng'} readonly />
          )}
        </FormGroup>
        <FormGroup className='mt-4 bold'>
          <Label for='address'>Địa chỉ</Label>
          {order && (
            <Input type='text' name='address' value={order.address} readonly />
          )}
        </FormGroup>
        <FormGroup className='mt-4 bold'>
          <Label for='phone'>Phone</Label>
          {order && (
            <Input type='text' name='phone' value={order.phone} readonly />
          )}
        </FormGroup>
        <FormGroup className='mt-4 bold'>
          <Label for='message'>Message</Label>
          {order && (
            <Input type='text' name='message' value={order.message} readonly />
          )}
        </FormGroup>
        <FormGroup className='mt-4 bold'>
          <Label for='paymentMethod'>Phương thức thanh toán</Label>
          {order && (
            <Input
              type='text'
              name='paymentMethod'
              value={order.paymentMethod}
              readonly
            />
          )}
        </FormGroup>
      </Form>

      <h3 className='text-center mt-5'>Danh sách các sản phẩm</h3>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Giảm giá</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.map((item, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{item.product.name}</td>
              <td>
                <img
                  src={`http://localhost:3000/images/product/${
                    item.product.image.split('|')[1]
                  }`}
                  alt={item.image}
                  width='200'
                  height='111'
                />
              </td>
              <td>{item.count}</td>
              <td>{`${convertMoney(',', item.product.price)} đ`}</td>
              <td>{`${convertMoney(',', item.product.promotion)} đ`}</td>
              <td>
                <button
                  className='btn btn-danger ml-2'
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
