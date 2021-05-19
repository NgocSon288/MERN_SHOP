import React from 'react'

import CreateCategory from '../../../components/category/admin/CreateCategory'

export default function Create() {
  return (
    <div>
      <div className='container'>
        <h2 className='text-center mb-4'>Cập nhật loại sản phẩm</h2>
        <CreateCategory />
      </div>
    </div>
  )
}
