import React, { useEffect } from 'react'

import CreateAdvertisement from '../../../components/advertisement/admin/CreateAdvertisement'

export default function Create({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Thêm mới slide quảng cáo</h2>
        <CreateAdvertisement />
      </div>
    </div>
  )
}
