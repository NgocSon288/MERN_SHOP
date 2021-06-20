import React, { useEffect, useContext, useState } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import Pagination from 'react-js-pagination'

import { BrandContext } from './../../../contexts/admin/BrandContext'
import * as BRAND_TYPE from './../../../reducers/admin/categoryType.js'

export default function ListBrand() {
  let { brands, dispatch } = useContext(BrandContext)

  // Params pagination
  let [activePage, setActivePage] = useState(1)
  let [totalItemsCount, setTotalItemsCount] = useState(1)
  let [brandsActivePage, setBrandsActivePage] = useState([])
  let itemsCountPerPage = 3

  useEffect(() => {
    if (brands && brands.length > 0) {
      setTotalItemsCount(brands.length)
      let index = (activePage - 1) * itemsCountPerPage
      setBrandsActivePage([...brands.slice(index, index + itemsCountPerPage)])
    }
  }, [activePage, brands, itemsCountPerPage])

  const removeItem = async (_id) => {
    const check = window.confirm('Are you sure you want to remove')

    if (check) {
      dispatch({
        type: BRAND_TYPE.DELETE_BY_ID,
        payload: { _id },
      })
    }
  }
  // function pagination
  const handlePageChange = (pageNumber) => {
    let index = (pageNumber - 1) * itemsCountPerPage
    setBrandsActivePage([...brands.slice(index, index + itemsCountPerPage)])
    setActivePage(pageNumber)
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên nhãn hiệu</th>
            <th>Hình ảnh</th>
            <th>Mô tả</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {brandsActivePage &&
            brandsActivePage.map((item, i) => (
              <tr key={i}>
                <th scope='row'>
                  {(activePage - 1) * itemsCountPerPage + i + 1}
                </th>
                <td>{item.name}</td>
                <td>
                  <img
                    src={`http://localhost:3000/images/brand/${item.logo}`}
                    alt={item.logo}
                    width='220'
                    height='48'
                  />
                </td>
                <td>{item.description}</td>
                <td>
                  <button className='btn btn-info'>
                    <Link to={'/admin/brand/edit/' + item._id}>Cập nhật</Link>
                  </button>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => removeItem(item._id)}
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
