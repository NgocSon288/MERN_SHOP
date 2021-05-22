import React, { useEffect, useContext } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

import { OrderContext } from '../../../contexts/admin/OrderContext'
import * as ORDER_TYPE from '../../../reducers/admin/orderType.js'

export default function ListOrder() {
  let { orders, dispatch } = useContext(OrderContext)

  useEffect(() => {
  }, [orders])

  const removeItem = async ({ _id }) => {
    const check = window.confirm('Are you sure you want to remove')

    if (check) {
      dispatch({
        type: ORDER_TYPE.DELETE_BY_ID,
        payload: { _id },
      })
    }
  }

  return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Người đặt hàng</th>
            <th>Số điện thoại</th>
            <th>Địa chỉ</th>
            <th>Ngày đặt</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{item.user.name}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.createdAt}</td>
              <td>
                <button className='btn btn-info'>
                  <Link to={'/admin/order/' + item._id}>Xem chi tiết</Link>
                </button>
                <button
                  className='btn btn-danger ml-2'
                  onClick={() => removeItem(item)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
  )
}
