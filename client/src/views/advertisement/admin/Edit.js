import React, { useEffect } from 'react'

import EditAdvertisement from '../../../components/advertisement/admin/EditAdvertisement'

export default function Edit({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Cập nhật slide quảng cáo </h2>
        <EditAdvertisement />
      </div>
    </div>
  )
}
