import React, { useEffect } from 'react'

import AdminHome from './../../../components/sites/admin/AdminHome'

export default function Home({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <h2 className='mb-4'>Trang quản trị</h2>
      <AdminHome />
    </div>
  )
}
