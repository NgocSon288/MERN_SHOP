import React from 'react'

import ListUser from './../../../components/user/admin/ListUser'

export default function List() {
  return (
    <div className='container'>
      <h2 className='text-center mb-4'>Danh sách người dùng</h2>
      <ListUser />
    </div>
  )
}
