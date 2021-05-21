import React, { useEffect } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import ListProduct from '../../../components/product/admin/ListProduct'

export default function List({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Danh sách các sản phẩm</h2>
        <Button color='primary' className='mb-4 btn' outline>
          <Link to='/admin/product/create'>Thêm sản phẩm</Link>
        </Button>
        <ListProduct />
      </div>
    </div>
  )
}
