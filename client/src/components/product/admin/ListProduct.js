import React, { useEffect, useContext } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

import { ProductContext } from './../../../contexts/admin/ProductContext'
import * as PRODUCT_TYPE from './../../../reducers/admin/productType'

export default function ListProduct() {
  const { products, dispatch } = useContext(ProductContext)

  useEffect(() => {}, [products])

  const deleteProductItem = async (e) => {
    const check = window.confirm('Are you sure you want to delete?')

    if (check) {
      const id = e.target.dataset.id
      //  Đóng lại nào xong create update, mở ra
      dispatch({
        type: PRODUCT_TYPE.DELETE_BY_ID,
        payload: { id },
      })
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Hình ảnh</th>
          <th>Tên</th>
          <th>Giá</th>
          <th>Loại</th>
          <th>Ngày tạo</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((item, i, arr) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src={
                    `http://localhost:3000/images/product/${
                      item.image.split('|')[0]
                    }` ||
                    'https://tse3.mm.bing.net/th?id=OIP.03Nx1O7saqRog5kMdOZSuwHaHa&pid=Api&P=0&w=300&h=300'
                  }
                  width='100'
                />
              </td>
              <td>
                <b>{item.name}</b>
              </td>
              <td>{item.price}</td>
              {item.category && item.category.name && (
                <td>{item.category.name}</td>
              )}
              {!item.category && <td>Không xác định</td>}
              <td>{item.createdAt}</td>
              <td>
                <div className='d-flex'>
                  <button className='btn btn-info'>
                    <Link to={'/admin/product/edit/' + item._id}>Edit</Link>
                  </button>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={(e) => deleteProductItem(e)}
                    data-id={item._id}
                    data-item={arr}
                  >
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}
