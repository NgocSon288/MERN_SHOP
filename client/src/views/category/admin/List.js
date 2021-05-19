import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ListCategory from '../../../components/category/admin/ListCategory'

export default function List() {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mb-4'>Danh sách các loại sản phẩm</h2> 
        <Button color='primary' className='float-right mb-4' outline>
          <Link to='/admin/category/create'>Thêm loại sản phẩm</Link>
        </Button>
        <ListCategory />
      </div>
    </div>
  )
}
