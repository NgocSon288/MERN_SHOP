import React, { useEffect, useContext } from 'react'
import { Table, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import { CategoryContext } from './../../../contexts/admin/CategoryContext'
import * as CATEGORY_TYPE from './../../../reducers/admin/categoryType.js'

export default function ListCategory({ title }) {
  let { categories, dispatch } = useContext(CategoryContext)

  useEffect(() => {
    document.title = title
  }, [categories])

  const removeItem = async ({ _id }) => {
    const check = window.confirm('Are you sure you want to remove')

    if (check) {
      dispatch({
        type: CATEGORY_TYPE.DELETE_BY_ID,
        payload: { _id },
      })
    }
  }

  return (
    <div className='container'>
      <h2 className='text-center mb-4'>Danh sách các loại sản phẩm</h2>
      <Button color='primary' className='float-right mb-4' outline>
        <Link to='/admin/category/create'>Thêm loại sản phẩm</Link>
      </Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên loại</th>
            <th>Mô tả</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button className='btn btn-info'>
                  <Link to={'/admin/category/edit/' + item._id}>Edit</Link>
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
    </div>
  )
}
