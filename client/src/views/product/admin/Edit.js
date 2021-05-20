import React, { useEffect } from 'react'

import EditProduct from '../../../components/product/admin/EditProduct'

export default function Edit({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Cập nhật loại sản phẩm</h2>
        <EditProduct />
      </div>
    </div>
  )
}
