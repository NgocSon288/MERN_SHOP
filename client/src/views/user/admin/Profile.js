import React, { useEffect } from 'react'

import ProfileForm from './../../../components/user/admin/ProfileForm'

export default function Profile({ title }) {
  useEffect(() => {
    document.title = title
  })

  return (
    <div>
      <h2 className='mb-4'>Thông tin tài khoản</h2>

      <ProfileForm />
    </div>
  )
}
