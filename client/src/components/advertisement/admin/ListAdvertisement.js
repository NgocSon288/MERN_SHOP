import React, { useEffect, useContext } from 'react'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

import { AdvertisementContext } from '../../../contexts/admin/AdvertisementContext'
import * as ADVERTISEMENT_TYPE from '../../../reducers/admin/advertisementType.js'

export default function ListAdvertisement() {
  let { advertisements, dispatch } = useContext(AdvertisementContext)

  useEffect(() => {}, [advertisements])

  const removeItem = async (_id) => {
    const check = window.confirm('Are you sure you want to remove')

    if (check) {
      dispatch({
        type: ADVERTISEMENT_TYPE.DELETE_BY_ID,
        payload: { _id },
      })
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Tên slide</th>
          <th>Hình ảnh</th>
          <th>Mô tả</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        {advertisements &&
          advertisements.map((item, i) => (
            <tr key={item.displayOrder}>
              <th scope='row'>{i + 1}</th>
              <td>{item.name}</td>
              <td>
                <img
                  src={`http://localhost:3000/images/advertisement/${item.image}`}
                  alt={item.image}
                  width='200'
                />
              </td>
              <td>{item.description}</td>   
              <td>
                <button className='btn btn-info'>
                  <Link to={'/admin/advertisement/edit/' + item._id}>Cập nhật</Link>
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
  )
}
