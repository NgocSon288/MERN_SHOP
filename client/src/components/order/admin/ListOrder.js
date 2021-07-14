import React, { useEffect, useContext, useState } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from 'react-js-pagination'

import { OrderContext } from '../../../contexts/admin/OrderContext'
import * as ORDER_TYPE from '../../../reducers/admin/orderType.js'

export default function ListOrder() {
  let { orders, dispatch } = useContext(OrderContext)
  // Params pagination
  let [activePage, setActivePage] = useState(1)
  let [totalItemsCount, setTotalItemsCount] = useState(1)
  let [ordersActivePage, setOrdersActivePage] = useState([])
  let itemsCountPerPage = 5

  useEffect(() => {
    // filter pagination
    setTotalItemsCount(orders.length)
    let index = (activePage - 1) * itemsCountPerPage
    setOrdersActivePage([...orders.slice(index, index + itemsCountPerPage)])
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

  // function pagination
  const handlePageChange = (pageNumber) => {
    let index = (pageNumber - 1) * itemsCountPerPage
    setOrdersActivePage([...orders.slice(index, index + itemsCountPerPage)])
    setActivePage(pageNumber)
  }

  const convertDatetime = (date) => {
    date = new Date(date)
    let da = date.getDate()
    let mo = date.getMonth() + 1
    let ye = date.getFullYear()

    return `${da}/${mo}/${ye}`
  }

  return (
    <div>
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
          {ordersActivePage &&
            ordersActivePage.map((item, i) => (
              <tr key={i}>
                <th scope='row'>
                  {(activePage - 1) * itemsCountPerPage + i + 1}
                </th>
                <td>{item.user != null ? item.user.name : 'Khách hàng'}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>{convertDatetime(item.createdAt)}</td>
                <td>
                  <button className='btn btn-info'>
                    <Link to={'/admin/order/' + item._id}>Chi tiết</Link>
                  </button>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => removeItem(item)}
                  >
                    Xoá
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className='my-pagination'>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    </div>
  )
}
