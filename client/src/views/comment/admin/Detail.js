import React, { useEffect } from 'react'

import DetailComment from '../../../components/comment/admin/DetailComment'

export default function Detail({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Thông tin đánh giá</h2>
        <DetailComment />
      </div>
    </div>
  )
}
