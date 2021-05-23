import React, { useEffect } from 'react'

// import ListUser from './../../../components/user/admin/ListUser'

export default function Profile({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <h2 className='mb-4'>Thông tin tài khoản</h2>

    </div>
  )
}
