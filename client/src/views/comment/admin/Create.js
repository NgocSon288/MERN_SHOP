import React, { useEffect } from 'react'

import CreateComment from '../../../components/comment/admin/CreateComment'

export default function Create({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <div>
        <h2 className='mb-4'>Thêm loại đánh giá</h2>
        <CreateComment />
      </div>
    </div>
  )
}
