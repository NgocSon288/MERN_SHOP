import React, { useEffect } from 'react'

import CreateCategory from '../../../components/category/admin/CreateCategory'

export default function Create({ title }) {
  useEffect(() => {
    document.title = title
  })
  
  return (
    <div>
      <div>
        <h2 className='mb-4'>Cập nhật loại sản phẩm</h2>
        <CreateCategory />
      </div>
    </div>
  )
}
