import React from 'react'

import CreateProduct from '../../../components/product/admin/CreateProduct'

export default function Create() {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mb-4'>Thêm loại sản phẩm</h2>
        <CreateProduct />
      </div>
    </div>
  )
}
