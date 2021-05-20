import React, { useEffect } from 'react'

import EditCategory from '../../../components/category/admin/EditCategory'

export default function Edit({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Cập nhật loại sản phẩm</h2>
        <EditCategory />
      </div>
    </div>
  )
}
