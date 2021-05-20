import React, { useEffect } from 'react'

import CreateProduct from '../../../components/product/admin/CreateProduct'

export default function Create({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Thêm loại sản phẩm</h2>
        <CreateProduct />
      </div>
    </div>
  )
}
