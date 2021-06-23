import React, { useEffect, useContext, useState } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from 'react-js-pagination'

import { ProductContext } from './../../../contexts/admin/ProductContext'
import * as PRODUCT_TYPE from './../../../reducers/admin/productType'

export default function ListProduct() {
  const { products, dispatch } = useContext(ProductContext)

  // Params pagination
  let [activePage, setActivePage] = useState(1)
  let [totalItemsCount, setTotalItemsCount] = useState(1)
  let [categoriesActivePage, setCategoriesActivePage] = useState([])
  let itemsCountPerPage = 8

  useEffect(() => {
    if (products && products.length > 0) {
      setTotalItemsCount(products.length)
      let index = (activePage - 1) * itemsCountPerPage
      setCategoriesActivePage([
        ...products.slice(index, index + itemsCountPerPage),
      ])
    }
  }, [products])

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

  // function pagination
  const handlePageChange = (pageNumber) => {
    let index = (pageNumber - 1) * itemsCountPerPage
    setCategoriesActivePage([
      ...products.slice(index, index + itemsCountPerPage),
    ])
    setActivePage(pageNumber)
  }

  const convertDatetime = (date) => {
    date = new Date(date)
    let da = date.getDate()
    let mo = date.getMonth() + 1
    let ye = date.getFullYear()

    return `${da}/${mo}/${ye}`
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
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Hình ảnh</th>
            <th>Tên</th>
            <th>
              <span
                style={{ textAlign: 'center', display: 'block' }}
              >Giá</span>
            </th>
            <th>Loại</th>
            <th>Ngày tạo</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {categoriesActivePage &&
            categoriesActivePage.map((item, i, arr) => (
              <tr key={i}>
                <th scope='row'>
                  {(activePage - 1) * itemsCountPerPage + i + 1}
                </th>
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
                    height='55.2'
                  />
                </td>
                <td>
                  <b>{item.name.substr(0, 60)}</b>
                </td>
                <td>
                  <span
                    style={{ textAlign: 'right', display: 'block' }}
                  >{`${convertMoney(',', item.price)} đ`}</span>
                </td>
                {item.category && item.category.name && (
                  <td>{item.category.name}</td>
                )}
                {!item.category && <td>Không xác định</td>}
                <td>{convertDatetime(item.createdAt)}</td>
                <td>
                  <div className='d-flex'>
                    <button className='btn btn-info'>
                      <Link to={'/admin/product/edit/' + item._id}>
                        Cập nhật
                      </Link>
                    </button>
                    <button
                      className='btn btn-danger ml-2'
                      onClick={(e) => deleteProductItem(e)}
                      data-id={item._id}
                      data-item={arr}
                    >
                      Xoá
                    </button>
                  </div>
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
