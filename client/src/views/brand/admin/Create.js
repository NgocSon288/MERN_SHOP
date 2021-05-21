import React, { useEffect } from 'react'

import CreateBrand from '../../../components/brand/admin/CreateBrand'

export default function Create({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Cập nhật nhãn hiệu</h2>
        <CreateBrand />
      </div>
    </div>
  )
}
