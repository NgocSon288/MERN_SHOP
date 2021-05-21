import React, { useEffect } from 'react'

import EditBrand from '../../../components/brand/admin/EditBrand'

export default function Edit({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Cập nhật nhãn hiệu</h2>
        <EditBrand />
      </div>
    </div>
  )
}
