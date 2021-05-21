import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ListBrand from './../../../components/brand/admin/ListBrand'

export default function List() {
  return (
    <div>
      <div>
        <h2 className='mb-4'>Danh sách các nhãn hiệu</h2>
        <Button color='primary' className='mb-4 btn' outline>
          <Link to='/admin/brand/create'>Thêm nhãn hiệu</Link>
        </Button>
        <ListBrand />
      </div>
    </div>
  )
}
