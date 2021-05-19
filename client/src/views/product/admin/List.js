import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ListProduct from '../../../components/product/admin/ListProduct'

export default function List() {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mb-4'>Danh sách các sản phẩm</h2>
        <Button color='primary' className='float-right mb-4' outline>
          <Link to='/admin/product/create'>Thêm sản phẩm</Link>
        </Button>
        <ListProduct />
      </div>
    </div>
  )
}
