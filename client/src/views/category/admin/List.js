import React, { useEffect } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ListCategory from '../../../components/category/admin/ListCategory'

export default function List({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Danh sách các loại sản phẩm</h2>
        <Button color='primary' className='mb-4 btn' outline>
          <Link to='/admin/category/create'>Thêm loại sản phẩm</Link>
        </Button>  
        <ListCategory />
      </div>
    </div>
  )
}
