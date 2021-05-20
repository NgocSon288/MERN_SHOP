import React, { useEffect } from 'react'

import ListUser from './../../../components/user/admin/ListUser'

export default function List({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <h2 className='mb-4'>Danh sách người dùng</h2>
      <ListUser />
    </div>
  )
}
