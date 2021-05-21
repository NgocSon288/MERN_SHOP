import React, { useEffect, useContext } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

import { BrandContext } from './../../../contexts/admin/BrandContext'
import * as BRAND_TYPE from './../../../reducers/admin/categoryType.js'

export default function ListBrand() {
  let { brands, dispatch } = useContext(BrandContext)

  useEffect(() => {}, [brands])

  const removeItem = async (_id) => {
    const check = window.confirm('Are you sure you want to remove')

    if (check) {
      dispatch({
        type: BRAND_TYPE.DELETE_BY_ID,
        payload: { _id },
      })
    }
  }

  return (
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
        {brands &&
          brands.map((item, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{item.name}</td>
              <td>
                <img
                  src={`http://localhost:3000/images/brand/${item.logo}`}
                  alt={item.logo}
                />
              </td>
              <td>{item.description}</td>
              <td>
                <button className='btn btn-info'>
                  <Link to={'/admin/brand/edit/' + item._id}>Edit</Link>
                </button>
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
  )
}
